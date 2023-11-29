import React, { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { useGetArtisitListInAdminPanelQuery } from "../../../../redux/services/movieDatabase";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import { adminArtistListTd, adminArtistListTh } from "../../../../constans";
import Pagenation from "../../../../common/Pagenation";

const ArtistList = () => {
  const [correctPage, setCorrectPage] = useState(1);

  const [search, setSearch] = useState("");
  const ArtistListInAdminPanelQuery = useGetArtisitListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [thAndTdAdminArtistList] = useState([
    adminArtistListTh,
    adminArtistListTd,
  ]);
  return (
    <div className=" w-full min-h-screen pb-20">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">Artist List</div>
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
        <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
          <div className="dark:bg-[#1c1d21] bg-white overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md overflow-x-auto bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
            <AdminListItems
              dataQuery={ArtistListInAdminPanelQuery}
              thAndTdAdminList={thAndTdAdminArtistList}
              search={search}
              from={"artist"}
            />
          </div>
          <Pagenation
            item={"atist"}
            correctPage={correctPage}
            totalCount={ArtistListInAdminPanelQuery.data?.totalCount}
            setCorrectPage={setCorrectPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistList;
