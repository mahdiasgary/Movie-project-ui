import React, { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsArrowDown } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import {
  useAdminEditLanguageMutation,
  useGetLanguageListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import LoadingAdminListItem from "../../../../common/LoadingAdminListItem";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import { adminNormalListTd, adminNormalListTh } from "../../../../constans";
import Pagenation from "../../../../common/Pagenation";
import toast from "react-hot-toast";
import { useStateContext } from "../../../../contextProvider/ContextProvider";

const LanguageList = ({ history }) => {
  const [search, setSearch] = useState("");
  const [correctPage, setCorrectPage] = useState(1);
  useEffect(() => {
    setCorrectPage(1);
  }, [search]);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const languageListInAdminPanelQuery = useGetLanguageListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [thAndTdAdminMovieList, setThAndTdAdminMovieList] = useState([
    adminNormalListTh,
    adminNormalListTd,
  ]);
  const [editLanguage] = useAdminEditLanguageMutation();
  let { setqw } = useStateContext();
  const editHandler = (id, title) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Id", id);

    editLanguage(formData)
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
          // toast.custom(
          //   <div>
          //     <Toast>
          //       <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          //         <HiCheck className="h-5 w-5" />
          //       </div>
          //       <div className="ml-3 text-sm font-normal">
          //         Edit is successfully.
          //       </div>
          //       <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
          //     </Toast>
          //   </div>,
          //   {position:'top-center'}
          // );
        }
      })
      .then((error) => {});
  };
  return (
    <div className=" w-full min-h-screen">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[50vw] md:max-w-[50vw]">
          <div className="text-[23px] font-bold ">Languages List</div>
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

      <div className="flex pb-36 justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
          <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[50vw] md:max-w-[50vw] rounded-2xl">
            <AdminListItems
              editHandler={editHandler}
              dataQuery={languageListInAdminPanelQuery}
              thAndTdAdminList={thAndTdAdminMovieList}
              search={search}
              from={"language"}
            />
          </div>
          {languageListInAdminPanelQuery["data"]?.data.length !== 0 && (
            <Pagenation
              item={"career"}
              correctPage={correctPage}
              totalCount={languageListInAdminPanelQuery.data?.totalCount}
              setCorrectPage={setCorrectPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(LanguageList);
