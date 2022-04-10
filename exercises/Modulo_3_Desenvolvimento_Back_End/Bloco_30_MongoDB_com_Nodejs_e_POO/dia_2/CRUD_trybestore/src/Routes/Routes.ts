import { Router } from "express";
import Controller from "../Controllers";

class GenericRouter<GenericController> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoutes(
    controller: Controller<GenericController>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.getAll);
    this.router.get(`${route}/:id`, controller.getOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}

export default GenericRouter;