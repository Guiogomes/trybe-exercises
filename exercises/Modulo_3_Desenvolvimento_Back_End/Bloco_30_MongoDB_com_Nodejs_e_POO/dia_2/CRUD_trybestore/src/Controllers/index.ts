import { Request, Response } from "express";
import RequestIncrement from "../Interfaces/RequestIncrement";
import Service from "../Services";
import ControllerErrors from "../Enums/ControllerErrors";
import StatusCode from "../Enums/StatusCode";

export type ResponseError = {
  error: unknown;
};


abstract class Controller<GenericController> {
  abstract route: string;
  protected errors = ControllerErrors;
  protected status = StatusCode;

  constructor(protected service: Service<GenericController>) {}

  abstract create(
      req: RequestIncrement<GenericController>,
      res: Response<GenericController | ResponseError>,
      ): Promise<typeof res>;

  getAll = async(
    _req: Request,
    res: Response<GenericController[] | ResponseError>,
    ): Promise<typeof res> => {
      const allRecords = await this.service.getAll();
      return res.status(this.status.OK).json(allRecords);
    }

  getOne = async(req: Request, res: Response<GenericController | ResponseError>): Promise<typeof res> => {
    const { id } = req.params;
    const record = await this.service.getOne(id);
    if(!record) {
      return res.status(this.status.NOT_FOUND).json({ error: this.errors.notFound });
    }
    return res.status(this.status.OK).json(record);
  }

};

export default Controller;