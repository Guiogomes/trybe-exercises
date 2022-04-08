import { model as createModel } from 'mongoose';
import { WorldCupSchema, IWorldCup } from '../schemas/WorldCupSchema';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCup>('tournaments', WorldCupSchema)) { }

  public async getAllWorldCups(): Promise<IWorldCup[]> {
    const worldCups = await this.worldCupModel.find();
    return worldCups;
  }

  public async getWorldCupByYear(year: string): Promise<IWorldCup | null> {
    const worldCup = await this.worldCupModel.findOne({ year });
    return worldCup;
  }

  public async createWorldCup(worldCup: IWorldCup): Promise<IWorldCup> {
    const newWorldCup = await this.worldCupModel.create(worldCup);
    return newWorldCup;
  }

  public async updateWorldCup(year: string, worldCup: IWorldCup): Promise<IWorldCup | null> {
    const updatedWorldCup = await this.worldCupModel.findOneAndUpdate({ year }, { ...worldCup }, { new: true });
    return updatedWorldCup;
  }

  public async deleteWorldCup(year: string): Promise<IWorldCup | null> {
    const deletedWorldCup = await this.worldCupModel.findOneAndDelete({ year });
    return deletedWorldCup;
  }
}

export default WorldCupModel;