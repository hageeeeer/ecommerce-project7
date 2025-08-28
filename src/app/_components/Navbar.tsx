'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import Image from 'next/image'
import { useSession ,signOut} from 'next-auth/react'
import { CartRes } from '../cart/typescript/cart.interface'
import { useQuery } from '@tanstack/react-query'
export default function Navbar() {
  const { data } = useQuery<CartRes>({
    queryKey: ['cart'], queryFn: async () => {
      const res = await fetch(`/api/cart`)
      const payload = await res.json()
      return payload
    }
  })
  const [isOpen,setOpen] = useState(true)
  const { data: session, status } = useSession()
  const links = [
    { path: '/products', element: 'products' },
  ]
  const authsLinks = [
    { path: '/auth/login', element: 'login' },
    { path: '/auth/register', element: 'register' }, 
  ]

  function handleLogOut(){
    signOut({callbackUrl:'/auth/login'})
  }
  return (

    <nav className="bg-light border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex gap-4 flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image alt='' src={logo} />
        </Link>
        <button onClick={()=>setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={` w-full md:flex  justify-between ${isOpen && 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row gap-4 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map(link => <li key={link.path}>
              <Link href={link.path} className="block py-2 px-3 text-gray-500 rounded-sm md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{link.element.toUpperCase()}</Link>
            </li>

            )}

          </ul>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row gap-4 rtl:space-x-reverse md:mt-0 md:border-0    dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li><i className='fa-brands fa-facebook'></i></li>
            <li><i className='fa-brands fa-twitter'></i></li>
            <li><i className='fa-brands fa-google'></i></li>

            {status === 'authenticated' ?
              <>

                <li>HI {session?.user.name}</li>
                {session?.user.image && <li>
                  <Image width={30} height={30} src={session?.user.image}  alt='user image' className='size-[30px] rounded-full'/></li>}
                <li onClick={handleLogOut} className='cursor-pointer'>logOut</li>
                   <li >
                    <Link href={'/cart'} className='relative'>
                      <span className="absolute -top-2 -right-8 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {data?.numOfCartItems}
                      </span>
                    </Link>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </li>
              </> :
              <>
              {
                authsLinks.map(link =><li key={link?.path}>
                  <Link href={link?.path} className="block py-2 px-3 text-gray-500 rounded-sm md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  {link?.element.toUpperCase()}</Link>
                </li>
                )
              }
            </>


            }




          </ul>
        </div>
      </div>
    </nav>


  )
}
