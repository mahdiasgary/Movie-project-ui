import React, { useState } from "react";

const Download = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="mt-10">
      <fieldset className="border-t border-border">
        <legend className=" px-2 text-white">Seasen 1</legend>
        <div className="flex- flex-col w-full md:mx-4 mt-3">
          <div className="mb-3">
            <div
              className={`flex  justify-between  px-3 py-2  bg-border ${
                active ? "rounded-t-lg " : "rounded-lg duration-500"
              }  border-l-4 border-btn `}
            >
              <div className="self-center text-sm y7:text-[16px]">
                <ul className="flex ">
                  <li>
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => setActive(!active)}
                  className="bg-btn px-4 rounded-md py-2"
                >
                  LINKS
                </button>
              </div>
            </div>
            <div
              className={`origin-top ${!active ? "scale-y-0 h-0 duration-100" : 'duration-500 py-2'}  px-3   flex justify-between    bg-border rounded-b-lg border-l-4 border-btn `}
            >
              <div className="flex flex-wrap gap-2 ">
                <button className="bg-secondColorDark  hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">01</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">02</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">03</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">04</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">05</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">06</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex  justify-between  px-3 py-2  bg-border ${
                active ? "rounded-t-lg " : "rounded-lg duration-500"
              }  border-l-4 border-btn `}
            >
              <div className="self-center text-sm y7:text-[16px]">
                <ul className="flex ">
                  <li>
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => setActive(!active)}
                  className="bg-btn px-4 rounded-md py-2"
                >
                  LINKS
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <fieldset className="border-t border-border">
        <legend className=" px-2 text-white">Seasen 2</legend>
        <div className="flex- flex-col w-full md:mx-4 mt-3">
          <div className="mb-3">
            <div
              className={`flex  justify-between  px-3 py-2  bg-border ${
                active ? "rounded-t-lg " : "rounded-lg duration-500"
              }  border-l-4 border-btn `}
            >
              <div className="self-center text-sm y7:text-[16px]">
                <ul className="flex ">
                  <li>
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => setActive(!active)}
                  className="bg-btn px-4 rounded-md py-2"
                >
                  LINKS
                </button>
              </div>
            </div>
            <div
              className={`origin-top ${!active ? "scale-y-0 h-0 duration-100" : 'duration-500 py-2'}  px-3   flex justify-between    bg-border rounded-b-lg border-l-4 border-btn `}
            >
              <div className="flex flex-wrap gap-2 ">
                <button className="bg-secondColorDark  hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">01</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">02</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">03</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">04</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">05</span>
                </button>
                <button className="bg-secondColorDark hover:bg-screenDark duration-200 px-5 py-1 rounded-md">
                  Eeeee <span className="text-btn font-semibold ">06</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex  justify-between  px-3 py-2  bg-border ${
                active ? "rounded-t-lg " : "rounded-lg duration-500"
              }  border-l-4 border-btn `}
            >
              <div className="self-center text-sm y7:text-[16px]">
                <ul className="flex ">
                  <li>
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => setActive(!active)}
                  className="bg-btn px-4 rounded-md py-2"
                >
                  LINKS
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Download;
