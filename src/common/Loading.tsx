import React from "react";


// The loading icon is not centered, fix later
const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
        <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
};

export default Loading;
