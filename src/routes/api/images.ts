import express from 'express';
import { resize } from '../../modules/resize';
import path from 'path';

const images = express.Router();

//Request to serve processed image using resize module
images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    if (req.query.width && req.query.height && req.query.filename) {
      const widthStr = req.query.width as string;
      const heightStr = req.query.height as string;
      const filename = req.query.filename as string;

      const width: number = parseInt(widthStr),
        height: number = parseInt(heightStr);

      resize(filename, width, height)
        .then((cachepath) => {
          res.type('image/jpg');
          res.sendFile(`${path.resolve(cachepath as string)}`);
          return;
        })
        .catch((err) =>
          res.send(
            `${err}, Please provide filename available in assets & proper dimensions`
          )
        );
    } else {
      res.send('Please provide proper query parameters');
    }
  }
);

export default images;
