import * as express from 'express';
import * as morgan from 'morgan';

import { NestFactory } from 'nest.js';
import { ApplicationModule } from './modules/app.module';

// Initialize express
const expressInstance = express();
// Initialize morgan for logging
expressInstance.use(morgan('dev'));

// Initialize application core
const app = NestFactory.create(ApplicationModule, expressInstance);

const port = process.env.PORT || 3000;

// Listen on port
app.listen(port, () => console.log(`Application is listening on port ${port}.`));
