import React, { useState } from "react";
import DragDropSeriesFile from "./DragDropSeriesFile";

const AddFileItem = ({ quality,season,episode,seasonFile,setSeasonFile }) => {
  // const[a,s]=useState('')
  console.log(seasonFile)
  return (
    <div>
      <div className=" flex  mx-2 my-1 bg-gray-300 dark:bg-border px-1 rounded-md py-1 justify-between">
        <input
        onChange={(e)=>setSeasonFile([...seasonFile ,{season , episode ,quality, file: e.target.value }])}
          type="file"
          className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-3 md:file:px-6  self-center
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-screenDark
            hover:file:text-screenLight 
          "
        />

        <p className="self-center md:text-[16px] text-sm ">{quality}</p>
      </div>
    </div>
  );
};

export default AddFileItem;
