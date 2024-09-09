'use client'
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Page({ params }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/api/products/${params.id}`).then(res => res.json()).then(res => {
      setData(res.data)
    })
  }, [params.id]);

  return (
    <section className="">
      {data.featured_image && <Image src={`/images/${data.featured_image}`} alt={data.name} width={1920} height={1080} />}
      <div className="container mx-auto p-8">
        {data.name && <h1 className="text-3xl font-bold mb-4">{data.name}</h1>}
        {data.price && <p className="text-xl font-bold mb-4 text-red-600">￥{data.price}</p>}
        {data.description && <p className="text-gray-600 mb-4">{data.description}</p>}
      </div>
    </section>
  )
}