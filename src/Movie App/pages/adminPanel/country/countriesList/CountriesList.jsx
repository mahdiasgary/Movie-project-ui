import React, { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { withRouter } from "react-router-dom";
import {
  useAdminEditCountryMutation,
  useGetCountryListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import { adminNormalListTd, adminNormalListTh } from "../../../../constans";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import Pagenation from "../../../../common/Pagenation";
import toast from "react-hot-toast";

const CountriesList = ({ history }) => {
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setCorrectPage(1);
  }, [search]);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const countryListQuery = useGetCountryListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [thAndTdAdminMovieList, setThAndTdAdminMovieList] = useState([
    adminNormalListTh,
    adminNormalListTd,
  ]);
  const [editCountry] = useAdminEditCountryMutation();
  let { setqw } = useStateContext();
  const editHandler = (id, title) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Id", id);

    editCountry(formData)
      .unwrap()
      .then((r) => {
        setqw(Math.random());
        if (r.isSuccessFull) {
          toast.success("Successfully Edited!", {
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .then((error) => {});
  };
  return (
    <div className=" w-full">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[50vw] md:max-w-[50vw]">
          <div className="text-[23px] font-bold ">Countries List</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] placeholder:text-sm  rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
          <div className="dark:bg-[#1c1d21] bg-white    bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md overflow-x-auto min-w-[80vw] max-w-[80vw] md:min-w-[50vw] md:max-w-[50vw] rounded-2xl">
            <AdminListItems
              dataQuery={countryListQuery}
              thAndTdAdminList={thAndTdAdminMovieList}
              search={search}
              editHandler={editHandler}
              from={"country"}
            />
          </div>
          {countryListQuery["data"]?.data.length !== 0 && (
            <Pagenation
              item={"country"}
              correctPage={correctPage}
              totalCount={countryListQuery.data?.totalCount}
              setCorrectPage={setCorrectPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CountriesList);
