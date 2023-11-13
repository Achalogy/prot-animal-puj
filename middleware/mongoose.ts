import mongoose from 'mongoose';

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (!process.env.MONGOOSE_TOKEN) return console.log("NO MONGOOSE TOKEN")
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGOOSE_TOKEN, {
    dbName: "paj"
  });
  return handler(req, res);
};

export default connectDB;