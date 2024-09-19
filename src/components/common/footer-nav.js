'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function FooterNav() {
  const [nav, setNav] = React.useState([]);
  useEffect(() => {
    fetch('/api/navigation/footer').then(response => response.json()).then(data => {
      setNav(data.data);
    })
  }, [])
  return (
    <div className='grid grid-cols-5 gap-4'>
      {
        nav.length > 0 && nav.map(item => {
          return (
            <div key={item.route}>
              <Link className='text-lg font-bold pb-3 block' href={item.route} >{item.title}</Link>
              <div className='flex flex-col'>
                {
                  item.subItems.length > 0 && item.subItems.map(child => {
                    return (
                      <Link className='text-sm font-normal' key={child.sub_route} href={child.sub_route}>{child.sub_title}</Link>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
