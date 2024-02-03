'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { kv } from '@vercel/kv';
import { auth } from '@clerk/nextjs';

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

async function getChat(id, userId) {
  const chat = await kv.hgetall(`chat:${id}`);

  if (!chat || (userId && chat.userId !== userId)) {
    return null;
  }

  return chat;
}

async function removeChat({ id, path }) {
  const session = auth()?.sessionId;
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  const uid = await kv.hget(`chat:${id}`, 'userId');

  if (uid !== session?.userId) {
    return {
      error: 'Unauthorized',
    };
  }

  await kv.del(`chat:${id}`);
  await kv.zrem(`user:chat:${session.user.id}`, `chat:${id}`);

  revalidatePath('/');
  return revalidatePath(path);
}

async function clearChats() {
  const session = auth();

  if (!session?.userId) {
    return {
      error: 'Unauthorized',
    };
  }

  const chats = await kv.zrange(`user:chat:${session.userId}`, 0, -1);
  if (!chats.length) {
    return redirect('/');
  }
  const pipeline = kv.pipeline();

  for (const chat of chats) {
    pipeline.del(chat);
    pipeline.zrem(`user:chat:${session.userId}`, chat);
  }

  await pipeline.exec();

  revalidatePath('/');
  return redirect('/');
}

async function getSharedChat(id) {
  const chat = await kv.hgetall(`chat:${id}`);

  if (!chat || !chat.sharePath) {
    return null;
  }

  return chat;
}

async function shareChat(id) {
  const session = auth();

  if (!session?.userId) {
    return {
      error: 'Unauthorized',
    };
  }

  const chat = await kv.hgetall(`chat:${id}`);

  if (!chat || chat.userId !== session.userId) {
    return {
      error: 'Something went wrong',
    };
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`,
  };

  await kv.hmset(`chat:${chat.id}`, payload);

  return payload;
}

export {
  getChats,
  getChat,
  removeChat,
  clearChats,
  getSharedChat,
  shareChat,
  // getUserId
};
