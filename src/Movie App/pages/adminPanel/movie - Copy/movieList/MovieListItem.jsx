import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MovieListItem = ({ movie }) => {
// console.log(movie)
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex flex-col justify-center px-2 text-sm  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077]  duration-300 h-[64px] mt-1 group-hover:rounded-l-xl ">
          <span className="self-center font-semibold group-hover:text-white text-btn text-center">
            {movie.id}
          </span>
        </div>
      </td>
      <td>
        <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] mt-1 ">
          <img
            src={"https://localhost:7175/images/" + movie.image}
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[28%] "
          />
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center mt-1">
          {movie.title}{" "}
        </div>
      </td>
      <td>
        <div className="flex px-2 text-sm min-w-[200px] group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 ">
          {movie.createdDate?.split(" ")[0]}
        </div>
      </td>

      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 ">
          {movie.time}{" "}
        </div>
      </td>

      <td>
        <div className="flex px-2 text-sm min-w-[200px]  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1">
          {movie.releasedDate?.split(" ")[0]}
        </div>
      </td>
      <td>
        <div className="flex  px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center mt-1 group-hover:rounded-r-xl">
          <div className="flex justify-center gap-3 text-[19px] py-[2px]">
            <Link  to={{ pathname: `/edit`, state: { movie } }}>
            <span
            className="cursor-pointer">
              <AiOutlineEdit />
            </span>
              </Link>
            <span className="text-red-500 group-hover:text-red-300 text-[20px] cursor-pointer">
              <RxTrash />
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MovieListItem;
