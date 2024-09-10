import React from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <nav className="navbar flex justify-between lg:px-[125px] px-[25px] h-[60px] w-[100%] items-center text-white  bg-blue-500 opacity-95 z-50 sticky top-0 border-b border-blue-600">
      <div className="nav-brand hover:scale-125 duration-300">
        <a href="/" className='font-bold text-xl hover:text-gray-100'>Portfolio</a>
      </div>
      <div className="nav-menu ">
        <ul className='flex gap-5 hover:*:text-gray-800 text-lg justify-center items-center max-md:hidden'>
          <li className="nav-items duration-300 hover:scale-110"><Link href='/' className=''>Home</Link></li>
          <li className="nav-items duration-300 hover:scale-110"><Link href='/blog' className=''>Blog</Link></li>
          <li className="nav-items duration-300 hover:scale-110"><Link href='/contact' className=''>Contact</Link></li>
        </ul>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
            </SheetTrigger>
            <SheetContent>
            <SheetHeader>
              <SheetTitle className='font-bold my-4'>Portfolio</SheetTitle>
              <SheetDescription className='flex flex-col gap-5 text-lg'>
                <Link href='/' className=''>Home</Link>
                <Link href='/blog' className=''>Blog</Link>
                <Link href='/contact' className=''>Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
