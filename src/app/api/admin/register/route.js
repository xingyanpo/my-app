import { NextResponse } from "next/server";
import userModule from '@/modules/users'
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { username, password } = await request.json();
  const data = await userModule.get(username);
  if (data.length > 0) return NextResponse.json({ message: "Username already exists", code: 1 }, { status: 409 });
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await userModule.post(username, hashedPassword);
  if (result.affectedRows === 1) return NextResponse.json({ message: "User created successfully", code: 0 }, { status: 200 });
  return NextResponse.json({ message: "Error creating user", code: 1 }, { status: 500 });
}