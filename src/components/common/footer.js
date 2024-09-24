import React from 'react'
import FooterNav from './footer-nav'
import FooterContact from './footer-contact'
import FooterCompany from './footer-company'

export default function Component() {
  return (
    <footer className='footer bg-black text-center text-lg-start text-muted text-white py-16'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] grid-rows-[auto_auto] gap-3 md:gap-10'>
        <div className='col-span-1 row-span-1 px-4'><FooterNav /></div>
        <div className='col-span-1 row-span-1 px-4'><FooterContact/></div>
        <div className='col-span-full row-span-2 px-4'><FooterCompany/></div>
      </div>
    </footer>
  )
}
