import express from 'express';
import { resize } from '../../modules/resize';
const images = express.Router();

//Request to serve processed image using resize module
images.get('/', (req: express.Request, res: express.Response): void => {
    const widthStr = req.query.width as string;
    const heightStr = req.query.height as string;
    const filename = req.query.filename as string;

    let width: number = parseInt(widthStr),
        height: number = parseInt(heightStr);

    res.type(`image/jpg`);
    resize(`assets/original/${filename}.jpg`, 'jpg', width, height).pipe(res);
    // .toFile('assets/thumbs/newFile.jpg');

    /*Todo - 1) Add caching*/
});

export default images;
