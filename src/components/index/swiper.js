'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import Image from 'next/image';

export default function SilderBar() {
  const [banners, setBanners] = useState([
    {
      id: 1,
      url: '/images/banner-1.jpg'
    },
    {
      id: 2,
      url: '/images/banner-2.jpg'
    },
    {
      id: 3,
      url: '/images/banner-3.jpg'
    },
    {
      id: 4,
      url: '/images/banner-4.jpg'
    },
  ]);
  return (
    <Swiper className='screen-h-re-heade' spaceBetween={0} slidesPerView={1} pagination={true} modules={[Pagination]} >
      {
        banners.map((item) => {
          return (
            <SwiperSlide key={item.id} className='h-full w-full'>
              <Image className='w-full h-full object-cover' src={item.url} alt="banner" width={1920} height={1080} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};
