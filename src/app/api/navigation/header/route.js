import { NextResponse } from "next/server";
import headerNavModule from '@/modules/header_nav'

export async function GET(request) {
  return NextResponse.json({
    code: 0,
    message: "success",
    data: await headerNavModule.get()
  })
}