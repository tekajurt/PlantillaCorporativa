import { promises as fs } from 'fs';
import { join } from 'path';

// Use process.cwd() so the module can be required in test environments (Jest)
const DATA_DIR = join(process.cwd(), 'data');
const MESSAGES_FILE = join(DATA_DIR, 'messages.json');

function makeResponse(data, status = 200) {
  const body = JSON.stringify(data);
  return {
    status,
    headers: { 'Content-Type': 'application/json' },
    text: async () => body,
    json: async () => data,
  };
}

function respond(data, status = 200) {
  const body = JSON.stringify(data);
  if (typeof Response !== 'undefined') {
    return new Response(body, { status, headers: { 'Content-Type': 'application/json' } });
  }
  return makeResponse(data, status);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return makeResponse({ error: 'name, email and message are required' }, 400);
    }

    // simple email validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return makeResponse({ error: 'invalid email' }, 400);
    }

    await fs.mkdir(DATA_DIR, { recursive: true });

    let messages = [];
    try {
      const raw = await fs.readFile(MESSAGES_FILE, 'utf8');
      messages = JSON.parse(raw);
      if (!Array.isArray(messages)) messages = [];
    } catch {
      // file may not exist yet — ignore
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    messages.push(entry);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');

    return respond({ ok: true, entry }, 201);
  } catch (err) {
    return respond({ error: 'internal_error', detail: String(err) }, 500);
  }
}
