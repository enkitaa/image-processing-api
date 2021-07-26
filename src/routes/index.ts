import express from 'express';
import images from './api/images';
const routes = express.Router();

routes.use('/images', images);
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Please provide a file with dimensions to continue..');
});
export default routes;
