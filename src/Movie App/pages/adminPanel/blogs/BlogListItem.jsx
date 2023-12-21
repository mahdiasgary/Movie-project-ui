import React, { useState } from "react";
import { useDeleteBlogAdminPanelMutation } from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import AlertModal from "../../../common/AlertModal";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { HiCheck } from "react-icons/hi";
import toast from "react-hot-toast";
import { TbTrashFilled } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";
import { Toast } from "flowbite-react";

const BlogListItem = ({ comment, removeUserHandler, history }) => {
  const [removeUser] = useDeleteBlogAdminPanelMutation();
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
  console.log(comment);
  const alertHandler = () => {
    setLoading(true);
    if (states.alertTitle === "delete") {
      removeUser({ id: comment.id })
        .unwrap()
        .then((r) => {
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
              { duration: "200" }
            );
          }
          // history.push("/admin/users");
        })
        .then((error) => {
          // console.log(error);
        });
    }
    if (states.alertTitle === "edit") {
      history.push(`/admin/editBlog?id=${comment.id}`);
    }
  };
  //   console.log(states);
  const date1 = new Date(comment.createdAt.split("T")[0]);
  const date2 = new Date();
  const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

  // console.log(diffDays);
  return (
    <div className="flex justify-center w-full pb-12">
      <div className="relative dark:bg-opacity-70 backdrop-blur-sm dark:bg-[#1c1d21] flex flex-col justify-between z-0 min-w-[80vw] max-w-[80vw] md:min-w-[60vw] md:max-w-[60vw] rounded-2xl  bg-white shadow-lg w-full">
        <img
          src={"https:/localhost:7175/images/" + comment.image}
          alt=""
          className=" h-[190px] max-w-[253px]  mt-3 sm:flex absolute hidden shadow-xl  top-2 -left-[30px] rounded-2xl  z-2  "
        />

        <div className="flex justify-center">
          <img
            src={"https:/localhost:7175/images/" + comment.image}
            alt=""
            className=" max-h-[200px] mt-3 sm:hidden shadow-[rgba(0,0,0,0.1)0px_10px_15px_3px,rgba(0,0,0,0.05)0px_-1px_15px_3px]  top-5 -left-[30px] rounded-2xl  z-2  "
          />
        </div>
        <div className="flex">
          <img
            src={"https:/localhost:7175/images/" + comment.image}
            alt=""
            className="opacity-0  h-[190px] max-w-[200px] relative -left-5  mt-3 sm:flex  hidden shadow-xl  rounded-2xl   "
          />
          <div className="pb-8 w-full ">
            <div className="flex mx-4 mt-10 sm:ml-10 sm:mr-3 justify-between">
              <p className="hidden  sm:flex text-btn font-semibold">
                {comment.tittle}{" "}
                {/* <p className="ml-10 text-sm">id:{comment.userId}</p> */}
              </p>

              <p className="text-gray-500 flex gap-1 text-sm">
                <RiTimerFill className="text-[18px] self-center  " />{" "}
                {comment.readingTime} min
              </p>
              <p className="text-sm self-center dark:text-gray-400">
                {/* 2020/02/18 */}
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
              </p>
            </div>
            <div>
              <p className="sm:hidden flex px-5 text-btn mt-3 font-semibold">
                {comment.tittle}{" "}
                {/* <p className="ml-10 text-sm">id:{comment.userId}</p> */}
              </p>
            </div>
            <div className="px-9  dark:opacity-90 max-h-[72px] overflow-y-hidden sm:mt-5">
              {/* {comment.description} */}
              <div
                className="mt-10"
                dangerouslySetInnerHTML={{
                  __html: comment.description
                    .replace("ql-font-monospace", "font-mono")
                    // .replace("ql-size-large", "text-[18px]")
                    // .replace("ql-size-huge", "text-[25px]")
                    .replace("<ul>", " <ul class='list-disc'	/>")
                    .replace("<ol>", " <ul class='list-decimal'	/>")
                    .replace("</ol>", "</ul>")
                    .replace("ql-align-center", "text-center")
                    .replace("ql-align-right", "text-end"),
                  // .replace("ql-align-center", "text-center"),
                }}
              ></div>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea
            inventore porro aliquid mollitia voluptas sit consectetur quaerat
            deserunt dolores iusto ipsum, asperiores delectus ducimus minima
            pariatur deleniti molestias repudiandae. */}
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:pt-3">
          <div className="self-center pl-4 ">
            <p className="dark:text-gray-400 gap-1 flex text-sm">
              <GiAstronautHelmet className="text-[18px] self-center " />{" "}
              {comment.autor}
            </p>
          </div>
          <div className="flex gap-2  m-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push(`/admin/editBlog?id=${comment.id}`);
              }}
              className="duration-200 hover:text-white hover:bg-opacity-100 text-btn bg-opacity-20 text-[20px] bg-btn p-2 rounded-xl"
            >
              <FaInfoCircle />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setState((v) => ({ ...v, alertTitle: "delete" }));
                setOpenModal("pop-up");
              }}
              className="duration-200 hover:text-white hover:bg-opacity-100 text-red-500 bg-opacity-20 text-[20px] bg-red-500 p-2 rounded-xl"
            >
              <TbTrashFilled />
            </button>
          </div>
        </div>
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
    </div>
  );
};

export default withRouter(BlogListItem);
