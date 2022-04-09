import mongoose from "mongoose";

const connectToDatabase = (
  mongoDataBaseURI = process.env.MONGO_URI
  || "mongodb://root:example@localhost:27017/TrybeStore?authSource=admin",
  ) => mongoose.connect(mongoDataBaseURI);

export default connectToDatabase;