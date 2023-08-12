import { NextApiRequest } from "next";
import { IAccount } from "./models/accounts";

export interface CustomRequest extends NextApiRequest {
  account?: IAccount
}