import RecordStore, { RecordStoreSchema } from "../Interfaces/RecordStore";
import Service from ".";
import ServiceError from "../Interfaces/ServiceError";
import RecordStoreModel from "../Models/RecordStore";

class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }

  create = async (data: RecordStore): Promise<RecordStore | ServiceError> => {
    const parsed = RecordStoreSchema.safeParse(data);
    if(!parsed.success) {
      return { error: parsed.error };
    }
    const created = await this.model.create(data);
    return created;
  }

  update(id: string, data: RecordStore): Promise<RecordStore | ServiceError | null> {
    if(data.format === 'CD' && data.yearPublished <= 1997) {
      const updated = this.model.update(id, {...data, new: false });
      return updated;
    }
    const updated = this.model.update(id, data);
    return updated;
  }
}