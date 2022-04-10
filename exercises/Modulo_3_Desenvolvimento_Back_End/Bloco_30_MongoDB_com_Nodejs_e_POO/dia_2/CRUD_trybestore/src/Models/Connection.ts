import mongoose from "mongoose";

const connectToDatabase = (
  mongoDataBaseURI = process.env.MONGO_URI
  || "mongodb://localhost:27017/TrybeStore",
  ) => mongoose.connect(mongoDataBaseURI);

export default connectToDatabase;