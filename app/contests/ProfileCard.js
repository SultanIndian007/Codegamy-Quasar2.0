import Link from 'next/link'
import React from 'react'

const ProfileCard = ({ id, username, attended, rating }) => {
  return (
    <Link href={`/profile/${username}`} className='w-full flex items-center gap-5 group'>
        <h2>{id}</h2>
        <img 
            src='/google.png'
            alt='contest-icon'
            className='w-10 h-10 object-contain rounded-full'
        />
        <div>
            <h2 className='group-hover:text-blue-500'>{username}</h2>
            <div className='mt-1 flex items-center gap-4'>
                <p className='text-sm'>
                    <span className='font-medium'>Rating:</span> {rating}
                </p>
                <p className='text-sm'>
                    <span className='font-medium'>Attended:</span> {attended}
                </p>
            </div>
        </div>
    </Link>
  )
}

export default ProfileCard