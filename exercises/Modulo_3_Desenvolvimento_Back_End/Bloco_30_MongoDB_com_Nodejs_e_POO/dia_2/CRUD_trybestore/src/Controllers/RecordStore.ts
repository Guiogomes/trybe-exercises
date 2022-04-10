import { Request, Response } from "express";
import RequestIncrement from "../Interfaces/RequestIncrement";
import RecordStoreService from "../Services/RecordStore";
import ControllerErrors from "../Enums/ControllerErrors";
import StatusCode from "../Enums/StatusCode";
import Controller, { ResponseError } from ".";
import RecordStore from "../Interfaces/RecordStore";


class RecordStoreController extends Controller<RecordStore> {
  private _route: string;
  status = StatusCode;
  errors = ControllerErrors;
  constructor(service = new RecordStoreService(), route = '/store') {
    super(service);
    this._route = route;
  }

  get route(): string {
    return this._route;
  }

  create = async (req: RequestIncrement<RecordStore>, res: Response<RecordStore | ResponseError>): Promise<typeof res | undefined> => {
    const { body } = req;
    try {
      const created = await this.service.create(body);
      if(!created) {
        return res.status(this.status.INTERNAL_SERVER_ERROR).json({ error: this.errors.internal });
      }
      return res.status(this.status.CREATED).json(created);
    } catch (error) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({ error: this.errors.internal });
    }
  }

  getAll = async (_req: Request, res: Response<RecordStore[] | ResponseError>): Promise<typeof res> => {
    const allRecords = await this.service.getAll();
    return res.status(this.status.OK).json(allRecords);
  }

  getOne = async (req: Request, res: Response<RecordStore | ResponseError>): Promise<typeof res> => {
    const { id } = req.params;
    const record = await this.service.getOne(id);
    if(!record) {
      return res.status(this.status.NOT_FOUND).json({ error: this.errors.notFound });
    }
    return res.status(this.status.OK).json(record);
  }

  update = async (req: RequestIncrement<RecordStore>, res: Response<RecordStore | ResponseError>): Promise<typeof res | undefined> => {
    const { id } = req.params;
    const { body } = req;
    try {
      const updated = await this.service.update(id, body);
      if(!updated) {
        return res.status(this.status.INTERNAL_SERVER_ERROR).json({ error: this.errors.internal });
      }
      return res.status(this.status.OK).json(updated);
    } catch (error) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({ error: this.errors.internal });
    }
  }

  delete = async (req: Request, res: Response<RecordStore | ResponseError>): Promise<typeof res> => {
    const { id } = req.params;
    const deleted = await this.service.delete(id);
    if(!deleted) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({ error: this.errors.internal });
    }
    return res.status(this.status.OK).json(deleted);
  }
}

export default RecordStoreController;