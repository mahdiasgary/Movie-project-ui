import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const Pagenation = ({ item, totalCount, correctPage, setCorrectPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalCount / 10); i++) {
    pages.push(i);
  }
  return (
    <div
      className={`py-3 ${
        !totalCount && "hidden"
      } px-2 self-center flex justify-between max-w-screen border border-t-0 dark:border-0 rounded-b-2xl `}
    >
      <div className="self-center text-sm ">
        <span className="px-2 text-gray-500 font-semibold">count {item}</span>
        {totalCount}
      </div>
      <div dir="ltr" className={`flex  `}>
        <button
          disabled={!pages.find((p) => p === correctPage - 1) && true}
          onClick={() => setCorrectPage(correctPage - 1)}
          className={`${
            !pages.find((p) => p === correctPage - 1)
              ? "text-gray-400 dark:border-border opacity-75 cursor-not-allowed"
              : "text-btn cursor-pointer hover:border-btn dark:hover:border-btn  dark:border-border"
          } h-10 w-10  flex flex-col justify-center text-center rounded-[50%] border-2     duration-200 mx-1 `}
        >
          <FiArrowLeft className="self-center text-[17px] " />
        </button>
        <div
          className={`${
            !pages.find((p) => p === correctPage - 2) && "hidden"
          } flex h-10 pb-3 text-[20px] font-bold flex-col justify-center text-gray-400`}
        >
          ...
        </div>

        <div
          onClick={() => setCorrectPage(correctPage - 1)}
          className={`${
            correctPage - 1 > 0 ? "" : "hidden"
          } h-10 w-10 font-semibold flex flex-col justify-center text-center rounded-[50%] border-2  text-gray-400 hover:border-btn dark:border-border hover:text-btn cursor-pointer duration-200 mx-1 `}
        >
          {correctPage - 1 > 0 ? correctPage - 1 : ""}
        </div>
        <div className="h-10 w-10 font-semibold flex flex-col justify-center text-center rounded-[50%] bg-btn mx-1 text-white">
          {correctPage}
        </div>
        <div
          onClick={() => setCorrectPage(correctPage + 1)}
          className={`${
            !pages.find((p) => p === correctPage + 1) && "hidden"
          } h-10 w-10 font-semibold flex flex-col justify-center text-center rounded-[50%] border-2  text-gray-400 hover:border-btn dark:border-border hover:text-btn cursor-pointer duration-200 mx-1 `}
        >
          {pages.find((p) => p === correctPage + 1) && correctPage + 1}
        </div>
        <div
          className={`${
            !pages.find((p) => p === correctPage + 2) && "hidden"
          } flex h-10 pb-3 text-[20px] font-bold flex-col justify-center text-gray-400`}
        >
          ...
        </div>
        <button
          disabled={!pages.find((p) => p === correctPage + 1) && true}
          onClick={() => setCorrectPage(correctPage + 1)}
          className={`${
            !pages.find((p) => p === correctPage + 1)
              ? "text-gray-400 cursor-not-allowed dark:border-border"
              : "text-btn cursor-pointer hover:border-btn dark:hover:border-btn  dark:border-border"
          } h-10 w-10  flex flex-col justify-center text-center rounded-[50%] border-2     duration-200 mx-1 `}
        >
          <FiArrowLeft className="self-center text-[17px]  rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default Pagenation;
