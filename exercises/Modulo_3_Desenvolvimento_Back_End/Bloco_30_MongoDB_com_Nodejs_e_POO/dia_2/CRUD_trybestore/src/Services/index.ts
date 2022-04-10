import Model from '../Interfaces/Model';
import ServiceError from '../Interfaces/ServiceError';

abstract class Service<GenericType> {
  constructor(
    protected model: Model<GenericType>
  ) { }

  create = async (data: GenericType): Promise<GenericType | null | ServiceError> => {
    const created = await this.model.create(data);
    return created;
  }

  getAll = async (): Promise<GenericType[]> => {
    const allRecords = await this.model.getAll();
    console.log(allRecords);
    return allRecords;
  }

  getOne = async (id: string): Promise<GenericType | null | ServiceError> => {
    const record = await this.model.getOne(id);
    return record;
  }

  async update(id: string, data: GenericType): Promise<GenericType | null | ServiceError> {
    const updated = await this.model.update(id, data);
    return updated;
  }

  async delete(id: string): Promise<GenericType | null | ServiceError> {
    const deleted = await this.model.delete(id);
    return deleted;
  }
};

export default Service;
