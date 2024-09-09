'use client'
import { useEffect, useState } from "react"
import ProductItem from '@/components/products/product-item'

export default function Page({ params }) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/api/collections/${params.id}`).then(res => res.json()).then(res => {
      setData(res.data)
    })
  }, [params.id]);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data?.products?.map((item) => (
            <ProductItem key={item.product_id} title={item.product_name} desc={item.product_description} id={item.product_id} featured_image={`/images/${item.product_featured_image}`} price={item.product_price} url={`/products/${item.product_id}`} />
          ))
        }
      </div>
    </section>
  )
}