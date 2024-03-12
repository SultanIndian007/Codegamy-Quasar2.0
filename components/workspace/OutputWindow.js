import React from "react";

const OutputWindow = ({ outputDetails }) => {
  
  return (
    <div className="!w-full flex-grow flex flex-col">
      <h3 className="font-bold text-lg mb-2">
        Output
      </h3>
      <div className="w-full flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto">
        Hello world!
      </div>
    </div>
  );
};

export default OutputWindow;
