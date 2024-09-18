'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import { LOCAL_INFO } from '@/config/settings';

export default function Component() {
  const [nav, setNav] = useState([]);
  const [info, setInfo] = useState({});
  const [collection, setCollection] = useState([]);
  const [collectionProducts, setCollectionProducts] = useState({});
  const mobileNavRef = useRef(null);
  const pathname = usePathname()
  useEffect(() => {
    fetch('/api/navigation/header').then(res => res.json()).then(data => {
      setNav(data.data);
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
  const collectionSHandle = async (data, index) => {
    const id = data.route.split('/collections/')[1];
    const products = collection.find(item => item.id === Number(id));
    setCollectionProducts(products);
    const allNav = document.querySelectorAll('.nav-list');
    allNav.forEach(item => {
      item.classList.remove('bg-slate-100');
    })
    allNav[index].classList.add('bg-slate-100');
  }
  useEffect(() => {
    const getCollection = []
    fetch('/api/collections').then(res => res.json()).then(data => {
      data?.data?.map(item => {
        getCollection.push({ id: item.collection_id, products: item.products })
      })
      setCollection(getCollection);
    })
  }, []
  )
  useEffect(() => {
    if (collection.length > 0) {
      const first = nav.find(item => item.route === '/collections')?.children[0];
      const id = first?.route?.split('/collections/')[1];
      const products = collection.find(item => item.id === Number(id));
      setCollectionProducts(products);
    }
  }, [nav, collection])
  // mobile
  const mobileNavHandle = () => {
    mobileNavRef.current.classList.toggle('w-full');
  }
  const countries = [
    { name: '新加坡', flag: '/svg/singapore.svg' },
    { name: 'English', flag: '/svg/english.svg' },
  ]
  return (
    <header className=" header sticky w-full top-0 left-0 z-30 bg-white h-14 md:h-20 shadow-sm items-center justify-center">
      <div className='w-full flex items-center justify-between h-full container mx-auto'>
        <div className='logo h-full py-0 md:py-2'>
          <Link href={'/'}>{info.logo && <Image src={`/images/${info.logo}`} width={200} height={200} alt="logo" className='w-full h-full object-cover' priority={true} />}</Link>
        </div>
        <div className='nav hidden md:flex items-center h-full'>
          {
            nav.map(item => {
              return (
                <div className='nav-item relative group h-full grid place-items-center' key={item.id}>
                  <Link href={item.route} className={'px-2 mx-2 py-0.5 hover:bg-slate-100 font-bold text-lg ' + (pathname === item.route ? ' t-c' : '')}>{item.name}</Link>
                  {
                    item.route !== '/collections'
                      ?
                      <div className='absolute top-full left-1/2 w-56 text-center h-auto -translate-x-1/2 shadow-sm bg-white invisible group-hover:opacity-100 opacity-0 transition-all duration-300 group-hover:visible'>
                        {
                          item.children.length > 0 && <div className='py-6 border-t-4 border-c'>
                            {item.children.map(child => {
                              return (
                                <div key={child.id} className=' hover:bg-slate-100'>
                                  <Link href={child.route} className={'px-2 font-bold block w-full py-3 text-md' + (pathname === child.route ? ' t-c' : '')}>{child.name}</Link>
                                </div>
                              )
                            })
                            }
                          </div>
                        }
                      </div>
                      :
                      <div className='fixed top-20 left-0 right-0 h-auto bg-white shadow-sm border-t opacity-0 invisible group-hover:opacity-100 duration-300 group-hover:visible'>
                        {
                          item.children.length > 0 && <div className='py-4 container mx-auto grid grid-cols-[200px_auto] grid-flow-col'>
                            <div className='left'>
                              {
                                item.children.map((child, index) => {
                                  return (
                                    <div key={child.id} className={`nav-list hover:bg-slate-100 + ${index === 0 ? 'bg-slate-100' : ''}`} onMouseEnter={(e) => collectionSHandle(child, index)}>
                                      <Link href={child.route} className={'px-2 font-bold block w-full py-3 mb-2 text-md' + (pathname === child.route ? ' t-c' : '')}>{child.name}</Link>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className='right'>
                              <div className='grid grid-cols-4 gap-4 p-4 bg-slate-100'>
                                {
                                  collectionProducts?.products?.map(product => {
                                    return (
                                      <Link href={`/products/${product.product_id}`} key={product.product_id}>
                                        <div className='w-full aspect-video '><Image src={`/images/${product.product_featured_image}`} width={200} height={200} alt="product" className='w-full h-full object-cover' priority={true} /></div>
                                        <h2 className='block'>{product.product_name}</h2>
                                      </Link>
                                    )
                                  }
                                  )
                                }
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                  }
                </div>
              )
            })
          }
        </div>
        <div className='country hidden md:grid h-full place-content-center relative group'>
          <div className='w-11 h-11 cursor-pointer'><Image src={'/svg/country.svg'} width={100} height={100} alt="country" className='w-full h-full object-cover' priority={true} /></div>
          <div className='absolute top-20 left-1/2 flex flex-col items-center justify-center bg-white w-36 py-3 border-t-4 border-c -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out'>
            {countries.map(country => {
              return (
                <Link key={country.name} href={'/country'} className='grid grid-cols-[30px_1fr] gap-2 p-2 items-center w-full hover:bg-slate-100 mb-1 duration-100 ease-in-out'>
                  <Image src={country.flag} width={100} height={100} alt="country" className='w-full h-full object-cover' priority={true} />
                  <span>{country.name}</span>
                </Link>
              )
            })
            }
          </div>
        </div>
        <div className='navigation h-full block md:hidden'>
          <div onClick={mobileNavHandle} className='h-full flex items-center justify-center p-3 cursor-pointer'><svg t="1726639845340" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4304" width="200" height="200"><path d="M38.5536 858.8288v-66.0992h946.944v66.0992H38.5536z m0-330.2912V462.4384H856.064v66.0992H38.5536z m0-330.3424v-66.048h946.944v66.0992H38.5536z" p-id="4305"></path></svg></div>
          <div ref={mobileNavRef} className='fixed left-0 top-14 right-0 bottom-0 bg-white w-0 overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200'>
            <div className='w-screen h-full flex flex-col justify-between'>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
