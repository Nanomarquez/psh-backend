import cron from 'node-cron';
import { createRandomStat } from '../services/statService';

cron.schedule('*/5 * * * *', async () => {
  console.log('Generating stats...');
  await createRandomStat();
});
