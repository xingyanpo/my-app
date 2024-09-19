'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function headerMobileCountry({ countries }) {
  return (
    <div className='bg-slate-50'>
      <div className='cursor-pointer flex items-center justify-start bg-slate-100 py-1 mt-4'>
        <Image src={'/svg/country.svg'} width={100} height={100} alt="country" className='w-10 h-10 object-cover' priority={true} />
        <span>Select Country</span>
      </div>
      <div>
        {countries.map(country => {
          return (
            <Link key={country.name} href={'/country'} className='grid grid-cols-[30px_1fr] gap-2 p-2 items-center w-full hover:bg-slate-100 mb-1 duration-100 ease-in-out border-b'>
              <Image src={country.flag} width={100} height={100} alt="country" className='w-full h-full object-cover' priority={true} />
              <span>{country.name}</span>
            </Link>
          )
        })
        }
      </div>
    </div>
  )
}
