import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdLocalMovies, MdMovieFilter } from "react-icons/md";
import { GiCardJoker } from "react-icons/gi";
import { BiSolidBell } from "react-icons/bi";

import { FaTheaterMasks } from "react-icons/fa";
const DashboardItemNum = ({ data }) => {
  const queryData = data?.data?.data;
  return (
    <div className="flex justify-between sm:flex-row flex-col gap-4  ">
      <div className="flex  flex-wrap gap-4 justify-">
        <div className="bg-btn text-white p-4 pl-6 rounded-3xl w-[160px] y7:w-[170px] ">
          <BiSolidMoviePlay className="text-[39px] " />
          <div className="text-[25px] font-extrabold">
            {queryData?.movieCount}
          </div>
          <div className="">Movie Count</div>
        </div>
        <div className="bg-btn text-white p-4 pl-6 rounded-3xl w-[160px] y7:w-[170px] ">
          <MdLocalMovies className="text-[39px] " />
          <div className="text-[25px] font-extrabold">
            {queryData?.seriesCount}
          </div>
          <div className="">Series Count</div>
        </div>
        <div className="bg-btn text-white p-4 pl-6 rounded-3xl w-[160px] y7:w-[170px] ">
          <FaTheaterMasks className="text-[40px] " />
          <div className="text-[25px] font-extrabold">
            {queryData?.artistCount}
          </div>
          <div className="">Artist Count</div>
        </div>
        <div className="border-[3px] border-btn text-btn p-3 pl-5 rounded-3xl w-[160px] y7:w-[170px] ">
          <MdMovieFilter className="text-[39px] " />
          <div className="text-[25px] font-extrabold">
            {queryData?.genereCount}
          </div>
          <div className="font-semibold">Genre Count</div>
        </div>
      </div>
      <div className="bg-[#00ff96d9] bg-opacity- text-white p-4 pl-6 rounded-3xl w-[160px] y7:w-[170px] ">
        <div className="h-full flex flex-col justify-center">
          <BiSolidBell className="text-[39px] " />
          <div className="text-[25px] font-extrabold">
            {queryData?.movieCount}
          </div>
          <div className="">Message</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItemNum;
