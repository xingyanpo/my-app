'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { LOCAL_INFO } from '@/config/settings';

export default function Component() {
  const [nav, setNav] = useState([]);
  const [info, setInfo] = useState({});
  const pathname = usePathname()
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
    <header className="header sticky w-full top-0 left-0 z-30 bg-white h-20 shadow-sm flex items-center justify-center">
      <div className='w-full flex items-center justify-between h-full container mx-auto'>
        <div className='logo h-full py-6'>
          {info.logo && <Image src={`/images/${info.logo}`} width={200} height={200} alt="logo" className='w-full h-full object-cover' />}
        </div>
        <div className='nav flex items-center h-full'>
          {
            nav.map(item => {
              return (
                <div className='nav-item relative group h-full grid place-items-center' key={item.id}>
                  <Link href={item.route} className={'px-2 mx-2 py-0.5 hover:bg-slate-100 font-bold text-lg ' + (pathname === item.route ? ' text-red-500' : '')}>{item.name}</Link>
                  {item.route !== '/collections' ? <div className='absolute top-full left-1/2 w-56 text-center h-auto -translate-x-1/2 shadow-sm bg-white group-hover:block hidden '>
                    {
                      item.children.length > 0 && <div className='py-4'>
                        {item.children.map(child => {
                          return (
                            <div key={child.id} className=' hover:bg-slate-100'>
                              <Link href={child.route} className={'px-2 font-bold block w-full py-3 text-md' + (pathname === child.route ? ' text-red-500' : '')}>{child.name}</Link>
                            </div>
                          )
                        })
                        }
                      </div>
                    }
                  </div> : <div className='fixed top-20 left-0 right-0 h-60 bg-white shadow-sm group-hover:block '>
                    {
                      item.children.length > 0 && <div className='py-4 container mx-auto grid grid-cols-2 gap-4'>
                        <div className='left'>
                          {item.children.map(child => {
                            return (
                              <div key={child.id} className=' hover:bg-slate-100'>
                                <Link href={child.route} className={'px-2 font-bold block w-full py-3 text-md' + (pathname === child.route ? ' text-red-500' : '')}>{child.name}</Link>
                              </div>
                            )
                          })
                          }
                        </div>
                        <div className='right'>

                        </div>
                      </div>
                    }
                  </div>}
                </div>
              )
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
