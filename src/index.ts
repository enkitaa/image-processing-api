// Index file for image processing API

import express from 'express';
import routes from './routes/index';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(
  morgan(
    ':date[web] :method :url :status :response-time ms - :res[content-length]'
  )
);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Open browser with http://localhost:${port}`);
});

export default app;
