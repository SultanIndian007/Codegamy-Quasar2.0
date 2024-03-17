'use client'

import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [assignedInterviews, setAssignedInterviews] = useState(null);
    const [interviews, setInterviews] = useState(null);
    const [interviewDetails, setInterviewDetails] = useState(null);
    const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
    const [feedback, setFeedback] = useState({ rating: 3, comment: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isAssigned, setIsAssigned] = useState(false);

    const fetchInterviews = async () => {
        const res = await fetch('/api/getMyVideos');
        const data = await res.json();
        setInterviews(data);
        // console.log(data)
    }

    const fetchAssignedInterviews = async () => {
        const res = await fetch('/api/getAssigned');
        const data = await res.json();
        setAssignedInterviews(data);
    }

    const handleSubmitReview = async () => {
        
        await axios.post('/api/submitReview', {
            queueID: interviewDetails._id,
            rating: feedback.rating,
            comment: feedback.comment
        });
        setSubmitted(true);
        setTimeout(() => {setSubmitted(false); setIsInterviewModalOpen(false);}, 2000);
    }

    useEffect(() => {
        fetchAssignedInterviews();
        fetchInterviews();
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
                <div className='w-full flex gap-10 flex-wrap'>
                    {interviews && interviews.length > 0? (
                        interviews.map((interview, index) => (
                            <div key={index} onClick={() => {setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(false);}}
                            className='w-[300px] rounded-lg cursor-pointer shadow-lg bg-light-2 py-14 text-center hover:bg-light-3 transition-all'>
                                {`My Interview - ${index+1}`}<br/>{`Submitted: ${interview.submissionTime}`}
                            </div>
                        ))
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
                    {assignedInterviews && assignedInterviews.assigned && assignedInterviews.assigned.length > 0? (
                        assignedInterviews.assigned.map((interview, index) => (
                            <div key={index} onClick={() => {setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(true);}}
                            className='w-[300px] rounded-lg cursor-pointer shadow-lg bg-light-2 py-14 text-center hover:bg-light-3 transition-all'>
                                {`Assigned interview - ${index+1}`}<br/>{`Deadline: ${assignedInterviews.assignedTime[index]}`}
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-2'>No interviews found</p>
                    )}
                </div>
            </div>
        </div>


        { isInterviewModalOpen && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                <div className='bg-light-1 w-[600px] max-h-[92vh] px-10 py-12 shadow-lg mx-auto rounded-lg overflow-y-auto'>
                    <div className='w-full text-right cursor-pointer'>
                        <p onClick={() => setIsInterviewModalOpen(false)}>X</p>
                    </div>
                    {isAssigned? (
                        
                        <div className='flex flex-col gap-5 items-center'>
                            <p>Q: {interviewDetails.peerVideo.question.question}</p>
                            <video
                                src={`/assets/${interviewDetails.peerVideo.videoUrl}`}
                                controls
                                loop
                                controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                                className="w-full h-auto"
                            />
                            <div className="w-full">
                                <p>Rating</p>
                                <div className='flex items-center gap-1'>
                                    <p onClick={() => setFeedback({...feedback, rating: 1})} className={`${feedback.rating >= 1 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        1
                                    </p>
                                    <p onClick={() => setFeedback({...feedback, rating: 2})} className={`${feedback.rating >= 2 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        2
                                    </p>
                                    <p onClick={() => setFeedback({...feedback, rating: 3})} className={`${feedback.rating >= 3 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        3
                                    </p>
                                    <p onClick={() => setFeedback({...feedback, rating: 4})} className={`${feedback.rating >= 4 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        4
                                    </p>
                                    <p onClick={() => setFeedback({...feedback, rating: 5})} className={`${feedback.rating >= 5 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        5
                                    </p>
                                </div>
                            </div>

                            <div className='w-full'>
                                <p>Comment</p>
                                <textarea 
                                    className='w-full rounded-lg'
                                    rows={5}
                                    value={feedback.comment}
                                    onChange={(e) => setFeedback({...feedback, comment: e.target.value})}
                                />
                            </div>

                            <button onClick={handleSubmitReview} className="text-light-1 bg-blue-500 py-2 px-3 rounded-lg">
                                Submit Review
                            </button>
                        </div>
                    ) : (

                        <div className='flex flex-col gap-5 items-center'>
                            <p>Q: {interviewDetails.question.question}</p>
                            <video
                                src={`/assets/${interviewDetails.videoUrl}`}
                                controls
                                loop
                                controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                                className="w-full h-auto"
                            />
                            <div className="w-full">
                                <p>Rating</p>
                                {/* <div className='flex items-center gap-1'>
                                    <p className={`${interviewDetails >= 1 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        1
                                    </p>
                                    <p className={`${feedback.rating >= 2 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        2
                                    </p>
                                    <p className={`${feedback.rating >= 3 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        3
                                    </p>
                                    <p className={`${feedback.rating >= 4 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        4
                                    </p>
                                    <p className={`${feedback.rating >= 5 && 'bg-yellow-500'} p-1 px-2 rounded-full`}>
                                        5
                                    </p>
                                </div> */}
                            </div>

                            <div className='w-full'>
                                <p>Comment</p>
                                <textarea 
                                    className='w-full rounded-lg'
                                    rows={5}
                                    value={feedback.comment}
                                    onChange={(e) => setFeedback({...feedback, comment: e.target.value})}
                                />
                            </div>

                            <button className="text-light-1 bg-blue-500 py-2 px-3 rounded-lg">
                                Submit Review
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )}

      {submitted && (
        <div className='fixed top-5 right-5 bg-green-300 shadow-lg rounded-lg py-3 px-5'>
          Successfully submitted
        </div>
      )}
    </>
  )
}

export default page