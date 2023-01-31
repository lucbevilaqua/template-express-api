import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  public server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.cors();
    this.routes();
  }

  cors() {
    this.server.use(cors());
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
