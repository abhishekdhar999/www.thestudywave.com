'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DynaPuff } from "next/font/google";

const DynaPuffs = DynaPuff({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});
export default function Navbar({ onAboutClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <>
    
    <div className="fixed top-0 z-100 w-full px-24 lg:px-48 py-4">
  <div className="flex justify-between items-center gap-12 bg-white/30 backdrop-blur-md border border-gray-200 shadow-md rounded-full px-8 py-2.5">
    
    {/* Logo Section */}
    
    <nav className="text-xl font-bold text-black no-underline">
      <Link href="/" className={`link no-underline ${DynaPuffs.className}`}> <span className='text-black'>The</span><span className='text-orange-400 mx-2'>Study</span><span className='text-black'>Wave</span>
      </Link>
    </nav>

    {/* Navigation Links */}
    <nav className="flex items-center space-x-6 text-black">
      <Link href="/" className="link hover:text-red-500 font-semibold ">Home</Link>
      {isLoggedIn ? (
        <>
          <div onClick={onAboutClick} className="link  font-semibold cursor-pointer">About</div>
          <Link href="/TodayClasses" className=" link hover:text-gray-500 font-semibold">Classes</Link>
          <Link href="/ContactPage" className="link hover:text-gray-500 font-semibold">Contact</Link>
          <div onClick={handleLogout} className="link text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-1">Logout</div>
        </>
      ) : (
        <Link href="/Login" className="link text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2  text-center me-2 mb-1">Login</Link>
      )}
    </nav>
    
  </div>
</div>

    
    </>
  )
}