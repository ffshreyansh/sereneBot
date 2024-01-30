const  { Telegraf, Markup } = require("telegraf");


const botkey = "6897101416:AAErpNOa8gujUQ7jyoOWmeNn1Z3jPfGbK7c"
const web_link = 'https://serene-bot.vercel.app/chat'
const pro_link = 'https://serene-bot.vercel'
const bot = new Telegraf(botkey)

bot.start((ctx) => {

  const keyboard = Markup.inlineKeyboard([
      [Markup.button.webApp("Talk to Me", web_link)],
      [Markup.button.callback('Upgrade to Pro', pro_link)],
      // Add more buttons as needed
  ]);
  ctx.reply('Hi There!, My name is Dr. Alaine, a seasoned psychologist with an illustrious career spanning over two decades. ', keyboard);
});

bot.action('Upgrade to Pro', (ctx) => {
  // Handle Option 1 here
  ctx.reply('You are redirected to payment page');
});



  bot.launch()