import { NextResponse } from "next/server";
import JWT from "@/utils/JWT";

export async function POST(request) {
  const info = await request.json();
  console.log(info);
  return NextResponse.json({
    code: 0,
    message: "success",
    data: {}
  })
}