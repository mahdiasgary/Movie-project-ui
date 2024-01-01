import React from "react";

const Trailer = () => {
  return (
    <div className=" w-full mt-4 ">
      <div className="flex justify-center">
        <video
          className="h-full mt-5 w-[90%] mb-4 flex justify-center  rounded-xl"
          controls
          preload="metadata"
        >
          <source
            // src="https://docs.material-tailwind.com/demo.mp4"
            src={"https://localhost:7175/Movies/"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Trailer;
