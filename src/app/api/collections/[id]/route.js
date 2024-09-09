import { NextResponse } from "next/server";
import collectionsModule from '@/modules/collections'
import collectionsProducts from '@/utils/collections_products'

export async function GET(request, {params}) {
  let data = await collectionsModule.get(params.id);
  return NextResponse.json({
    code: 0,
    message: "success",
    data: data?.length !== 0 ? collectionsProducts(data)[0] : []
  })
}