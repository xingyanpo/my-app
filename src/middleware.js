import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!request.nextUrl.pathname.startsWith('/admin/login')) {
      if (true) {
        //已经登录什么都不做
      } else {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    }
  };
  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    console.log('api/admin')
  }
}