import { once } from '../config/connection';
import { Game } from '../models';
import gameSeeds from './gameData.json';

once('open', async () => {
  await Game.deleteMany({});
  await Game.create(gameSeeds);

  console.log('all done!');
  process.exit(0);
});