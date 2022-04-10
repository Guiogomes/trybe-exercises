import { Model as MoongoseModel, Document, Types } from 'mongoose';
import { ObjectId } from 'mongodb';
import Model from '../Interfaces/Model';

abstract class MongoModel<GenericModel> implements Model<GenericModel>{
  constructor(
    protected model: MoongoseModel<GenericModel & Document>
  ) {}

  create = async (data: GenericModel): Promise<GenericModel> => {
    const created = await this.model.create({...data});
    return created;
  }

  getAll = async (): Promise<GenericModel[]> => {
    const allRecords = await this.model.find();
    return allRecords;
  }
  
  getOne = async (id: string): Promise<GenericModel | null> => {
    const record = await this.model.findOne({ _id: id });
    return record; 
  }

  async update(id: string, data: GenericModel): Promise<GenericModel | null> {
    const updated = await this.model.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
    return updated;
  }

  async delete(id: string): Promise<GenericModel | null> {
    const deleted = await this.model.findByIdAndDelete({ _id: id });
    return deleted;
  };
  
}

export default MongoModel;