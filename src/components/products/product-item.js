import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({id, title, desc, featured_image, price, img_w, img_h}) {
  return (
    <Link href={`/products/${id}`} className='shadow-md rounded-md overflow-hidden pb-4 cursor-pointer block'>
      <div className='w-full aspect-video'>
        <Image className='w-full h-full object-cover' src={featured_image} alt={title}  width={img_w ? img_w : 720} height={img_h ? img_h : 480}/>
      </div>
      <div className='px-2 py-3'>
        <h3 className='mt-2 text-md font-bold'>{title}</h3>
        <p className='mt-2 text-sm line-clamp-2'>{desc}</p>
        <p className='mt-2 text-md text-red-500'>￥{price}</p>
      </div>
    </Link>
  )
}
