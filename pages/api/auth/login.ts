import connectDB from "middleware/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import NextCors from "nextjs-cors";
import { Accounts, IAccount } from "src/models/accounts";
import { compare } from 'bcrypt'

export default connectDB(async (req: NextApiRequest, res: NextApiResponse) => {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method !== "POST") return res.status(404).send("Not Found");

  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).send("Debes enviar usuario y contraseña...");
  }

  const account: IAccount | null = await Accounts.findOne({
    username: (username ?? "").toLowerCase().toString(),
  });

  if (!process.env.TOKEN_KEY) return res.status(500).send("Internal Server Error")

  if (account && (await compare(password, account.password))) {
    const token = sign(
      { id: account._id, username: account.username },
      process.env.TOKEN_KEY,
      {
        expiresIn: 60 * 60 * 24 * 7,
      }
    );
    return res.status(200).json({
      account: {
        username: account.username,
      },
      token: token,
    })
  }

  return res.status(400).send("Credenciales Incorrectas")
})