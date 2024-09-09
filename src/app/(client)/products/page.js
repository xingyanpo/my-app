'use client'
import { useEffect, useState } from "react"
import ProductItem from '@/components/products/product-item'

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setData(data.data)
    })
  }, []);

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data.map((item) => (
            <ProductItem key={item.id} title={item.title} desc={item.description} id={item.id} featured_image={`/images/${item.featured_image}`} price={item.price} url={`/products/${item.id}`}/>
          ))
        }
      </div>
    </section>
  )
}