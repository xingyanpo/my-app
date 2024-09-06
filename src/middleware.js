import JWT from '@/utils/JWT'

export function middleware(request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!token) {
      return new Response('未授权', { status: 403 });
    }
    try {
      const decoded = JWT.verify(token);
      request.user = decoded;
    } catch (error) {
      return new Response('无效的令牌', { status: 401 });
    }
  }
}

export const config = {
  matcher: ['/admin/:path*']
};