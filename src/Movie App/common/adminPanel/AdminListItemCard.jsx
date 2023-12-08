import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RxTrash } from "react-icons/rx";
import EditItem1 from "./EditItem1";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  useAdminDeleteCareerMutation,
  useAdminDeleteCountryMutation,
  useAdminDeleteGenreMutation,
  useAdminDeleteLanguageMutation,
  useAdminDeleteMovieMutation,
  useLazyGetArtisitListInAdminPanelQuery,
} from "../../redux/services/movieDatabase";
import { useStateContext } from "../../contextProvider/ContextProvider";
import AlertModal from "../AlertModal";
import { Toast, Tooltip } from "flowbite-react";
import toast from "react-hot-toast";
import { HiCheck } from "react-icons/hi";
import { withRouter } from "react-router-dom";
import axios from "axios";

const AdminListItemCard = ({
  item,
  td,
  setSelectedID,
  selectedID,
  from,
  editHandler,
  history,
}) => {
  let lastTdIndex = td.length - 1;
  let { setqw } = useStateContext();
  const [openModal, setOpenModal] = useState();

  const [openModal2, setOpenModal2] = useState();
  const props = { openModal, setOpenModal };
  const [deleteGenre] = useAdminDeleteGenreMutation();
  const [deleteCareer] = useAdminDeleteCareerMutation();
  const [deleteCountry] = useAdminDeleteCountryMutation();
  const [deleteMovie] = useAdminDeleteMovieMutation();
  const [deleteLanguage] = useAdminDeleteLanguageMutation();
  const [loading, setLoading] = useState(false);
  const deleteHandler = () => {
    setLoading(true);
    if (from === "genre") {
      deleteGenre({ id: item["id"] })
        .unwrap()
        .then((r) => {
          setLoading(false);
          setqw(Math.random());
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              {}
            );
          }
        })
        .then((error) => {});
    }
    if (from === "career") {
      deleteCareer({ id: item["id"] })
        .unwrap()
        .then((r) => {
          setLoading(false);
          setqw(Math.random());
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              {}
            );
          }
        })
        .then((error) => {});
    }
    if (from === "country") {
      deleteCountry({ id: item["id"] })
        .unwrap()
        .then((r) => {
          setLoading(false);
          setqw(Math.random());
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              {}
            );
          }
        })
        .then((error) => {});
    }
    if (from === "language") {
      deleteLanguage({ id: item["id"] })
        .unwrap()
        .then((r) => {
          setLoading(false);
          setqw(Math.random());
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              {}
            );
          }
        })
        .then((error) => {});
    }
    if (from === "movie") {
      deleteMovie({ id: item["id"] })
        .unwrap()
        .then((r) => {
          setLoading(false);
          setqw(Math.random());
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              {}
            );
          }
        })
        .then((error) => {});
    }
  };

  function a() {
    history.push({
      pathname: `${
        from === "movie"
          ? `editMovie?id=${item["id"]}`
          : from === "artist"
          ? `editartist?id=${item["id"]}`
          : ""
      }`,
      state: { data: 5, editProccss: true },
    });
  }
  return item["id"] === selectedID ? (
    <EditItem1
      td={td}
      item={item}
      setSelectedID={setSelectedID}
      editHandler={editHandler}
    />
  ) : (
    <tr className=" py-10 rounded-xl  hover:text-black dark:text-[#d1d1d3] group border-b border-x dark:border-0  ">
      <AlertModal
        loading={loading}
        functionHandler={deleteHandler}
        text={`Are you sure you want to Delete ${item["title"]} `}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <AlertModal
        loading={loading}
        functionHandler={a}
        text={`Are you sure you want to confirm `}
        openModal={openModal2}
        setOpenModal={setOpenModal2}
      />
      {td.map((td, index) => (
        <td key={index}>
          <div className="bg-btn"></div>
          <div
            className={`${
              td === "id"
                ? "text-sm text-btn font-semibold"
                : td === "name" ||
                  td === "title" ||
                  td === "birthDate" ||
                  td === "createdDate" ||
                  td === "releasedDate"
                ? "min-w-[169px]"
                : ""
            } ${index === 0 && "group-hover:rounded-l-xl"}
            ${
              index === lastTdIndex && "group-hover:rounded-r-xl"
            }  flex dark:group-hover:text-screenLight flex-col justify-center px-2  group-hover:dark:bg-[#24272e] group-hover:bg-gray-300  duration-300 h-[64px] my-1  `}
          >
            <div className="self-center  text-center">
              {td === "image" ? (
                <img
                  src={"https://localhost:7175/images/" + item[td]}
                  alt={item[td]}
                  className="w-[40px] h-[40px] self-center rounded-[28%] "
                />
              ) : td === "birthDate" ||
                td === "createdDate" ||
                td === "releasedDate" ? (
                item[td]?.split(" ")[0]
              ) : td === "action" ? (
                <div className="flex justify-center hover:text-btn duration-200  gap-3 text-[19px] py-[2px]">
                  {from === "movie" || from === "artist" ? (
                    // <Link
                    // to={'#'}
                    //   // to={{
                    //   //   pathname: `${
                    //   //     from === "movie"
                    //   //       ? "edit"
                    //   //       : from === "artist"
                    //   //       ? `editartist?id=${item["id"]}`
                    //   //       : ""
                    //   //   }`,
                    //   //   state: { data: item["id"], editProccss: true },
                    //   // }}
                    // >
                    <Tooltip content="edit">
                      <span
                        // onClick={() =>
                        //   (from !== "movie" || from !== "artist") &&
                        //   setSelectedID(item["id"])
                        // }
                        className="cursor-pointer text-[21px]"
                        onClick={() => {
                          // a();
                          setOpenModal2("pop-up");
                          // history.push({
                          //   pathname: `${
                          //     from === "movie"
                          //       ? "edit"
                          //       : from === "artist"
                          //       ? `editartist?id=${item["id"]}`
                          //       : ""
                          //   }`,
                          //   state: { data: item["id"], editProccss: true },
                          // });
                        }}
                      >
                        <AiOutlineEdit />
                      </span>
                    </Tooltip>
                  ) : (
                    // </Link>
                    <Tooltip content="edit">
                      <span
                        onClick={() => setSelectedID(item["id"])}
                        className="cursor-pointer text-[22px]"
                      >
                        {" "}
                        <AiOutlineEdit />
                      </span>
                    </Tooltip>
                  )}
                  <Tooltip content="remove">
                    <span
                      onClick={() => props.setOpenModal("pop-up")}
                      className="text-red-500 dark:group-hover:text-red-300 text-[20px] cursor-pointer"
                    >
                      <RxTrash />
                    </span>
                  </Tooltip>
                </div>
              ) : (
                item[td]
              )}
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default withRouter(AdminListItemCard);
