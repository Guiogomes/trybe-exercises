import { Request, Response } from "express";
import WorldCupService from "../services/WorldCupService";

class WorldCupController {
  private worldCupService: WorldCupService;

  notFound = 'World Cup not found';

  internalError = 'Internal server error';

  constructor() {
    this.worldCupService = new WorldCupService();
  }

  public async getAllWorldCups(req: Request, res: Response): Promise<Response> {
    try {
      const worldCups = await this.worldCupService.getAllWorldCups();
      return res.status(200).json(worldCups);
    } catch (e: unknown) {
      res.status(500).json({ message: this.internalError });
    }
  }
}