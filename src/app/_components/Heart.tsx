'use client'
import React, { useState } from 'react'

export default function Heart() {
    const [heart,setHeart] = useState(false)
  return (
    <i onClick={()=>setHeart(!heart)} className={`fa-solid ${heart?'fa-heart':'fa-heart-broken'} `}></i>
  )
}
