import React, { useState } from "react";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsArrowDown } from "react-icons/bs";
import { useGetUsersListInAdminPanelQuery } from "../../../../redux/services/movieDatabase";
import SeriesListItem from './SeriesListItem'

const SeriesList = () => {
  const {data}=useGetUsersListInAdminPanelQuery()
 
 
    return (
      <div className=" w-full"> 
    <div className="flex justify-center mt-20 mb-2">
    <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
      <div className="text-[23px] font-bold ">Series List</div>
      <div>
        <input type="text" placeholder="search here .." className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn " />
      </div>

    </div>
    </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <table className="rounded-xl   table-auto w-full border dark:border-0 ">
            <thead>
              <tr className="dark:bg-[#1c1d21] bg-gray-500 h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                <th
                  onClick={()=>setUsers([...eew].sort((a, b) => b.id - a.id))}
                  className="px-3 py-2  w-[5%] cursor-pointer dark:text-[#6d7077] text-gray-300 "
                >
                  <div className="flex justify-center">
                    <div className="ml-1">ID</div>
                    <div className="self-center  cursor-pointer  ">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>

                <th
                  id="a"
                  data-tooltip-content={"dddd"}
                  className="px-3 py-2  w-[10%]  "
                >
                  COVER
                </th>
                <th className=" py-2 w-[20%] ">
                  <div className="flex justify-center">
                    <div className="">TITLE</div>
                    <div className="self-center  cursor-pointer  ">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                <th className="w-[20%]">CREATED DATE</th>
                <th className="w-[10%]">
                  <div className="flex justify-center">
                    <div className="">TIME</div>
                    <div className="self-center  cursor-pointer  ">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                <th className="w-[20%]">
                  <div className="flex justify-center">
                    <div className="">RELEASED DATE</div>
                    <div className="self-center  cursor-pointer">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                
                <th className="w-[10%]">ACTION</th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {data?.map((series) => (
                <SeriesListItem series={series} key={series.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
   
    </div>
  );
};

export default SeriesList;
