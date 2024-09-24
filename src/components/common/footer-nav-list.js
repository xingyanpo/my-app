import React from 'react'
import Link from 'next/link';

export default function FooterNavList({ item }) {
  const [isOpen, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  }
  return (
    <div>
      <div className='text-md md:text-lg font-bold my-1 text-left flex justify-between items-center'>
        <Link className='text-md' href={item.route}>{item.title}</Link>
        <span onClick={toggle} className={'w-6 h-6 block md:hidden transition-all ' + (isOpen ? 'rotate-0' : 'rotate-90')}><svg t="1726728574612" className="icon fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14433" width="200" height="200"><path className='fill-white' d="M199.111111 192.142222L607.971556 512 199.111111 831.118222l17.607111 22.215111L654.222222 512 216.433778 170.666667 199.111111 192.142222z" p-id="14434" fill="#2c2c2c"></path></svg></span>
      </div>
      <div className={'flex flex-col overflow-hidden md:h-full transition-all pl-2 md:pl-0 ' + (isOpen ? 'h-auto' : 'h-0')}>
        {
          item.subItems.length > 0 && item.subItems.map(child => {
            return (
              <Link className='text-sm font-normal leading-tight mb-1 text-left py-0.5 border-b w-fit border-white md:border-transparent hover:border-white ' key={child.sub_route} href={child.sub_route}>{child.sub_title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}
