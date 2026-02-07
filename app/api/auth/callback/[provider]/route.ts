import { handlers } from '@/app/auth';

// Callback route for OAuth providers (e.g. /api/auth/callback/google)
export async function GET(req: Request) {
  console.log('[auth callback] GET Cookie header:', req.headers.get('cookie'));
  return handlers.GET(req as any);
}

export async function POST(req: Request) {
  console.log('[auth callback] POST Cookie header:', req.headers.get('cookie'));
  return handlers.POST(req as any);
} 