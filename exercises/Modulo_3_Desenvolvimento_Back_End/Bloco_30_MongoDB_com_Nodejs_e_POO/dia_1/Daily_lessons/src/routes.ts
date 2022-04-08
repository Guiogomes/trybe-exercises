import { Router } from 'express';

import WorldCupController from './controllers/WorldCupController';

const worldCupController = new WorldCupController();
const routes = Router();

const cupsId = '/worldcup/:year';

routes.get('/worldcup', worldCupController.getAllWorldCups);
routes.post('/worldcup', worldCupController.createWorldCup);
routes.put(cupsId, worldCupController.updateWorldCup);
routes.delete(cupsId, worldCupController.deleteWorldCup);
routes.get(cupsId, worldCupController.getWorldCupByYear);

export default routes;