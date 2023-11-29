import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import DragDropFile from "./DragDropFile";
import { RxTrash } from "react-icons/rx";

const AddSeriesImage = ({
  SeriesCover,
  setSeriesCover,
  seriesBackground,
  setSeriesBackground,
}) => {
  return (
    <li className="mb-16 ml-6 flex flex-col">
      <div className="flex">
        {SeriesCover && seriesBackground ? (
          <span className="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-screenLight"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        ) : (
          <span className="absolute flex items-center justify-center w-10 h-10 text-screenLight bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
            <BsImageFill />
          </span>
        )}
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          Add Series Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {SeriesCover ? (
            <div className="w-[190px]  h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(SeriesCover)}
                className="w-[190px] h-[270px] rounded-xl "
              />
              <button
                onClick={() => setSeriesCover(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className=" text-center overflow-hidden ">
              <DragDropFile
                SeriesCover={SeriesCover}
                setSeriesCover={setSeriesCover}
                content={"cover"}
              />
              <p className="text-btn mt-3 font-semibold">Upload Movies Cover</p>
            </div>
          )}

          {seriesBackground ? (
            <div className="w-[190px] mt-10 md:mt-0 h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(seriesBackground)}
                className="w-[190px] h-[270px] rounded-xl "
              />
              <button
                onClick={() => setSeriesBackground(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="overflow-hidden text-center ">
              <DragDropFile
                seriesBackground={seriesBackground}
                setSeriesBackground={setSeriesBackground}
                content={"background"}
              />
              <p className="text-btn mt-3 font-semibold">
                Upload Series Background
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddSeriesImage;
