import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between px-[125px] h-[60px] w-[100%] items-center text-white bg-blue-500">
        <div className="nav-brand">
            <a href="/" className='font-bold text-xl hover:text-gray-100'>Portfolio</a>
        </div>
        <div className="nav-menu">
            <ul className='flex gap-5 hover:*:text-gray-800 text-lg'>
                <li className="nav-items"><Link href='/' className=''>Home</Link></li>
                <li className="nav-items"><Link href='/blog' className=''>Blog</Link></li>
                <li className="nav-items"><Link href='/contact' className=''>Contact</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
