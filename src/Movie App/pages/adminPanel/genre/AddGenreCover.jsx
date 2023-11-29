import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import DragDropImage from "../../../common/DragDropImage";
import AdminFormCoverIcon from "../../../common/AdminFormCoverIcon";

const AddGenreCover = ({ genreCover, setGenreCover }) => {
  return (
    <li className=" ml-6 flex flex-col">
      <div className="flex">
        <AdminFormCoverIcon image={genreCover} />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          Add Genre Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {genreCover ? (
            <div className="w-[190px] mb-5 max-h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(genreCover)}
                className="max-w-[190px] max-h-[270px] rounded-xl "
              />
              <button
                onClick={() => setGenreCover(null)}
                className=" mt-2 bg- flex justify-center text-red-500 py-1 rounded-xl hover:text-white border-2 hover:bg-red-500 font-semibold  duration-200 border-red-500 text-center  "
                >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="text-center overflow-hidden">
              <DragDropImage setImage={setGenreCover} content={"cover"} />
              <p className="text-btn mt-3 font-semibold">Upload Genre Cover</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddGenreCover;
