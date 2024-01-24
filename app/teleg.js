'use server'
import { kv } from "@vercel/kv";
import { Telegraf } from "telegraf";


const botkey = "6897101416:AAErpNOa8gujUQ7jyoOWmeNn1Z3jPfGbK7c"

const bot = new Telegraf(botkey)
bot.start((ctx) => ctx.reply('Welcome'));
const chat = await kv.hgetall(`chat:${id}`);

bot.launch();