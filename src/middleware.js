import JWT from '@/utils/JWT'
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/api/admin') && pathname !== '/api/admin/auth') {
    const token = request.headers.get('Authorization');
    if (token) {
      const payload = await JWT.verify(token);
      if (payload) {
        const newToken = await JWT.generate({username: payload.payload.username});
        const response = NextResponse.next();
        response.headers.set('Authorization', newToken);
        return response; 
      } else {
        return NextResponse.json({ message: 'Token inválido', code: 1 }, { status: 401 });
      }
    } else {
      return NextResponse.json({ message: 'Token is null', code: 1 }, { status: 401 });
    }
  }

}