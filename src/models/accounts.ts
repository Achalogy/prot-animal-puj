import { Schema, Types, model, models } from 'mongoose'

export interface IAccount {
  username: string;
  password: string;
  _id?: Types.ObjectId;
}

const AccountSchema = new Schema<IAccount>({}, { strict: false });

const Accounts = models.account || model<IAccount>("account", AccountSchema);

export {
  Accounts,
}