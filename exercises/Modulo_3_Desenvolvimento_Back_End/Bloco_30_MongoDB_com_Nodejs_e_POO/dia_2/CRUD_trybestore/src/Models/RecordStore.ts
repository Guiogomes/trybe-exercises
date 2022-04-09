import { Schema, model as createModel } from 'mongoose';
import { RecordStoreDocument } from "../Interfaces/RecordStore";
import RecordStore from '../Interfaces/RecordStore';
import MongoModel from './MongoModel';

const RecordStoreSchema = new Schema<RecordStoreDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
});

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(model = createModel('RecordStore', RecordStoreSchema)) {
    super(model);
  }
};

export default RecordStoreModel;