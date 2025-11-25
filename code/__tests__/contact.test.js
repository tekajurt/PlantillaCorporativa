import { POST } from '../app/api/contact/route';
import { promises as fs } from 'fs';
import { join } from 'path';

const DATA_DIR = join(__dirname, '..', 'data');
const MESSAGES_FILE = join(DATA_DIR, 'messages.json');

describe('contact API', () => {
  afterEach(async () => {
    // clean messages file
    try {
      await fs.unlink(MESSAGES_FILE);
    } catch {
      // ignore
    }
  });

  it('returns 400 for invalid payload', async () => {
    const req = {
      json: async () => ({}),
      headers: { 'Content-Type': 'application/json' },
    };
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = JSON.parse(await res.text());
    expect(body.error).toBeDefined();
  });

  it('saves valid message and returns 201', async () => {
    const payload = { name: 'Test', email: 'test@example.com', message: 'Hello' };
    const req = {
      json: async () => payload,
      headers: { 'Content-Type': 'application/json' },
    };
    const res = await POST(req);
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.entry).toMatchObject({ name: 'Test', email: 'test@example.com', message: 'Hello' });

    // file should exist
    const raw = await fs.readFile(MESSAGES_FILE, 'utf8');
    const arr = JSON.parse(raw);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBeGreaterThan(0);
  });
});
