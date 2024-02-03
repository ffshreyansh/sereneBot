
const { clerkClient } = require('@clerk/clerk-sdk-node');
const { kv } = require('@vercel/kv');
const Telegram = require('node-telegram-bot-api');
require('dotenv').config();
const { OpenAI } = require('openai');



const bot = new Telegram(process.env.BOT, { polling: true });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const messageQueue = []; 

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.chat.username;
    const uusr = 'user_2bgkKR2FNxHCrjErINlLy68TOBa'
    const chats = await getChats(uusr)
    // Step 1: Send a welcome message
    console.log(chatId);
    bot.sendMessage(
      chatId,
      `Hello ${userName}... \n\nWelcome to Dr. Alaine bot! Please enter your email address to authenticate:`
    );
      console.log(chats);
  });
  

bot.onText(/(^[a-z ]+$)/i, async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const messages = [
    { role: 'system', content: "You are a helpful psychiatrist doctor name Dr. Alaine W. Chat like a freind, don't write huge paragraphs only small chat texts" },
    { role: 'user', content: text },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 50
    });
    // Add the response to the message queue
    messageQueue.push({ chatId, response });
    // console.log(messageQueue[0].choices)
    // Start polling the queue for responses
    pollMessageQueue();
  } catch (error) {
    console.error("Error:", error);
    bot.sendMessage(chatId, "An error occurred while generating the analogy.");
  }
});


function pollMessageQueue() {
  if (messageQueue.length > 0) {
    const { chatId, response } = messageQueue.shift(); 
    const completion = response.choices[0].message.content;

    bot.sendMessage(chatId, completion, {
      parse_mode: 'Markdown', // You can adjust the parse_mode if needed
    });

    // Continue polling for more responses
    setTimeout(pollMessageQueue, 1000); // Poll every 1 second (adjust as needed)
  }
}


async function getChats(userId) {
  if (!userId) {
    return [];
  }

  try {
    const pipeline = kv.pipeline();
    const chats = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true,
    });

    for (const chat of chats) {
      pipeline.hgetall(chat);
    }

    const results = await pipeline.exec();

    return results;
  } catch (error) {
    return [];
  }
}
