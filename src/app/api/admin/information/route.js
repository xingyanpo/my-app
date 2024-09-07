import { NextResponse } from "next/server";
import informationModule from '@/modules/information'

export async function GET(request) {
  return NextResponse.json({
    code: 0,
    message: "success",
    data: await informationModule.get()
  })
}