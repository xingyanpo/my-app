'use client'
import React, { useEffect } from 'react'
import FooterNavList from './footer-nav-list';

export default function FooterNav() {
  const [nav, setNav] = React.useState([]);
  useEffect(() => {
    fetch('/api/navigation/footer').then(response => response.json()).then(data => {
      setNav(data.data);
    })
  }, [])
  return (
    <div className='grid grid-cols-1 md:gap-2 lg:grid-cols-5 lg:gap-4'>
      {
        nav.length > 0 && nav.map(item => {
          return (
            <FooterNavList key={item.route} item={item} />
          )
        })
      }
    </div>
  )
}
