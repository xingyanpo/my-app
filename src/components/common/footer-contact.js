'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'

export default function FooterContact() {
  const [info, setInfo] = React.useState(null);
  const medias = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'facebook.svg'
    },
    {
      name: 'X',
      url: 'https://twitter.com/',
      icon: 'x.svg'
    },
    {
      name: 'Tiktok',
      url: 'https://www.tiktok.com/',
      icon: 'tiktok.svg'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/',
      icon: 'youtube.svg'
    }
  ]
  useEffect(() => {
    fetch('/api/information').then(res => res.json()).then(data => {
      setInfo(data.data);
    })
  }, [])
  return (
    <div>
      <div className='text-left pb-4'>
        <div className='logo h-full w-36 mb-3'>
          <Link href={'/'}><Image src={`/images/logo.jpg`} width={200} height={200} alt="logo" className='w-full h-full object-cover' priority={true} /></Link>
        </div>
        <h3 className='text-xl font-bold'>{info?.name}</h3>
        <p className='text-md'>Address: {info?.address}</p>
        <p className='text-md'>TEL: {info?.phone}</p>
        <p className='text-md'>Email: {info?.email}</p>
      </div>
      <div className='flex items-center justify-start gap-3 '>
        {
          medias.map((media, index) => {
            return (
              <Link href={media.url} key={index} className='w-9 h-9 block bg-white rounded-sm overflow-hidden p-1'>
                <Image src={`/svg/${media.icon}`} width={120} height={120} alt={media.name} />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
