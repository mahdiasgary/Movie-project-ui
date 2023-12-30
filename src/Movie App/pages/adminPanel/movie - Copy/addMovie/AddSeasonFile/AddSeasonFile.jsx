import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { SeasonItem } from "./SeasonItem";

const AddSeasonFile = ({
  from,
  seasonFile,
  loadingButton,
  setSeasonFile,
  qw,
  files,
}) => {
  const [seasonLength, setSeasonLength] = useState([1]);
  // const files = [
  //   {
  //     id: 400,
  //     fileName: "55_20231225164102881.png",
  //     quality: "WEB-DL 1080p",
  //     movieId: 1239,
  //     season: 1,
  //     episode: 1,
  //     createdAt: "2023-12-25T16:41:02.8844786",
  //     updatedAt: "2023-12-25T16:41:02.8847949",
  //     isDeleted: false,
  //   },
  //   {
  //     id: 400,
  //     fileName: "55_20231225164102881.png",
  //     quality: "WEB-DL 720p",
  //     movieId: 1239,
  //     season: 2,
  //     episode: 1,
  //     createdAt: "2023-12-25T16:41:02.8844786",
  //     updatedAt: "2023-12-25T16:41:02.8847949",
  //     isDeleted: false,
  //   },
  //   {
  //     id: 400,
  //     fileName: "55_20231225164102881.png",
  //     quality: "WEB-DL 720p x265 10bit",
  //     movieId: 1239,
  //     season: 2,
  //     episode: 2,
  //     createdAt: "2023-12-25T16:41:02.8844786",
  //     updatedAt: "2023-12-25T16:41:02.8847949",
  //     isDeleted: false,
  //   },
  //   {
  //     id: 400,
  //     fileName: "55_20231225164102881.png",
  //     quality: "WEB-DL 480p",
  //     movieId: 1239,
  //     season: 3,
  //     episode: 1,
  //     createdAt: "2023-12-25T16:41:02.8844786",
  //     updatedAt: "2023-12-25T16:41:02.8847949",
  //     isDeleted: false,
  //   },
  // ];

  useEffect(() => {
    from === "edit" &&
      files.files.forEach((l) => {
        setSeasonLength((v) => [...new Set([...v, l.season])]);
      });
  }, [files]);
  console.log(seasonLength.slice(-1)[0]);
  return (
    <div>
      {seasonLength.map((season, index) => (
        <SeasonItem
          season={season}
          key={index}
          setSeasonLength={setSeasonLength}
          seasonFile={seasonFile}
          loadingButton={loadingButton}
          setSeasonFile={setSeasonFile}
          qw={qw}
          from={from}
          seriesFilesForEdit={files}
          lastS={seasonLength.slice(-1)[0]}
        />
      ))}
      <div
        className="px-2 mt-4 shadow-xl  py-2 bg-btn w-36 rounded-md text-screenLight cursor-pointer hover:bg-slate-800 duration-300 ml-5"
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
    </div>
  );
};

export default AddSeasonFile;
