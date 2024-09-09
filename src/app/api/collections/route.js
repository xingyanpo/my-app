import { NextResponse } from "next/server";
import collectionsModule from '@/modules/collections'
import collectionsProducts from '@/utils/collections_products'

export async function GET(request) {
  let data = await collectionsModule.get();
  return NextResponse.json({
    code: 0,
    message: "success",
    data: collectionsProducts(data)
  })
}