import React from 'react'
import Checkout from '../_componenets/Checkout'

export default async function page({params}:{params:Promise<{cartId:string}>}) {
  const {cartId} = await params
  return (
    <div><Checkout cartId={cartId}/></div>
  )
}
