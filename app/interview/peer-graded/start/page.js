'use client';

import React, { useState } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder-2';
import Webcam from 'react-webcam';


const page = () => {

    const [questionNum, setQuestionNum] = useState(0);
    const [attempted, setAttempted] = useState(0);

    const questions = [
        'Introduce yourself?',
        'Why you are fit for this role?',
    ];

    const blobUrlToFile = async (blobUrl) => {
        // const config = { responseType: 'blob' };
        // fetch(blobUrl, config).then(response => {
        //     new File([response.data], 'hello');       
        // });
        // const res = await fetch(blobUrl).then(r => r.blob()).then(blobFile => new File([blobFile], 'hello', { type: blobFile.type }));
        // console.log(res);

    }


  return (
    <div className='w-full h-[92vh] max-w-6xl px-2 mx-auto pt-6'>

        <div>
            
            <ReactMediaRecorder
                video
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
                    const recording = status==='recording';
                    const stopped = status==='stopped';
                    const idle = status==='idle';
                    return (
                    <div className='flex flex-col items-center gap-6'>
                        <h2 className='font-medium text-center'>
                            {questions[questionNum]}
                        </h2>
                        {recording && <Webcam className='w-[600px] h-auto' />}
                        {(attempted > 0 && stopped) && <video src={mediaBlobUrl} controls loop controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar" className='w-[600px] h-auto' />}
                        {(attempted===0 || !(recording || stopped)) && <div className='w-[600px] h-[450px] bg-black' />}
                        
                        <div className='flex gap-8 items-center'>
                            {(attempted < 2 && (idle || stopped)) && (
                                <button onClick={() => { startRecording(); setAttempted(prev => prev+1); }} 
                                    className='bg-blue-500 text-light-1 px-3 py-2 rounded-lg'>
                                    {attempted===0? 'Start' : 'Retake'}
                                </button>
                            )}
                            {!(idle || stopped) && (
                                <button onClick={() => stopRecording()}
                                    className='bg-blue-500 text-light-1 px-3 py-2 rounded-lg'>
                                    Stop
                                </button>
                            )}
                            {stopped && attempted > 0 && (
                                <button onClick={() => { 
                                    if (questionNum < questions.length-1) {setAttempted(0); setQuestionNum(prev => prev + 1);} 
                                    else console.log('FINISH');
                                }} 
                                    className='bg-blue-500 text-light-1 px-3 py-2 rounded-lg'>
                                    {questionNum < questions.length-1? 'Next' : 'Finish'}
                                </button>
                            )}
                        </div>
                    </div>
                )}}
                onStop={(mediaBlobUrl) => blobUrlToFile(mediaBlobUrl)}
            />
        </div>
        
    </div>
  )
}

export default page