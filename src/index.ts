// Index file for image processing API

import express from 'express';
import { resize } from './modules/resize';

const app = express();
const port = 3000;

//Request to serve processed image using resize module
app.get('/', (req: express.Request, res: express.Response): void => {
  const widthStr = req.query.width as string;
  const heightStr = req.query.height as string;
  const filename = req.query.filename as string;

  let width: number = parseInt(widthStr),
    height: number = parseInt(heightStr);

  res.type(`image/jpg`);
  resize(`assets/original/${filename}.jpg`, 'jpg', width, height).pipe(res);

  /*Todo - 1) Add caching*/
});

app.listen(port, () => {
  console.log(`Open browser with http://localhost:${port}`);
});
