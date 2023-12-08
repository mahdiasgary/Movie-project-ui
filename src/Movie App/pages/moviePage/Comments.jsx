import React, { useState } from "react";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import CommentsList from "../adminPanel/comments/commentsList/CommentsList";
import { useSubmitCommentMutation } from "../../redux/services/movieDatabase";
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
      <fieldset className="border-t dark:bg-opacity-60  dark:border-border">
        <legend className=" px-2 text-gray-500 dark:text-white ">
          Comments
        </legend>
        <div className="flex flex-col w-full md:mx-4 mt-3">
          <div className="justify-center  flex ">
            <div className="relative">
              <fieldset className="border shadow-xl dark:border-transparent  focus-within:border-2 focus-within:border-btn focus-within:dark:border-btn bg-white  dark:bg-border rounded-2xl ">
                <legend className="mx-4 px-1">add your comment</legend>
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
                  className="px-3 shadow-sm shadow-btn  flex text-white text-sm absolute bottom-0 right-0 py-2 mb-2 mr-2 font-semibold hover:bg-blue-800 duration-200 self-center bg-btn rounded-xl mt-1 "
                >
                  POST
                  <IoSend className="self-center ml-1" />
                </button>
              </fieldset>
            </div>
          </div>

          <div className="mt-8">
            <CommentsList />
            {/* <div className="flex flex-col border border-border border-l-btn border-l-2 p-4 rounded-md">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-btn font-semibold mb-2">
                    <img
                      src="https://mobomoviez.fun/images/2022/6/7/avatar-3.jpg"
                      alt=""
                      className="inline w-[43px]  rounded-2xl "
                    />{" "}
                    Name
                  </p>
                  <span className="text-sm">2012/6/12 sep</span>
                </div>
                <div className="self-center">
                  <button
                    onClick={() => setSelectForAnswer(!selectForAnswer)}
                    className="bg-border px-3 py-1 text-btn text-sm font-semibold hover:bg-screenDark hover:border border-btn duration-200 rounded-md"
                  >
                    {" "}
                    <HiOutlineArrowUturnLeft className="inline self-center mx-1" />
                    Answer
                  </button>
                </div>
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                sit veniam eius excepturi non, perspiciatis voluptates ipsam
                nostrum molestias eos, quos totam iure doloribus tempore facilis
                repudiandae aut veritatis. Cumque.
              </div>
              <div
                className={`origin-top ${
                  selectForAnswer
                    ? "duration-500 "
                    : "scale-y-0 h-0 duration-150 "
                } max-w-[836px] mt-7 flex flex-col`}
              >
                <textarea
                  name=""
                  id=""
                  placeholder="Write Your Comment Here"
                  className="rounded-lg self-center bg-border p-2 h-[80px] w-[80vw] lg:w-[50vw]  xl:max-w-[836px] outline-none"
                ></textarea>
                <div className="flex justify-center text-sm">
                  <button className="px-5 mx-2 py-3  font-semibold  self-center border border-border text-border  rounded-md mt-1 max-w-[200px]">
                    Cansel{" "}
                  </button>
                  <button className="px-5 py-3 font-semibold hover:bg-blue-800 duration-200 self-center bg-btn rounded-md mt-1 max-w-[200px]">
                    ADD Commite
                  </button>
                </div>
              </div>
              <div className="mx-8">
                {" "}
                <div className="flex flex-col border border-border border-l-btn border-l-2 p-4 rounded-md">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-btn font-semibold">Name</p>
                      <span className="text-sm">2012/6/12 sep</span>
                    </div>
                    <div className="self-center">
                      <button
                        onClick={() => setSelectForAnswer(!selectForAnswer)}
                        className="bg-border px-3 py-1 text-btn text-sm font-semibold hover:bg-screenDark hover:border border-btn duration-200 rounded-md"
                      >
                        {" "}
                        <HiOutlineArrowUturnLeft className="inline self-center mx-1" />
                        Answer
                      </button>
                    </div>
                  </div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam sit veniam eius excepturi non, perspiciatis voluptates
                    ipsam nostrum molestias eos, quos totam iure doloribus
                    tempore facilis repudiandae aut veritatis. Cumque.
                  </div>
                  <div
                    className={`origin-top ${
                      selectForAnswer
                        ? "duration-500 "
                        : "scale-y-0 h-0 duration-150 "
                    } max-w-[836px] mt-7 flex flex-col`}
                  >
                    <textarea
                      name=""
                      id=""
                      placeholder="Write Your Comment Here"
                      className="rounded-lg self-center bg-border p-2 h-[80px] w-[80vw] lg:w-[50vw]  xl:max-w-[836px] outline-none"
                    ></textarea>
                    <div className="flex justify-center text-sm">
                      <button className="px-5 mx-2 py-3  font-semibold  self-center border border-border text-border  rounded-md mt-1 max-w-[200px]">
                        Cansel{" "}
                      </button>
                      <button className="px-5 py-3 font-semibold hover:bg-blue-800 duration-200 self-center bg-btn rounded-md mt-1 max-w-[200px]">
                        ADD Commite
                      </button>
                    </div>
                  </div>
                  <div> </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Comments;
