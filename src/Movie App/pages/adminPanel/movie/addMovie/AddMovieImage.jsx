import React, { useState } from "react";
import { GrPowerCycle } from "react-icons/gr";
import { RxTrash } from "react-icons/rx";
import DragDropImage from "../../../../common/DragDropImage";
import AdminFormCoverIcon from "../../../../common/AdminFormCoverIcon";
const AddMoveImage = ({
  movieCover,
  editProccss,
  setMovieCover,
  movieBackground,
  setMovieBackground,
  image,
}) => {
  return (
    <li className="mb-7 ml-6 flex flex-col">
      <div className="flex">
        <AdminFormCoverIcon image={movieCover} secondeImage={editProccss ? false :movieBackground } />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          {editProccss ? "Movie Image" : " Add Movie Image"}
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {movieCover ? (
            <div className="w-[190px]  max-h-[270px] flex flex-col ">
              {editProccss ? (
                <img
                  alt="not found"
                  src={
                    typeof movieCover === "string"
                      ? "https://localhost:7175/images/" + movieCover
                      : URL.createObjectURL(movieCover)
                  }
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              ) : (
                <img
                  alt="not found"
                  src={URL.createObjectURL(movieCover)}
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              )}
              {editProccss ? (
                <button
                  onClick={() => setMovieCover(null)}
                  className=" mt-2 bg- flex justify-center text-btn py-1 rounded-xl hover:text-white border-2 hover:bg-btn font-semibold  duration-200 border-btn text-center  "
                >
                  {/* <GrPowerCycle className="self-center inline text-[18px] text-btn hover:text-white" />{" "} */}
                  Change Picture
                </button>
              ) : (
                <button
                  onClick={() => setMovieCover(null)}
                  className=" mt-2 bg- flex justify-center text-red-500 py-1 rounded-xl hover:text-white border-2 hover:bg-red-500 font-semibold  duration-200 border-red-500 text-center  "
                >
                  <RxTrash className="self-center inline text-[20px]" /> Remove
                </button>
              )}
            </div>
          ) : (
            <div className="text-center overflow-hidden">
              <DragDropImage setImage={setMovieCover} content={"cover"} />
              <p className="text-btn mt-3 font-semibold pr-1">
                Upload Movies Cover
              </p>
            </div>
          )}

          {movieBackground ? (
            <div className="w-[190px] mt-0 md:mt-0 max-h-[270px] flex flex-col ">
              {editProccss ? (
                <img
                  alt="not found"
                  src={
                    typeof movieBackground === "string"
                      ? "https://localhost:7175/images/" + movieBackground
                      : URL.createObjectURL(movieBackground)
                  }
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              ) : (
                <img
                  alt="not found"
                  src={URL.createObjectURL(movieBackground)}
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              )}
              {editProccss ? (
                <button
                  onClick={() => setMovieBackground(null)}
                  className=" mt-2 bg- flex justify-center text-btn py-1 rounded-xl hover:text-white border-2 hover:bg-btn font-semibold  duration-200 border-btn text-center  "
                >
                  {/* <GrPowerCycle className="self-center inline text-[18px] text-btn hover:text-white" />{" "} */}
                  Change Picture
                </button>
              ) : (
                <button
                  onClick={() => setMovieBackground(null)}
                  className=" mt-2 bg- flex justify-center text-red-500 py-1 rounded-xl hover:text-white border-2 hover:bg-red-500 font-semibold  duration-200 border-red-500 text-center  "
                >
                  <RxTrash className="self-center inline text-[20px]" /> Remove
                </button>
              )}
            </div>
          ) : (
            <div className=" text-center  overflow-hidden ">
              <DragDropImage
                setImage={setMovieBackground}
                content={"background"}
              />
              <p className="text-btn mt-3 font-semibold">
                Upload Movies Background
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddMoveImage;
