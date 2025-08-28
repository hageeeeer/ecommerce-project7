'use client'
import { Oval } from 'react-loader-spinner'
import React from 'react'

export default function loading() {
  return (
    <div className="flex h-[90%] justify-center items-center"><Oval
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""/></div>
  )
}
