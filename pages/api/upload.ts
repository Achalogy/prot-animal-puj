// Importar el módulo multer
import multer from 'multer';
import {
  S3Client,
  PutObjectCommand
} from "@aws-sdk/client-s3"; import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';

const upload = multer({ storage: multer.memoryStorage() });

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async (req: any, res: NextApiResponse) => {
  await runMiddleware(req, res, upload.single('media'));

  if (!req.file) return res.status(400).end("No File")

  if (req.file.size > 64000000000) return res.status(400).end("File Too Large");

  const s3 = new S3Client({
    endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.SECRET_ACCESS_KEY ?? ""
    },
    region: "auto"
  })

  const filename = `${uuidv4()}.${(req.file.mimetype + "").split("/")[1]}`

  await s3.send(
    new PutObjectCommand({
      Bucket: "paj",
      Body: req.file.buffer,
      Key: filename,
      ContentType: req.file.mimetype,
    })
  )

  res.status(200).end(
    `${process.env.PUBLIC_URL}${filename}`
  )

};

export const config = {
  api: {
    bodyParser: false
  }
}