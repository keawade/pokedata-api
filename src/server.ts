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

// Listen on port
app.listen(process.env.PORT, () => console.log(`Application is listening on port ${process.env.PORT}.`));
