import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly p-10 bg-black text-white'>
      <Link href={"/"}>Home</Link>
      <Link href={"/About"}>About</Link>
    </div>
  )
}

export default Navbar