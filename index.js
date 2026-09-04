const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'playvortex.aternos.me',
    username: 'AFK_BOT',
    version: '1.21.11'
  });

  bot.on('spawn', () => {
    console.log('Bot serverga ulandi!');
    bot.chat('/register login12345 login12345'); // AuthMe parolingizni yozing
  });

  bot.on('end', () => {
    console.log('Ulanish uzildi, qayta ulanilmoqda...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log(err));
}

createBot();
