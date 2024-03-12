import React from "react";

const OutputWindow = ({ outputDetails }) => {
  
  return (
    <div className="!w-full flex-grow flex flex-col">
      <h3 className="font-bold text-lg mb-2">
        Output
      </h3>
      <div className="w-full flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto">
        {outputDetails && (
          outputDetails.submitted? (
            <p className="text-lg">
              Status: <span className={`text-${outputDetails.accepted? 'green' : 'red'}-500`}>
                {outputDetails.accepted? 'ACCEPTED' : 'REJECTED'}
              </span>
            </p>
          ) : (
            <>
            <p className="text-xs text-blue-500">CPUTime: {outputDetails.cpuTime}s</p>
            <p className="text-xs text-blue-500 mb-2">Memory: {outputDetails.memory}b</p>
            <div dangerouslySetInnerHTML={{ __html: outputDetails.output.replace("\n",'<br/>').toLowerCase()}}/>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default OutputWindow;
