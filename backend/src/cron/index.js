import cron from 'node-cron';
import { User } from '../models/index.js';

export const startCronJobs = ()=>{
  // regenerate 10 energy every hour
  cron.schedule('0 * * * *', async ()=>{
    await User.increment({ energy:10 },{ where:{ energy:{ ['<']:100 }}});
    console.log('[CRON] Energy regenerated');
  });
};
