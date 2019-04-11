const main = require('./src/cli.js');

main()
  .then((mvpPlayer) => {
    console.log(`The MVP is the player with nickname: ${mvpPlayer.nickname} and total rating: ${mvpPlayer.ratingPoints}`);
  })
  .catch((error) => {
    throw error;
  });

//module.exports = require('./src/cli.js');
