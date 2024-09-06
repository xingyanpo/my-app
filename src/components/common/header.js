'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Component() {
  const [nav, setNav] = useState([]);
  const [info, setInfo] = useState({});
  const LOCAL_INFO = 'info'
  useEffect(() => {
    fetch('/api/navigation/header').then(res => res.json()).then(data => {
      setNav(data.data)
    })
  }, [])
  useEffect(() => {
    const localInfo = localStorage.getItem(LOCAL_INFO);
    if (localInfo) {
      setInfo(JSON.parse(localInfo));
    } else {
      fetch('/api/information').then(res => res.json()).then(data => {
        setInfo(data.data);
        localStorage.setItem(LOCAL_INFO, JSON.stringify(data.data));
      })
    }
  }, [])
  return (
    <header className="header sticky w-full top-0 left-0 z-30 bg-white h-12 shadow-sm flex items-center justify-center">
      <div className='w-full flex items-center justify-between h-full container mx-auto'>
        <div className='logo h-full py-2'>
          {info.logo && <Image src={`/images/${info.logo}`} width={200} height={200} alt="logo" className='w-full h-full object-cover'/>}
        </div>
        <div className='nav'>
          {
            nav.map(item => {
              return <Link key={item.sort_by} href={item.link} className='px-2 py-1 hover:bg-slate-100 rounded-sm'>{item.name}</Link>
            })
          }
        </div>
        <div className='company'>
          <span className='font-bold'>{info.name}</span>
        </div>
      </div>
    </header>
  )
}
