import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav id='sticky_header' className='flex justify-between items-center font-semibold p-3'>
        <div>
            R
        </div>
        <ul className='w-full flex justify-evenly'>
            <li>
                <Link href='#home'>Home</Link>
            </li>
            <li>
                <Link href='#skills'>Skills</Link>
            </li>
            <li>
                <Link href='#about'>About</Link>
            </li>
            <li>
                <Link href='#contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar