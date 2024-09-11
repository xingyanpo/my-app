import { NextResponse } from "next/server";
import headerNavModule from '@/modules/header_nav'

export async function GET(request) {
  let data = await headerNavModule.get();
  const map = {};
  data.forEach(item => {
    map[item.id] = { ...item, children: [] };
  });
  const result = [];
  data.forEach(item => {
    if (item.parent_id === null) {
      result.push(map[item.id]);
    } else {
      map[item.parent_id].children.push(map[item.id]);
    }
  });
  return NextResponse.json({
    code: 0,
    message: "success",
    data: result
  })
}