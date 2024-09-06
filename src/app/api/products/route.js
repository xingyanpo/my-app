import { NextResponse } from "next/server";
import productModule from '@/modules/products'

export async function GET(request) {
  return NextResponse.json({
    code: 0,
    message: "success",
    data: await productModule.get()
  })
}