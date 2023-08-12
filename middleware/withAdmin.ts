import { verify } from "jsonwebtoken";
import { CustomRequest } from "src/interfaces";
import { NextApiResponse, NextApiHandler } from "next";
import { Accounts } from "src/models/accounts";

export default async (req: CustomRequest, res: NextApiResponse, next: NextApiHandler) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded: any = verify(token.split(" ").at(-1) ?? "", process.env.TOKEN_KEY ?? "");
    req.account = await Accounts.findOne({
      username: decoded.username,
    }) ?? undefined;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next(req, res);
};