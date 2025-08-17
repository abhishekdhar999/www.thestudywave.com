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
export default function Navbar({ onAboutClick, navBgClass = "bg-white/30", navBorderClass = "border-gray-200" }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
    
    <div className="fixed top-0 z-[1000] w-full px-4 sm:px-6 lg:px-12 py-3">
  <div className={`mx-auto max-w-[780px] flex justify-between items-center gap-4 ${navBgClass} backdrop-blur-md border ${navBorderClass} shadow-md rounded-full px-4 sm:px-5 py-2`}>
    
    {/* Logo Section */}
    
    <nav className="text-xl font-bold text-black no-underline">
      <Link href="/" className={`link no-underline ${DynaPuffs.className}`}> <span className='text-black'>The</span><span className='text-orange-400 mx-2'>Study</span><span className='text-black'>Wave</span>
      </Link>
    </nav>

    {/* Mobile menu toggle */}
    <button
      className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/10"
      aria-controls="mobile-menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((o) => !o)}
    >
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        {menuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    {/* Desktop Navigation Links */}
    <nav className="hidden md:flex items-center space-x-6 text-black">
      <Link href="/" className="link hover:text-red-500 font-semibold ">Home</Link>
      {isLoggedIn ? (
        <>
          <div onClick={onAboutClick} className="link  font-semibold cursor-pointer">About</div>
          <Link href="/TodayClasses" className=" link hover:text-gray-500 font-semibold">Classes</Link>
          <Link href="/ContactPage" className="link hover:text-gray-500 font-semibold">Contact</Link>
          <div onClick={handleLogout} className="link inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</div>
        </>
      ) : (
        <Link href="/Login" className="link inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</Link>
      )}
    </nav>
    
  </div>
</div>

{/* Mobile menu panel */}
{menuOpen && (
  <div id="mobile-menu" className="md:hidden fixed top-[64px] left-0 z-[999] w-full px-4 sm:px-6">
    <div className={`flex flex-col gap-3 ${navBgClass} backdrop-blur-md border ${navBorderClass} shadow-md rounded-2xl px-4 py-4 mx-4`}>
      <Link href="/" onClick={() => setMenuOpen(false)} className="link font-semibold text-black">Home</Link>
      {isLoggedIn ? (
        <>
          <div onClick={() => { setMenuOpen(false); onAboutClick?.(); }} className="link font-semibold text-black cursor-pointer">About</div>
          <Link href="/TodayClasses" onClick={() => setMenuOpen(false)} className="link font-semibold text-black">Classes</Link>
          <Link href="/ContactPage" onClick={() => setMenuOpen(false)} className="link font-semibold text-black">Contact</Link>
          <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="mt-2 w-full inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</button>
        </>
      ) : (
        <Link href="/Login" onClick={() => setMenuOpen(false)} className="mt-2 w-full inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</Link>
      )}
    </div>
  </div>
)}
    
    </>
  )
}