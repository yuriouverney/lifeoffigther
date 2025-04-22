import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

import router from './routes/index.js';
import { sequelize } from './models/index.js';
import rateLimiter from './middlewares/rateLimiter.js';
import errorHandler from './middlewares/errorHandler.js';
import { startCronJobs } from './cron/index.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
export const io = new Server(server,{ cors:{ origin:'*' }});

app.use(helmet());
app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);
app.use(errorHandler);

io.on('connection',socket=>{
  console.log('socket',socket.id,'connected');
  socket.on('join', userId=>socket.join(userId.toString()));
});

const PORT = process.env.PORT||3000;
sequelize.sync().then(()=>{
  server.listen(PORT, ()=>console.log('Backend listening on',PORT));
  startCronJobs();
});
