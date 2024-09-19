'use client'
import React from 'react'
import Link from 'next/link';

export default function HeaderMobileNav({ item, closeMobileNavHandle }) {
  const [isShow, setIsShow] = React.useState(false);
  const handleSwitch = () => {
    setIsShow(!isShow);
  }
  const closeHandle = () => {
    closeMobileNavHandle()
  }
  return (
    <div className='border-b border-gray-200 py-3'>
      <div className={'px-2 py-0.5 font-bold text-md flex items-center justify-between'}>
        <Link href={item.route} className='flex-1' onClick={closeHandle}>{item.name}</Link>
        <span className='w-6 h-6 flex items-center justify-center'>
          {
            item.children && item.children.length > 0 ?
              <div onClick={handleSwitch}>
                {
                  !isShow ?
                  <svg t="1726728540244" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13354" width="200" height="200"><path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z" fill="#2c2c2c" p-id="13355"></path></svg>
                  :
                  <svg t="1726730516942" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15465" width="200" height="200"><path d="M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z" fill="#2c2c2c" p-id="15466"></path></svg>
                }
              </div>
              :
              <Link onClick={closeHandle} href={item.route} className='flex-1'><svg t="1726728574612" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14433" width="200" height="200"><path d="M199.111111 192.142222L607.971556 512 199.111111 831.118222l17.607111 22.215111L654.222222 512 216.433778 170.666667 199.111111 192.142222z" p-id="14434" fill="#2c2c2c"></path></svg></Link>
          }
        </span>
      </div>
      {
        item.children && item.children.length > 0 &&
        <div className={'flex flex-col items-start px-2 py-1 overflow-hidden transition-all duration-300 ' + (isShow ? 'h-auto' : 'h-0')}>
          {
            item.children.map(child => {
              return (
                <Link key={child.id} href={child.route} className='px-2 py-3 text-sm border-b w-full border-l-gray-300' onClick={closeHandle}>{child.name}</Link>
              )
            })
          }
        </div>
      }
    </div>
  )
}
