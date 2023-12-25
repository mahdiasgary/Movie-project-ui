import React, { useState } from "react";

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
  <div className="min-h-screen pb-54 w-full">
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

    <div className="pb-36 flex justify-center w-full">
      <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <AdminListItems
            from={"series"}
            dataQuery={movieListInAdminPanelQuery}
            thAndTdAdminList={thAndTdAdminMovieList}
            search={search}
          />
        </div>
        <Pagenation
          item={"series"}
          correctPage={correctPage}
          totalCount={movieListInAdminPanelQuery.data?.totalCount}
          setCorrectPage={setCorrectPage}
        />
      </div>
    </div>
  </div>
);
};

export default MoviesList;
