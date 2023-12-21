import React, { useState } from "react";
import PartItem from "./EpisodeItem";
import { HiPlus } from "react-icons/hi";
import EpisodeItem from "./EpisodeItem";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export const SeasonItem = ({
  season,
  loadingButton,
  seasonFile,
  setSeasonFile,
  setSeasonLength,
  qw,
}) => {
  const [episodes, setEpisodes] = useState([1]);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  // console.log(seasonFile);
  return (
    <div>
      <fieldset className="border-2 shadow-lg focus-within:border-btn duration-300 dark:focus-within:border-btn dark:border-gray-600 rounded-xl mx-4 mt-5  max-w-[1300px]  ">
        <legend className="text-btn px-1  mx-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSeasonLength((v) => v.filter((q) => q !== season));
            }}
            className="duration-200 mx-1  hover:text-white hover:bg-opacity-100 text-btn bg-opacity-20 text-[17px] bg-btn p-1 rounded-xl"
          >
            <RxCross2 />
          </button>
          Season {season}
        </legend>
        <div className="flex justify-end  "></div>
        <div className="flex flex-col lg:flex-row lg:justify-between my-2">
          <div className="flex lg:flex-col   max-h-[300px] md:min-w-[150px] max-w-[400px] lg:min-w-[160px] mt-3 mx-6 overflow-x-scroll md:overflow-x-hidden md:overflow-y-auto  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md">
            <div className="flex gap-2 lg:flex-col  ">
              {episodes.map((episode, index) => (
                <div
                  onClick={() => setSelectedEpisode(episode)}
                  key={index}
                  className={`${
                    selectedEpisode === episode &&
                    "text-btn border-btn font-semibold"
                  } cursor-pointer text-sm shadow-md mb-3 lg:mb-0 text-center w-24 duration-300 lg:w-32 my-1 text-[14px] border dark:border-border rounded-lg py-1 lg:py-2`}
                >
                  Episode {episode}
                </div>
              ))}
              <div
                onClick={() => {
                  setEpisodes([...episodes, episodes.slice(-1)[0] + 1]);
                  setSelectedEpisode(episodes.slice(-1)[0] + 1);
                }}
                className={`hover:bg-btn hover:dark:bg-btn mb-3 lg:mb-0 text-[12px] flex flex-col justify-center dark:bg-gray-700 bg-gray-600 text-white duration-200 cursor-pointer text-center w-16 lg:w-32 my-1 rounded-lg py-1 lg:py-2`}
              >
                <div>
                  <HiPlus className="inline text-[18px] " />{" "}
                  {/* {episodes.slice(-1)[0] ? episodes.slice(-1)[0] + 1 : 1}{" "} */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mr-3 flex justify-center">
            {episodes.map((episode, index) => (
              <EpisodeItem
                key={index}
                episode={episode}
                selectedEpisode={selectedEpisode}
                selectedSeason={season}
                setSeasonFile={setSeasonFile}
                seasonFile={seasonFile}
              />
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
};
