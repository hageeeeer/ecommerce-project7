import { productInterface } from '@/interfaces/products.interface'
import  Link  from 'next/link'
import Image from 'next/image'
import React from 'react'
import ProductItemBtn from '../products/_compoenents/ProductItemBtn'
import Heart from './Heart'

export default function ProductItem({ prod }: { prod: productInterface }) {
    
    return (
        <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/6'>
            <div className='p-4'>
                <Heart></Heart>
                <Link href={`/products/${prod._id}/${prod.category._id}`}>
                <Image width={300} height={300} alt={''} src={prod.imageCover} />
                <p className='text-main'>{prod.category.name}</p>
                <p className='line-clamp-1'>{prod.title}</p>
                <div className='flex items-center justify-between my-5'>
                   <div>
                    <div className={prod?.priceAfterDiscount?'line-through':''}>{prod.price}EGP</div>
                    {prod.priceAfterDiscount && <div>{prod.priceAfterDiscount}EGP</div>}
                   </div>
                    <span>{prod.ratingsAverage} <i className='fa-solid fa-star text-rating'></i></span>
                </div>
                </Link>
             <ProductItemBtn id={prod._id}></ProductItemBtn>
            </div>
        </div>
    )
}
