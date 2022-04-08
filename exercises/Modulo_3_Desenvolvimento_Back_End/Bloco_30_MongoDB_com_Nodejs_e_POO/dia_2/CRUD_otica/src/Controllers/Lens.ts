// src/Controllers/Frame.ts

import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import Lens from '../Interfaces/Lens';
import LensService from '../Services/Lens';

class LensController extends Controller<Lens> {
  private router: string;

  constructor(
    service = new LensService(),
    route = '/lenses',
  ) {
    super(service);
    this.router = route;
  }

  get route() { return this.router; }

  create = async (
    req: RequestWithBody<Lens>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const frame = await this.service.create(body);
      if (!frame) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in frame) {
        return res.status(400).json(frame);
      }
      return res.status(201).json(frame);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const frame = await this.service.readOne(id);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default LensController;