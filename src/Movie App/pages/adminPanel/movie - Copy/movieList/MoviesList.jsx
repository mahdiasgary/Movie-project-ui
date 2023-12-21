import React, { useState } from "react";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { useGetSeriesListInAdminPanelQuery } from "../../../../redux/services/movieDatabase";
import { adminMoviesListTd, adminMoviesListTh } from "../../../../constans";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import Pagenation from "../../../../common/Pagenation";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";

const MoviesList = () => {
  const [correctPage, setCorrectPage] = useState(1);

  const [search, setSearch] = useState("");
  const movieListInAdminPanelQuery = useGetSeriesListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [thAndTdAdminMovieList, setThAndTdAdminMovieList] = useState([
    adminMoviesListTh,
    adminMoviesListTd,
  ]);
// console.log(movieListInAdminPanelQuery)
  return (
    <div className=" w-full">
       <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/serieslist", value: "Series List" }]}
      />
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">Series List</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <AdminListItems
          from={'movie'}
            dataQuery={movieListInAdminPanelQuery}
            thAndTdAdminList={thAndTdAdminMovieList}
            search={search}
          />
          <Pagenation
            item={"movie"}
            correctPage={correctPage}
            totalCount={movieListInAdminPanelQuery.data?.totalCount}
            setCorrectPage={setCorrectPage}
          />
          {/* <table className="rounded-xl   table-auto w-full border dark:border-0 ">
            <thead>
              <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                <th
                  onClick={() => setsort(["id", !sort[1]])}
                  className="px-3 py-2  w-[5%] cursor-pointer dark:text-[#6d7077] text-gray-300 "
                >
                  <div
                    onClick={() => setsort(["id", !sort[1], false])}
                    className="flex justify-center"
                  >
                    <div className="ml-1">ID</div>
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === "id" ? "text-white" : "text-[#6d7077]"
                      } ${sort[1] && "rotate-180"} duration-200 `}
                    >
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
                  <div
                    onClick={() => {
                      setsort(["title", false, !sort[2]]);
                    }}
                    className="flex justify-center cursor-pointer "
                  >
                    <div className="">TITLE</div>
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === "title" ? "text-white" : "text-[#6d7077]"
                      } ${sort[2] && "rotate-180"} duration-200 `}
                    >
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                <th
                  className="w-[20%]"
                  onClick={() => setsort(["createdDate", !sort[1]])}
                >
                  CREATED DATE
                </th>
                <th
                  className="w-[10%]"
                  onClick={() => setsort(["time", !sort[1]])}
                >
                  <div className="flex justify-center">
                    <div className="">TIME</div>
                    <div className="self-center  cursor-pointer  ">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                <th
                  className="w-[20%]"
                  onClick={() => setsort(["releasedDate", !sort[1]])}
                >
                  <div className="flex justify-center">
                    <div className="">RELEASED DATE</div>
                    <div className="self-center  cursor-pointer">
                      <BsArrowDown />
                    </div>
                  </div>
                </th>

                <th className="w-[10%]">
                  <div className="flex justify-center">
                    <p>ACTION</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {data &&
                [...data]
                  .filter((item) => item.title.includes(search))
                  .sort(sortBy(sort))
                  .map((movie) => (
                    <MovieListItem movie={movie} key={movie.id} />
                  ))}
            </tbody>
          </table> */}
        </div>
      </div>
      <ReactTooltip
        anchorId="a"
        place="bottom"
        content="Hello world! I'm a Tooltip"
      />
    </div>
  );
};

export default MoviesList;
