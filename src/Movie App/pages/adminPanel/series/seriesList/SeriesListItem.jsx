import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";

const SeriesListItem = ({ series }) => {
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex flex-col justify-center px-2 text-sm  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077]  duration-300 h-[64px] mt-1 group-hover:rounded-l-xl ">
          <span className="self-center font-semibold group-hover:text-white text-btn text-center">
            {series.id}
          </span>
        </div>
      </td>
      <td>
        <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] mt-1 ">
          <img
            src={"https://localhost:7175/images/" + series.image}
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[28%] "
          />
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center mt-1">
          {series.title}{" "}
        </div>
      </td>
      <td>
        <div className="flex px-2 text-sm min-w-[200px] group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 ">
          {/* {series.createdDate.split(" ")[0]} */}
        </div>
      </td>

      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 ">
          {series.time}{" "}
        </div>
      </td>

      <td>
        <div className="flex px-2 text-sm min-w-[200px]  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1">
          {/* {series.releasedDate.split(" ")[0]} */}
        </div>
      </td>
      <td>
        <div className="flex  px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 group-hover:rounded-r-xl">
          <div className="flex justify-center gap-3 text-[19px] py-[2px]">
            <span className="cursor-pointer">
              <AiOutlineEdit />
            </span>
            <span className="text-red-500 group-hover:text-red-300 text-[20px] cursor-pointer">
              <RxTrash />
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SeriesListItem;
