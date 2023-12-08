import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import DragDropImage from "../../../common/DragDropImage";
import AdminFormCoverIcon from "../../../common/AdminFormCoverIcon";

const AddBlogCover = ({ BlogCover, setBlogCover }) => {
  return (
    <li className=" ml-6 flex flex-col">
      <div className="flex">
        <AdminFormCoverIcon image={BlogCover} />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          Add Blog Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {BlogCover ? (
            <div className="w-[190px] mb-5 max-h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(BlogCover)}
                className="max-w-[190px] max-h-[270px] rounded-xl "
              />
              <button
                onClick={() => setBlogCover(null)}
                className=" mt-2 bg- flex justify-center text-red-500 py-1 rounded-xl hover:text-white border-2 hover:bg-red-500 font-semibold  duration-200 border-red-500 text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="text-center overflow-hidden">
              <DragDropImage setImage={setBlogCover} content={"cover"} />
              <p className="text-btn mt-3 font-semibold">Upload Blog Cover</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddBlogCover;
