import express, { Router } from 'express';
import connectToDatabase from './Models/Connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public start(port = 3001) {
    connectToDatabase();
    const possiblePort = process.env.PORT || port;
    this.app.listen(possiblePort, () => {
      console.log(`Server is running on port ${possiblePort}`);
    });
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;