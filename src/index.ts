import * as dotenv from 'dotenv';
import App from './app';

dotenv.config();
const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.info(`Listening at http://localhost:${port}`);
});
