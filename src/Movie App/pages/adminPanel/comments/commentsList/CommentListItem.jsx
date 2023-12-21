import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
// import { AiOutlineEdit } from "react-icons/ai";
import {
  useChangeCommentStatusInAdminPanelMutation,
  useRemoveUserMutation,
  useSubmitAnswerForUserCommentMutation,
  useSubmitEditAnswerForUserCommentMutation,
} from "../../../../redux/services/movieDatabase";

// import { IoSend } from "react-icons/io5";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, Toast, Tooltip } from "flowbite-react";
import AlertModal from "../../../../common/AlertModal";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import { HiCheck } from "react-icons/hi";
import { BsInfoCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdTrash } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";

const CommentListItem = ({ comment, removeUserHandler, history }) => {
  const [changeStatus] = useChangeCommentStatusInAdminPanelMutation();
  const [removeUser] = useRemoveUserMutation();
  const [submitAnswer] = useSubmitAnswerForUserCommentMutation();
  const [editAnswer] = useSubmitEditAnswerForUserCommentMutation();
  const [isActive, setIsActive] = useState(false);
  let { setqw } = useStateContext();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [loading, setLoading] = useState(false);
  const [states, setState] = useState({
    replyInput: false,
    alertTitle: "",
    replyText: "",
    from: "",
  });
  const alertHandler = () => {
    setLoading(true);
    if (states.alertTitle === "delete") {
      removeUser({ id: comment.id })
        .unwrap()
        .then((r) => {
          setqw(Math.random());
          console.log(r);
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
              { duration: "200" }
            );
          }
          // history.push("/admin/users");
        })
        .then((error) => {
          // console.log(error);
        });
    }
    if (states.alertTitle === "Approve") {
      const formDate = new FormData();
      formDate.append("CommentId", comment.id);
      formDate.append("Status", "Approved");
      changeStatus(formDate)
        .unwrap()
        .then((r) => {
          setLoading(false);
          console.log(r);
          setqw(Math.random());
        })
        .catch();
    }
    if (states.alertTitle === "Reject") {
      const formDate = new FormData();
      formDate.append("CommentId", comment.id);
      formDate.append("Status", "Rejected");
      changeStatus(formDate)
        .unwrap()
        .then((r) => {
          setLoading(false);
          console.log(r);
          setqw(Math.random());
        })
        .catch();
    }
    if (states.alertTitle === "answer" && states.from !== "edit") {
      const formDate = new FormData();
      formDate.append("CommentId", comment.id);
      formDate.append("Text", states.replyText);
      submitAnswer(formDate)
        .unwrap()
        .then((r) => {
          setLoading(false);
          console.log(r);
          setqw(Math.random());
        })
        .catch();
    }
    if (states.alertTitle === "answer" && states.from === "edit") {
      const formDate = new FormData();
      formDate.append("CommentId", comment.answer.id);
      formDate.append("Text", states.replyText);
      editAnswer(formDate)
        .unwrap()
        .then((r) => {
          setLoading(false);
          console.log(r);
          setqw(Math.random());
        })
        .catch();
    }
  };
  console.log(states)
  const date1 = new Date(comment.createdAt.split("T")[0]);
  const date2 = new Date();
  const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

  // console.log(diffDays);
  return (
    <div className="flex justify-center w-full pb-12">
      <div className="relative dark:bg-opacity-70 backdrop-blur-sm dark:bg-[#1c1d21] flex flex-col justify-between z-0 min-w-[80vw] max-w-[80vw] md:min-w-[60vw] md:max-w-[60vw] rounded-2xl  bg-white shadow-lg w-full max-h-[270px]">
        <img
          src={"https:/localhost:7175/images/" + comment.image}
          alt=""
          className="w-[70px] shadow-[rgba(0,0,0,0.1)0px_10px_15px_3px,rgba(0,0,0,0.05)0px_-1px_15px_3px] absolute top-5 -left-[35px] rounded-[50%]  z-2  h-[70px]"
        />
        <div className="pb-8">
          <div className="flex mt-10 ml-12 mr-3 justify-between">
            <div>
              <p className=" flex text-btn font-semibold">
                {comment.userName}{" "}
                {/* <p className="ml-10 text-sm">id:{comment.userId}</p> */}
              </p>
            </div>

            <p className="text-gray-500 flex text-sm">
              <BiSolidMoviePlay className="text-[21px] self-center " />{" "}
              {comment.movieName}
            </p>
            <p className="text-sm self-center dark:text-gray-400">
              {diffDays === 0
                ? "today"
                : diffDays === 1
                ? "1 day ago"
                : diffDays === 2
                ? "2 days ago"
                : diffDays === 3
                ? "3 days ago"
                : diffDays === 4
                ? "4 days ago"
                : diffDays === 5
                ? "5 days ago"
                : diffDays === 6
                ? "6 days ago"
                : diffDays >= 7 && diffDays <= 14
                ? "one week ago"
                : new Date(comment.createdAt.split("T")[0]).toDateString()}

              {/* 2 week ago */}
            </p>
          </div>

          <div className="px-9 dark:opacity-90 max-h-[72px] overflow-y-hidden mt-5">
            {comment.text}
          </div>
        </div>

        {comment.statusType === 1 && (
          <div className="flex gap-2 text-[24px] pr-3 pb-[5px] self-end   justify-end ">
            <Tooltip content="Approve">
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setState((v) => ({ ...v, alertTitle: "Approve" }));
                }}
                className=" text-btn hover:text-white hover:bg-opacity-100  bg-btn rounded-md bg-opacity-20 px-4 py-1 cursor-pointer self-center duration-200 "
              >
                <MdOutlineDone />
              </button>
            </Tooltip>
            <Tooltip content="Reject">
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setState((v) => ({ ...v, alertTitle: "Reject" }));
                }}
                className=" text-red-500  hover:text-white hover:bg-opacity-100 bg-red-500 bg-opacity-20 rounded-md p-1  cursor-pointer self-center hover:text-btn duration-200 "
              >
                <IoClose />
              </button>
            </Tooltip>
            <Tooltip content="remove">
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setState((v) => ({ ...v, alertTitle: "delete" }));
                }}
                className="text-red-500 dark:group-hover:text-red-300 text-[20px] cursor-pointer"
              >
                <RxTrash />
              </button>
            </Tooltip>
          </div>
        )}
        {comment.statusType === 0 &&
          !comment.answer &&
          (states.replyInput ? (
            <div className="mx-5 flex dark:bg-border bg-gray-200 bg-opacity-80 rounded-xl mb-3 ">
              <input
                value={states.replyText}
                onChange={(e) =>
                  setState((v) => ({ ...v, replyText: e.target.value }))
                }
                autoFocus
                placeholder="Reply ..."
                type="text"
                className="bg-transparent placeholder:text-gray-500 w-full px-5  rounded-xl h-12"
              />
              <button
                onClick={() => setState((v) => ({ ...v, replyInput: false }))}
                className="bg-gray-500 duration-100 hover:bg-gray-600 text-sm text-white h-9 t px-3 self-center mr-2 rounded-lg"
              >
                <RxCross2 />
              </button>
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setState((v) => ({ ...v, alertTitle: "answer" }));
                }}
                className="bg-btn duration-200 hover:bg-blue-800 text-white h-9 t px-4 self-center mr-2 rounded-lg"
              >
                <IoSend />{" "}
              </button>
            </div>
          ) : (
            <div>
              <div className="flex font-semibold">
                {/* <p className="text-btn text-sm pl-5  py-1 mb-1 ">Approved</p> */}
                <p
                  onClick={() => {
                    props.setOpenModal("pop-up");
                    setState((v) => ({ ...v, alertTitle: "delete" }));
                  }}
                  className="text-red-500 text-[22px] cursor-pointer hover:bg-red-200 t px-2 mx-3 py-1 mb-1 rounded-lg "
                >
                  <IoMdTrash />
                </p>
                <p className="text-gray-500 text-sm   py-1 mb-1 ">
                  id : {comment.id}
                </p>
                <div className=" text-btn text-sm   px-2 ml-3 py-1 mb-1   hover:bg-btn  hover:bg-opacity-20 duration-200 rounded-xl">
                  <Dropdown className="text-sm" label={"Approved"} inline>
                    <Dropdown.Item
                      // className={inputs.IsAdmin ? "" : "hidden"}
                      onClick={(e) => {
                        setState((values) => ({
                          ...values,
                          alertTitle: "Reject",
                        }));
                        props.setOpenModal("pop-up");
                      }}
                      className="text-sm"
                    >
                      Reject
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              <div
                onClick={() => setState((s) => ({ ...s, replyInput: true }))}
                className="absolute flex z-2 cursor-pointer -bottom-4 text-gray-500 text-sm font-semibold
        bg-white dark:bg-border dark:text-gray-400
      shadow-[rgba(0,0,0,0.1)0px_10px_15px_3px,rgba(0,0,0,0.05)0px_-1px_15px_3px] right-5 px-8 py-2 rounded-xl "
              >
                Reply
                <FaCircleChevronRight className="ml-1 self-center" />
              </div>
            </div>
          ))}
        {comment.statusType === 0 &&
          comment.answer &&
          (states.replyInput ? (
            <div>
              <div className="mx-5 flex dark:bg-border bg-gray-200 bg-opacity-80 rounded-xl mb-3 ">
                <input
                  value={states.replyText}
                  onChange={(e) =>
                    setState((v) => ({ ...v, replyText: e.target.value }))
                  }
                  autoFocus
                  placeholder="Reply ..."
                  type="text"
                  className="bg-transparent placeholder:text-gray-500 w-full px-5  rounded-xl h-12"
                />
                <button
                  onClick={() => setState((v) => ({ ...v, replyInput: false }))}
                  className="bg-gray-500 duration-100 hover:bg-gray-600 text-sm text-white h-9 t px-3 self-center mr-2 rounded-lg"
                >
                  <RxCross2 />
                </button>
                <button
                  onClick={() => {
                    props.setOpenModal("pop-up");
                    setState((v) => ({ ...v, alertTitle: "answer" }));
                  }}
                  className="bg-btn duration-200 hover:bg-blue-800 text-white h-9 t px-4 self-center mr-2 rounded-lg"
                >
                  <IoSend />{" "}
                </button>
              </div>
              <div>
                <div className="flex font-semibold">
                  {/* <p className="text-btn text-sm pl-5  py-1 mb-1 ">Approved</p> */}
                  <p
                    onClick={() => {
                      props.setOpenModal("pop-up");
                      setState((v) => ({ ...v, alertTitle: "delete" }));
                    }}
                    className="text-red-500 text-[22px] cursor-pointer hover:bg-red-200 t px-2 mx-3 py-1 mb-1 rounded-lg "
                  >
                    <IoMdTrash />
                  </p>
                  <p className="text-gray-500 text-sm   py-1 mb-1 ">
                    id : {comment.id}
                  </p>
                  <div className=" text-btn text-sm   px-2 ml-3 py-1 mb-1   hover:bg-btn  hover:bg-opacity-20 duration-200 rounded-xl">
                    <Dropdown className="text-sm" label={"Approved"} inline>
                      <Dropdown.Item
                        // className={inputs.IsAdmin ? "" : "hidden"}
                        onClick={(e) => {
                          setState((values) => ({
                            ...values,
                            alertTitle: "Reject",
                          }));
                          props.setOpenModal("pop-up");
                        }}
                        className="text-sm"
                      >
                        Reject
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <fieldset className="mx-5 flex dark:bg-border bg-gray-200 bg-opacity-80 rounded-xl mb-3 ">
                <legend className="mx-3 px-1 text-sm text-gray-500 dark:text-white opacity-70">
                  Admin Answer
                </legend>
                <div className="bg-transparent self-center pt-2 placeholder:text-gray-500 w-full px-5  rounded-xl h-12">
                  {comment.answer.text}
                </div>

                <button
                  onClick={() => {
                    // props.setOpenModal("pop-up");
                    setState((v) => ({ ...v, replyInput: true, from: "edit" }));
                  }}
                  className="bg-btn duration-200 text-[20px] hover:bg-blue-800 text-white h-9 mb-2 t px-2 self-center mr-2 rounded-lg"
                >
                  <BiSolidEdit />{" "}
                </button>
              </fieldset>
              <div>
                <div className="flex font-semibold">
                  {/* <p className="text-btn text-sm pl-5  py-1 mb-1 ">Approved</p> */}
                  <p
                    onClick={() => {
                      props.setOpenModal("pop-up");
                      setState((v) => ({ ...v, alertTitle: "delete" }));
                    }}
                    className="text-red-500 text-[22px] cursor-pointer hover:bg-red-200 t px-2 mx-3 py-1 mb-1 rounded-lg "
                  >
                    <IoMdTrash />
                  </p>
                  <p className="text-gray-500 text-sm   py-1 mb-1 ">
                    id : {comment.id}
                  </p>
                  <div className=" text-btn text-sm   px-2 ml-3 py-1 mb-1   hover:bg-btn  hover:bg-opacity-20 duration-200 rounded-xl">
                    <Dropdown className="text-sm" label={"Approved"} inline>
                      <Dropdown.Item
                        // className={inputs.IsAdmin ? "" : "hidden"}
                        onClick={(e) => {
                          setState((values) => ({
                            ...values,
                            alertTitle: "Reject",
                          }));
                          props.setOpenModal("pop-up");
                        }}
                        className="text-sm"
                      >
                        Reject
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {comment.statusType === 2 && (
          <div className="flex justify-between">
            <div className="flex font-semibold">
              {/* <p className="text-btn text-sm pl-5  py-1 mb-1 ">Approved</p> */}
              <p
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setState((v) => ({ ...v, alertTitle: "delete" }));
                }}
                className="text-red-500 text-[22px] cursor-pointer hover:bg-red-200 t px-2 mx-3 py-1 mb-1 rounded-lg "
              >
                <IoMdTrash />
              </p>

              <p className="text-gray-500 text-sm   py-1 mb-1 ">
                id : {comment.id}
              </p>
            </div>
            <button className=" text-red-500 hover:text-white bg-red-500 bg-opacity-10 mr-1 py-2 text-sm   px-2 ml-3 mb-1  hover:bg-opacity-100 duration-200 rounded-xl">
              <Dropdown className="text-sm" label={"Rejected"} inline>
                <Dropdown.Item
                  onClick={(e) => {
                    setState((values) => ({
                      ...values,
                      alertTitle: "Approve",
                    }));
                    props.setOpenModal("pop-up");
                  }}
                  className="text-sm"
                >
                  Approve
                </Dropdown.Item>
              </Dropdown>
            </button>
          </div>
        )}
      </div>
      <AlertModal
        loading={loading}
        functionHandler={alertHandler}
        text={
          states.alertTitle === "delete"
            ? `Are you sure you want to confirm`
            : `Are you sure you want to confirm`
        }
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {/* <AlertModal
        loading={loading}
        functionHandler={alertHandler}
        text={
          from === "delete"
            ? `Are you sure you want to Delete ${user["username"]} `
            : `Are you sure you want to confirm`
        }
        openModal={openModal}
        setOpenModal={setOpenModal}
      /> */}
    </div>
  );
};

export default withRouter(CommentListItem);
