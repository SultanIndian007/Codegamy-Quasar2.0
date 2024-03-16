'use client'

import React, { useEffect } from "react";
import { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder-2";
import Webcam from "react-webcam";

const VideoInterview = ({ questions }) => {

  const [attempted, setAttempted] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval;

    if (hasStarted && (seconds > 0 || minutes > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) 
          setSeconds((prevSeconds) => prevSeconds - 1);
        else {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [hasStarted, minutes, seconds]);

  const handleDecimal = (num) => {
    return num < 10? '0' + num : num;
  }

  const blobUrlToFile = async (blobUrl) => {
    // const config = { responseType: 'blob' };
    // fetch(blobUrl, config).then(response => {
    //     new File([response.data], 'hello');       
    // });
    // const res = await fetch(blobUrl).then(r => r.blob()).then(blobFile => new File([blobFile], 'hello', { type: blobFile.type }));
    // console.log(res);

  };



  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
          const recording = status === "recording";
          const stopped = status === "stopped";
          const idle = status === "idle";

          if (minutes===0 && seconds===0) {
            stopRecording();
          }
          return (
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col gap-2">
                {questions.map((question, index) => (
                  <h2 key={index} className="font-medium">
                    {question.question}
                  </h2>
                ))}
              </div>
              <div>
                <div className="text-right mb-2">
                  <p>Time remaining - <span className="font-medium">{handleDecimal(minutes)}:{handleDecimal(seconds)}</span></p>
                </div>
                
                {recording? (
                  <Webcam className="w-[600px] h-auto" />
                ) : stopped? (
                  <video
                    src={mediaBlobUrl}
                    controls
                    loop
                    controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                    className="w-[600px] h-auto"
                  />
                ) : (
                  <div className="w-[600px] h-[450px] bg-black" />
                )}
              </div>

              <div className="flex gap-8 items-center">
                {attempted < 2 && (idle || stopped) && (
                  <button
                    onClick={() => {
                      startRecording();
                    }}
                    className="bg-blue-500 text-light-1 px-3 py-2 rounded-lg"
                  >
                    {attempted === 0 ? "Start" : "Retake"}
                  </button>
                )}
                {!(idle || stopped) && (
                  <button
                    onClick={() => stopRecording()}
                    className="bg-blue-500 text-light-1 px-3 py-2 rounded-lg"
                  >
                    Stop
                  </button>
                )}
                {stopped && attempted > 0 && (
                  <button
                    onClick={() => {
                      console.log("FINISH");
                    }}
                    className="bg-blue-500 text-light-1 px-3 py-2 rounded-lg"
                  >
                    Finish
                  </button>
                )}
              </div>
            </div>
          );
        }}
        onStart={() => {setHasStarted(true); setAttempted((prev) => prev + 1)}}
        onStop={(mediaBlobUrl) => {setHasStarted(false); setMinutes(0); setSeconds(10); blobUrlToFile(mediaBlobUrl);}}
      />
    </div>
  );
};

export default VideoInterview;
