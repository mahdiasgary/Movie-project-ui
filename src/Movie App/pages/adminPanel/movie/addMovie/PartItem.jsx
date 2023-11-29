import React from "react";
import AddFileItem from "./AddSeasonFile/AddFileItem";

const PartItem = ({ part, selectedPart }) => {
  const qualities = [
    "WEB-DL 1080p",
    "WEB-DL 720p",
    "WEB-DL 720p x265 10bit",
    "WEB-DL 480p",
  ];
  return (
    <div
      className={`${
        selectedPart !== part && "hidden"
      } w-full rounded-lg cursor-pointer border-2 border-[#787f98] border-dashed text-center m-2   flex flex-col`}
    >
      <p>part {part}</p>
      <div className="my-3">
        {qualities.map((quality, index) => (
          <AddFileItem key={index} quality={quality} />
        ))}
      </div>
    </div>
  );
};

export default PartItem;
