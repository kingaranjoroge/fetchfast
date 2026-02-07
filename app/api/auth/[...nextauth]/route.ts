import { handlers } from '@/app/auth';

// Re-export NextAuth handlers (catch-all route) with logging
export async function GET(req: Request) {
  console.log('[auth catch-all] GET url:', new URL(req.url).pathname, 'Cookie:', req.headers.get('cookie'));
  return handlers.GET(req as any);
}

export async function POST(req: Request) {
  console.log('[auth catch-all] POST url:', new URL(req.url).pathname, 'Cookie:', req.headers.get('cookie'));
  return handlers.POST(req as any);
}