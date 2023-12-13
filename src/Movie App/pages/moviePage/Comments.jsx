import React, { useState } from "react";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import CommentsList from "../adminPanel/comments/commentsList/CommentsList";
import { useSubmitCommentMutation } from "../../redux/services/movieDatabase";
import { Dropdown } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import { BiSolidEdit, BiSolidMoviePlay } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
const Comments = ({ id = 1210 }) => {
  const [selectForAnswer, setSelectForAnswer] = useState(false);
  const [SubmitComment] = useSubmitCommentMutation();
  const [state, setState] = useState({ CommentText: "" });
  const SubmitCommentHandler = () => {
    const formData = new FormData();
    formData.append("CommentText", state.CommentText);
    formData.append("MovieId", id);

    SubmitComment(formData)
      .unwrap()
      .then((r) => console.log(r))
      .catch();
  };
  return (
    <div className="flex w-full justify-center">
      <fieldset className="border-t  dark:bg-opacity-60  dark:border-border">
        <legend className=" px-2 text-gray-500 dark:text-white ">
          Comments
        </legend>
        <div className="flex flex-col w-full md:mx-4 mt-3">
          <div className="justify-center  flex ">
            <div className="relative">
              <fieldset className="border shadow-xl dark:border-transparent group focus-within:border-2 focus-within:border-btn focus-within:dark:border-btn bg-white  dark:bg-border rounded-2xl ">
                <legend className="mx-4 group-focus-within:text-btn  group-focus-within:font-semibold px-1">
                  add your comment
                </legend>
                <textarea
                  onChange={(e) => {
                    setState((v) => ({ ...v, CommentText: e.target.value }));
                  }}
                  name=""
                  id=""
                  placeholder="Write Your Comment Here"
                  className="px-3 w-[80vw] lg:w-[50vw]  xl:max-w-[836px] bg-transparent self-center placeholder:text-sm  rounded-2xl p-2 min-h-[100px]  outline-none"
                ></textarea>
                <button
                  onClick={SubmitCommentHandler}
                  className="px-4 shadow-sm   flex text-white text-sm absolute bottom-0 right-0 py-[10px] mb-2 mr-2 font-semibold hover:bg-blue-800 duration-200 self-center bg-btn rounded-xl mt-1 "
                >
                  
                  <IoSend className="self-center ml-1" />
                </button>
              </fieldset>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-center w-full pb-12">
              <div className="relative dark:bg-opacity-70 backdrop-blur-sm dark:bg-[#1c1d21] flex flex-col justify-between z-0 min-w-[80vw] max-w-[80vw] md:min-w-[60vw] md:max-w-[60vw] rounded-2xl  bg-white shadow-lg w-full ">
                <img
                  src={"https:/localhost:7175/images/"}
                  alt=""
                  className="w-[60px] shadow-[rgba(0,0,0,0.1)0px_10px_15px_3px,rgba(0,0,0,0.05)0px_-1px_15px_3px] absolute top-5 -left-[30px] rounded-[50%]  z-2  h-[60px]"
                />
                <div className="pb-8">
                  <div className="flex mt-10 ml-10 mr-3 justify-between">
                    <div>
                      <p className=" flex text-btn font-semibold">
                        {/* {comment.userName}{" "} */}Mahdi Asgary
                        {/* <p className="ml-10 text-sm">id:{comment.userId}</p> */}
                      </p>
                    </div>

                    <p className="text-gray-500 flex text-sm">
                      {/* <BiSolidMoviePlay className="text-[18px] self-center " />{" "} */}
                      {/* {comment.movieName} */}2 weeks ago
                    </p>
                  </div>

                  <div className="px-9 dark:opacity-90 max-h-[72px] overflow-y-hidden mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur suscipit sunt magnam, repudiandae deserunt, earum
                    alias omnis, in amet eveniet odio inventore blanditiis a est
                    expedita explicabo. Rem, voluptates necessitatibus!{" "}
                  </div>
                </div>

                <div className="mx-7 px-5  py-3 flex dark:bg-border bg-gray-200 bg-opacity-80 rounded-xl mb-3 ">
                  admin: ok body!
                </div>
                <div className="flex justify-end">
                  <button className="flex font-semibold mb-">
                    <p
                      onClick={() => {
                        props.setOpenModal("pop-up");
                        setState((v) => ({ ...v, alertTitle: "delete" }));
                      }}
                      className="text-red-500 py-2 bg-red-500 bg-opacity-20 text-[20px] cursor-pointer hover:bg-opacity-100 duration-200 hover:text-white t px-2 mx-3  mb-1 rounded-lg "
                    >
                      <IoMdTrash />
                    </p>
                  </button>
                  <button
                    // onClick={() => {
                    //   // props.setOpenModal("pop-up");
                    //   setState((v) => ({ ...v, replyInput: true, from: "edit" }));
                    // }}
                    className="bg-btn bg-opacity-10 text-btn text-[20px] hover:bg-btn duration-200 hover:text-white  h-9 mb-2 t px-3 self-center mr-2 rounded-lg"
                  >
                    <BiSolidEdit />{" "}
                  </button>
                  <button
                    // onClick={() => {
                    //   // props.setOpenModal("pop-up");
                    //   setState((v) => ({ ...v, replyInput: true, from: "edit" }));
                    // }}
                    className="bg-btn bg-opacity-10 text-btn text-sm cursor-default  h-9 mb-2 t px-3 self-center mr-2 rounded-lg"
                  >
                    {/* <BiSolidEdit />{" "} */}
                    padding
                  </button>
                </div>

                {/* <div className="mx-5 flex dark:bg-border bg-gray-200 bg-opacity-80 rounded-xl mb-3 ">
                  <input
                    // value={states.replyText}
                    // onChange={(e) =>
                    //   setState((v) => ({ ...v, replyText: e.target.value }))
                    // }
                    autoFocus
                    placeholder="Reply ..."
                    type="text"
                    className="bg-transparent placeholder:text-gray-500 w-full px-5  rounded-xl h-12"
                  />
                  <button
                    onClick={() =>
                      setState((v) => ({ ...v, replyInput: false }))
                    }
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
                </div> */}
              </div>
              {/* <AlertModal
                loading={loading}
                functionHandler={alertHandler}
                text={
                  states.alertTitle === "delete"
                    ? `Are you sure you want to confirm`
                    : `Are you sure you want to confirm`
                }
                openModal={openModal}
                setOpenModal={setOpenModal}
              /> */}
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
            </div>{" "}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Comments;
