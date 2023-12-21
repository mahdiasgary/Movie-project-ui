import React, { useState } from "react";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  useAdminEditGenreMutation,
  useGetGenreListInAdminPanelQuery,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import AdminListItems from "../../../common/adminPanel/AdminListItems";
import { adminGenreListTd, adminGenreListTh } from "../../../constans";
import Pagenation from "../../../common/Pagenation";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import AlertModal from "../../../common/AlertModal";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import toast from "react-hot-toast";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";

const GenresList = ({ history }) => {
  const [a, aw] = useState();
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const genreListInAdminPanelQuery = useGetGenreListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  console.log(genreListInAdminPanelQuery);
  const [thAndTdAdminMovieList, setThAndTdAdminMovieList] = useState([
    adminGenreListTh,
    adminGenreListTd,
  ]);
  const [editGenre] = useAdminEditGenreMutation();
  let { setqw } = useStateContext();
  const editHandler = (id, title, image) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("Id", id);
    formData.append("Image", image);

    editGenre(formData)
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
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/genresList", value: "Genres List" }]}
      />
      <div className=" w-full min-h-screen pb-36">
        <AlertModal
          functionHandler={""}
          text={"Are you sure you want to Delete this genre"}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <div className="flex justify-center mt-20 mb-2">
          <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
            <div className="text-[23px] font-bold ">Genres List</div>
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

        <div className="flex justify-center w-full">
          <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
            <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-t-2xl">
              <AdminListItems
                editHandler={editHandler}
                dataQuery={genreListInAdminPanelQuery}
                thAndTdAdminList={thAndTdAdminMovieList}
                search={search}
                from={"genre"}
              />
            </div>
            {genreListInAdminPanelQuery["data"]?.data.length !== 0 && (
              <Pagenation
                item={"genre"}
                correctPage={correctPage}
                totalCount={genreListInAdminPanelQuery.data?.totalCount}
                setCorrectPage={setCorrectPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(GenresList);
