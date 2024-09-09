import { NextResponse } from "next/server";
import productModule from '@/modules/products'

export async function GET(request, {params}) {
  const data = await productModule.get(params.id)
  return NextResponse.json({
    code: 0,
    message: "success",
    data: data.length === 1 ? data[0] : []
  })
}