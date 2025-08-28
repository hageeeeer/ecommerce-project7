
import { getProducts } from '@/apis/products.api'
import { productInterface } from '@/interfaces/products.interface'
import React from 'react'
import ProductItem from './ProductItem'

export default async function FeaturedProducts() {
  const data:productInterface[]  = await getProducts()
  return (
    <div className='flex flex-wrap'>{data.map((prod:productInterface)=><ProductItem key={prod._id} prod={prod}></ProductItem>)}</div>
  )
}
