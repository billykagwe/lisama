"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {
 const pathname = usePathname()

  return (
     <div className='flex flex-col  w-64  px- border-b pb-2 border-r border-gray-50 px-3 '>
          <div className=' mt-2'>
            <p className='text-xl font-bold text-orange-500'>Product Costing</p>
          </div>
          <div className={`flex flex-col gap-y-4 mt-6   `}>
                <Link href={'/'}>
                  <div className={`flex gap-x-3 p-2 ${pathname === '/' ? "bg-orange-50  text-orange-700 rounded border-orange-200 border  " : "text-gray-700"}`}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                      <span className='block'> Costing</span>
                  </div>
                 </Link>
                <Link href={'/rawmaterial'}>
                    <div  className={`flex gap-x-3 p-2 ${pathname === '/rawmaterial' ? "bg-orange-50  text-orange-700 rounded border-orange-200 border  " : "text-gray-700"}`}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                      </svg>

                    </div>
                      <span className='block'>Raw Material</span>
                  </div>
            </Link>
                <Link href={'/client'}>
                    <div className={`flex gap-x-3 p-2 ${pathname === '/client' ? "bg-orange-50  text-orange-700 rounded border-orange-200 border  " : "text-gray-700"}`}>
                    <div>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>


                    </div>
                      <span className='block'>Client</span>
                  </div>
            </Link>
                <Link href={'/box'}>
                   <div className={`flex gap-x-3  p-2 ${pathname === '/box' ? "bg-orange-50  text-orange-700 rounded border-orange-200 border  " : "text-gray-700"}`}>
                    <div>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                    </div>
                      <span className='block'>Box</span>
                  </div>
            </Link>
                <Link href={'/freight'}>
                   <div className={`flex gap-x-3  p-2 ${pathname === '/freight' ? "bg-orange-50  text-orange-700 rounded border-orange-200 border  " : "text-gray-700"}`}>
                    <div>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                    <span className='block'>
                     
                          Freight
                      </span>
                  </div>
            </Link>
          </div>
            </div>
  )
}

export default Nav