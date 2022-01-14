import { main } from './src/cli';

(async() => {
  try {
    const mvpPlayer = await main();
    console.log(`The MVP is the player with nickname: ${mvpPlayer?.nickname} and total rating: ${mvpPlayer?.ratingPoints}`);
  } catch(error) {
    console.error(error)
    throw error;
  }
})()

//module.exports = require('./src/cli.js');
