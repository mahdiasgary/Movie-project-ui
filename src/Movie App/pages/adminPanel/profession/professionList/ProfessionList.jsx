import React, { useEffect, useState } from "react";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsArrowDown } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import {
  useAdminEditCareerMutation,
  useGetCareerListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import { adminNormalListTd, adminNormalListTh } from "../../../../constans";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import toast from "react-hot-toast";
import Pagenation from "../../../../common/Pagenation";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";

const ProfessionList = ({ history }) => {
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setCorrectPage(1);
  }, [search]);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const careerListInAdminPanelQuery = useGetCareerListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );

  const [thAndTdAdminMovieList, setThAndTdAdminMovieList] = useState([
    adminNormalListTh,
    adminNormalListTd,
  ]);
  const [editCareer] = useAdminEditCareerMutation();
  let { setqw } = useStateContext();
  const editHandler = (id, title) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Id", id);

    editCareer(formData)
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
       
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/professonlist", value: "Profession List" }]}
      />
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[50vw] md:max-w-[50vw]">
          <div className="text-[23px] font-bold ">Career List</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] placeholder:text-sm rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[80vw] max-w-[80vw] md:min-w-[50vw] md:max-w-[50vw] rounded-2xl">
          <AdminListItems
            dataQuery={careerListInAdminPanelQuery}
            thAndTdAdminList={thAndTdAdminMovieList}
            search={search}
          />
        </div>
      </div> */}
      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
          <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md  min-w-[95vw] max-w-[95vw] md:min-w-[50vw] md:max-w-[50vw] rounded-t-2xl">
            <AdminListItems
              editHandler={editHandler}
              dataQuery={careerListInAdminPanelQuery}
              thAndTdAdminList={thAndTdAdminMovieList}
              search={search}
              from={"career"}
            />
          </div>
          {careerListInAdminPanelQuery["data"]?.data.length !== 0 && (
            <Pagenation
              item={"career"}
              correctPage={correctPage}
              totalCount={careerListInAdminPanelQuery.data?.totalCount}
              setCorrectPage={setCorrectPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfessionList);
