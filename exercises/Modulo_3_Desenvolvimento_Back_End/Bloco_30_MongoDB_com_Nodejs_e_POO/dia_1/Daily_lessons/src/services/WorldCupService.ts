import WorldCupModel from '../models/WorldCupModel';
import { IWorldCup } from '../schemas/WorldCupSchema';

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {  }

  public async getAllWorldCups(): Promise<IWorldCup[]> {
    const worldCups = await this.worldCupModel.getAllWorldCups();
    console.log(worldCups);
    return worldCups;
  }

  public async getWorldCupByYear(year: string): Promise<IWorldCup | null> {
    const worldCup = await this.worldCupModel.getWorldCupByYear(year);
    return worldCup;
  }

  public async createWorldCup(worldCup: IWorldCup): Promise<IWorldCup> {
    const newWorldCup = await this.worldCupModel.createWorldCup(worldCup);
    return newWorldCup;
  }

  public async updateWorldCup(year: string, worldCup: IWorldCup): Promise<IWorldCup | null> {
    const updatedWorldCup = await this.worldCupModel.updateWorldCup(year, worldCup);
    return updatedWorldCup;
  }

  public async deleteWorldCup(year: string): Promise<IWorldCup | null> {
    const deletedWorldCup = await this.worldCupModel.deleteWorldCup(year);
    return deletedWorldCup;
  }
}

export default WorldCupService;