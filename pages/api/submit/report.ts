import connectDB from "middleware/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { Reports } from "src/models/reporte";

export default connectDB(async (req: NextApiRequest, res: NextApiResponse) => {
  const { files, description } = req.body;

  if(!description) return res.status(400).end('Invalid Body')

  await Reports.create({
    description: description.trim(),
    files
  })

  return res.status(200).end("OK")
})