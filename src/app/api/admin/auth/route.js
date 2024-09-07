import { NextResponse } from "next/server";
import userModule from '@/modules/users'
import JWT from "@/utils/JWT";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { username, password } = await request.json();
  const data = await userModule.get(username);
  if (data && data.length === 0) return NextResponse.json({ message: '用户不存在', code: 1 });
  const isPasswordValid = await bcrypt.compare(password, data[0].password);
  if (!isPasswordValid) return NextResponse.json({ message: '密码错误', code: 1 });
  const token = await JWT.generate({ username: data[0].username});
  return NextResponse.json({ message: 'auth success', code: 0}, { status: 200, headers: { "authorization": token } });
}