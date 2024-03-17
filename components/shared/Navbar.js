import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full max-w-6xl mx-auto flex justify-between items-center px-2 py-3'>
      
      <div className='flex justify-between items-center gap-7'>
        <Link href='/'>
          <h2 className='font-bold text-xl'>
            CODEGAMY
          </h2>
        </Link>

        <div className='flex gap-3'>
          <Link href='/learn'>
            Learn
          </Link>
          <Link href='/problems'>
            Problems
          </Link>
          <Link href='/contests'>
            Contest
          </Link>
          <Link href='/interview'>
            Interview
          </Link>
          <Link href='/news'>
            News
          </Link>
          <Link href='/code'>
            Code
          </Link>
        </div>
      </div>

      <div className='flex justify-between items-center gap-7'>
        <Link href='/login'>
          Login
        </Link>
        <Link href='/register'>
          Register
        </Link>
        <Link href='/profile'>
          Profile
        </Link>
      </div>

    </div>
  )
}

export default Navbar