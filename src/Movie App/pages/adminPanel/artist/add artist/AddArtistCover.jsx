import React, { useState } from "react";
import DragDropImage from "../../../../common/DragDropImage";
import { RxTrash } from "react-icons/rx";
import AdminFormCoverIcon from "../../../../common/AdminFormCoverIcon";
import { GrPowerCycle } from "react-icons/gr";

const AddArtistCover = ({
  artistImage,
  setArtistImage,
  editProccss,
  artistImageIni,
}) => {
  return (
    <li className=" ml-6 flex flex-col">
      <div className="flex">
        <AdminFormCoverIcon image={false} />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          {editProccss ? "Artist Image" : " Add Artist Image"}
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {artistImage ? (
            <div className="w-[190px] self-center mb-8 max-h-[270px] flex flex-col ">
              {editProccss && artistImage === artistImageIni ? (
                <img
                  alt="not foundd"
                  src={"https://localhost:7175/images/" + artistImageIni}
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              ) : (
                <img
                  alt="not found"
                  src={URL.createObjectURL(artistImage)}
                  className="max-w-[190px] max-h-[270px] rounded-xl "
                />
              )}
              {editProccss ? (
                <button
                  onClick={() => setArtistImage(null)}
                  className=" mt-2 bg- flex justify-center text-btn py-1 rounded-xl hover:text-white border-2 hover:bg-btn font-semibold  duration-200 border-btn text-center  "
                >
                  {/* <GrPowerCycle className="self-center inline pr-1 text-[15px] text-btn hover:text-white" />{" "} */}
                  Change Picture
                </button>
              ) : (
                <button
                  onClick={() => setArtistImage(null)}
                  className=" mt-2 bg- flex justify-center text-red-500 py-1 rounded-xl hover:text-white border-2 hover:bg-red-500 font-semibold  duration-200 border-red-500 text-center  "
                >
                  <RxTrash className="self-center inline text-[20px]" /> Remove
                </button>
              )}
            </div>
          ) : (
            <div className="text-center self-center overflow-hidden">
              <DragDropImage setImage={setArtistImage} content={"cover"} />
              <p className="text-btn mt-3 font-semibold pr-1">
                Upload Artist Cover
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddArtistCover;
