import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi";
import { SeasonItem } from "./SeasonItem";

const AddSeasonFile = ({seasonFile, setSeasonFile}) => {
  const [seasonLength, setSeasonLength] = useState([]);

  return (
    <div>
    {seasonLength.map((season, index) => (
      <SeasonItem season={season} key={index} seasonFile={seasonFile} setSeasonFile={setSeasonFile} />
    ))}
    <div
      className="px-2 mt-10 py-2 bg-btn w-36 rounded-md text-screenLight cursor-pointer hover:bg-slate-800 duration-300 ml-5"
      onClick={() =>
        setSeasonLength([
          ...seasonLength,
          seasonLength.slice(-1)[0] ? seasonLength.slice(-1)[0] + 1 : 1,
        ])
      }
    >
      <HiPlus className="inline text-lg " /> Add Season
      {seasonLength.slice(-1)[0] ? seasonLength.slice(-1)[0] + 1 : 1}
    </div>
  </div>  )
}

export default AddSeasonFile