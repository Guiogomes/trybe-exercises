import App from "./App";
import RecordStore from "./Interfaces/RecordStore";
import RecordStoreController from "./Controllers/RecordStore";
import GenericRouter from "./Routes/Routes";

const server = new App();

const recordStoreController = new RecordStoreController();

const recordStoreRoute = new GenericRouter<RecordStore>();

recordStoreRoute.addRoutes(recordStoreController);
server.addRouter(recordStoreRoute.router);

server.start();