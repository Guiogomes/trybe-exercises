import { model as createModel } from 'mongoose';
import { worldCupSchema, IWorldCup } from '../schemas/WorldCupSchema';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCup>('worldCups', worldCupSchema)) { }

  public async getAllWorldCups(): Promise<IWorldCup[]> {
    const worldCups = await this.worldCupModel.find();
    return worldCups;
  }
}

export default WorldCupModel;