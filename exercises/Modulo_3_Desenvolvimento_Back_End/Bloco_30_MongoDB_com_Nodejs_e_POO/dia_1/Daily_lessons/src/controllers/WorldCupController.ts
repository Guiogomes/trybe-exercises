import { Request, Response } from "express";
import WorldCupService from "../services/WorldCupService";

class WorldCupController {
  constructor(private worldCupService = new WorldCupService()) { }

  notFound = 'World Cup not found';

  internalError = 'Internal server error';

  
  public getAllWorldCups = async (req: Request, res: Response): Promise<Response> => {
    const worldCups = await this.worldCupService.getAllWorldCups();
    return res.status(200).json(worldCups);
  }

  public getWorldCupByYear = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    const worldCup = await this.worldCupService.getWorldCupByYear(year);
    if (!worldCup) {
      return res.status(404).json(this.notFound);
    }
    return res.status(200).json(worldCup);
  }

  public createWorldCup = async (req: Request, res: Response): Promise<Response> => {
    const worldCup = await this.worldCupService.createWorldCup(req.body);
    return res.status(201).json(worldCup);
  }

  public updateWorldCup = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    const worldCup = await this.worldCupService.updateWorldCup(year, req.body);
    if (!worldCup) {
      return res.status(404).json(this.notFound);
    }
    return res.status(200).json(worldCup);
  }

  public deleteWorldCup = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    const worldCup = await this.worldCupService.deleteWorldCup(year);
    if (!worldCup) {
      return res.status(404).json(this.notFound);
    }
    return res.status(200).json(worldCup);
  }
}

export default WorldCupController;