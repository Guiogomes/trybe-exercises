import mongoose from "mongoose";

const connectToDatabase = (
    mongoDataBaseURI = 'mongodb://localhost:27017/TrybeStore'
  ) => mongoose.connect(mongoDataBaseURI);

export default connectToDatabase;