import WorldCupModel from '../models/WorldCupModel';
import { IWorldCup } from '../schemas/WorldCupSchema';

class WorldCupService {
  private worldCupModel: WorldCupModel;

  constructor() {
    this.worldCupModel = new WorldCupModel();
  }

  public async getAllWorldCups(): Promise<IWorldCup[]> {
    const worldCups = await this.worldCupModel.getAllWorldCups();
    return worldCups;
  }
}

export default WorldCupService;