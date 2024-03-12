import React from "react";

const OutputWindow = ({ outputDetails }) => {
  
  return (
    <div className="!w-full flex-grow flex flex-col">
      <h3 className="font-bold text-lg mb-2">
        Output
      </h3>
      <div className="w-full flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto">
        {outputDetails && (
          <>
          <p className="text-xs text-blue-500">CPUTime: {outputDetails.cpuTime}s</p>
          <p className="text-xs text-blue-500 mb-2">Memory: {outputDetails.memory}b</p>
          {outputDetails.output}
          </>
        )}
      </div>
    </div>
  );
};

export default OutputWindow;
