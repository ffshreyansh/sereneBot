import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT); // Use your bot token here

// Define your bot behavior
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

export default async (req, res) => {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body, res);
    res.status(200).end();
  }
};
