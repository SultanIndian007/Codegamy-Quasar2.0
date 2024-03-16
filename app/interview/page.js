'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    const interviews = [];
    const [assignedInterviews, setAssignedInterviews] = useState([]);
    const [assInterviewDetails, setAssInterviewDetails] = useState(null);
    const [isAssInterviewModalOpen, setIsAssInterviewModalOpen] = useState(false);
    const [feedback, setFeedback] = useState({ rating: 3, comment: "" });

    const fetchAssignedInterviews = async () => {
        const res = await fetch('/api/getAssigned');
        const data = await res.json();
        setAssignedInterviews(data);
        // console.log(data);
    }

    const handleSubmitReview = () => {

    }

    useEffect(() => {
        fetchAssignedInterviews();
    }, []);

  return (
    <>
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

            <div>
                <h2 className='font-medium mb-3'>
                    Assigned Interviews
                </h2>
                <div className='w-full flex gap-10 flex-wrap'>
                    {assignedInterviews.length > 0? (
                        assignedInterviews.map((interview, index) => (
                            <div key={index} onClick={() => {setAssInterviewDetails(interview); setIsAssInterviewModalOpen(true);}}
                            className='w-[300px] rounded-lg cursor-pointer shadow-lg bg-light-2 py-14 text-center hover:bg-light-3 transition-all'>
                                {`Assigned interview - ${index+1}`}
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-2'>No interviews found</p>
                    )}
                </div>
            </div>
        </div>


        { isAssInterviewModalOpen && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                <div className='bg-light-1 w-[600px] max-h-[92vh] px-10 py-12 shadow-lg mx-auto rounded-lg overflow-y-auto'>
                    <div className='w-full text-right cursor-pointer'>
                        <p onClick={() => setIsAssInterviewModalOpen(false)}>X</p>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <p>Q: {assInterviewDetails.peerVideo.question.question}</p>
                        <video
                            src={`/assets/${assInterviewDetails.peerVideo.videoUrl}`}
                            controls
                            loop
                            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                            className="w-[560px] h-auto"
                        />
                        <div>
                            <p>Rating</p>
                            <div className='flex items-center gap-1'>
                                <p onClick={() => setFeedback({...feedback, rating: 1})} className={`${feedback.rating >= 1 && 'bg-yellow-500'} p-1 rounded-full`}>
                                    1
                                </p>
                                <p onClick={() => setFeedback({...feedback, rating: 2})} className={`${feedback.rating >= 2 && 'bg-yellow-500'} p-1 rounded-full`}>
                                    2
                                </p>
                                <p onClick={() => setFeedback({...feedback, rating: 3})} className={`${feedback.rating >= 3 && 'bg-yellow-500'} p-1 rounded-full`}>
                                    3
                                </p>
                                <p onClick={() => setFeedback({...feedback, rating: 4})} className={`${feedback.rating >= 4 && 'bg-yellow-500'} p-1 rounded-full`}>
                                    4
                                </p>
                                <p onClick={() => setFeedback({...feedback, rating: 5})} className={`${feedback.rating >= 5 && 'bg-yellow-500'} p-1 rounded-full`}>
                                    5
                                </p>
                            </div>
                        </div>

                        <div>
                            <p>Comment</p>
                            <textarea 
                                className='rounded-lg'
                                rows={5}
                                value={feedback.comment}
                                onChange={(e) => setFeedback({...feedback, comment: e.target.value})}
                            />
                        </div>

                        <button onClick={handleSubmitReview} className="text-light-1 bg-blue-500 py-2 px-3 rounded-lg">
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default page