import Link from 'next/link'
import React from 'react'

const page = () => {

    const interviews = [];

  return (
    <div className='w-full max-w-6xl flex flex-col gap-10 px-2 mx-auto mt-5 mb-10'>
        <div className=''>
            <h2 className='font-medium mb-3'>
                Create an Interview
            </h2>
            <div className='flex gap-10'>
                <Link href="/interview/peer-graded" className='w-[300px] rounded-lg shadow-lg bg-light-2 py-14 text-center hover:bg-light-3 transition-all'>
                    Peer-graded Interview
                </Link>
                <Link href="/interview/professional" className='w-[300px] rounded-lg shadow-lg bg-light-2 py-14 text-center hover:bg-light-3 transition-all'>
                    Professional Interview
                </Link>
            </div>
        </div>

        <div>
            <h2 className='font-medium mb-3'>
                Past Interviews
            </h2>
            <div className=''>
                {interviews.length > 0? (
                    <div></div>
                ) : (
                    <p className='text-gray-2'>No interviews found</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default page