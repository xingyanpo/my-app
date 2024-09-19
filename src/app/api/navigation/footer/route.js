import { NextResponse } from "next/server";
import headerNavModule from '@/modules/footer_nav'

export async function GET(request) {
  let data = await headerNavModule.get();
  if (data?.length > 0) {
    data = data.reduce((acc, item) => {
      const existingCategory = acc.find(cat => cat.title === item.title);
      if (existingCategory) {
        existingCategory.subItems.push({
          sub_title: item.sub_title,
          sub_route: item.sub_route
        });
      } else {
        acc.push({
          title: item.title,
          route: item.route,
          subItems: [{
            sub_title: item.sub_title,
            sub_route: item.sub_route
          }]
        });
      }
      return acc;
    }, []);
  }
  return NextResponse.json({
    code: 0,
    message: "success",
    data
  })
}