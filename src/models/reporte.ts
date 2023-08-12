import { Schema, Types, model, models } from 'mongoose'

export interface IReport {
  description: string;
  files: string[];
  _id?: Types.ObjectId;
}

const ReportSchema = new Schema<IReport>({}, { strict: false });

const Reports = models.report || model<IReport>("report", ReportSchema);

export {
  Reports,
}