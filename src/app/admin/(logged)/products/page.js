'use client'
import request from '@/utils/request';
import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    request({url: '/api/admin/products'}).then(res=>{
      console.log(res.data);
    })
  }, [])
  return (
    <div>products</div>
  )
}
