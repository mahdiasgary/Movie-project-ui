import React, { useState } from "react";
import PartItem from "./EpisodeItem";
import { HiPlus } from "react-icons/hi";
import EpisodeItem from "./EpisodeItem";

export const SeasonItem = ({ season,seasonFile,setSeasonFile }) => {
  const [episodes, setEpisodes] = useState([1]);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  return (
    <div className="border border-btn rounded-xl mx-5 mt-10  max-w-[1300px]  ">
      <div className="dark:bg-border  md:bg-btn w-full md:w-32 pt-2 pl-3 h-10 rounded-tl-xl md:rounded-br-xl rounded-tr-xl md:rounded-tr-[0] text-btn md:text-white">
        Add Season {season}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between my-2">
        <div className="flex lg:flex-col   max-h-[300px] md:min-w-[150px] lg:min-w-[160px] mt-3 mx-6  md:overflow-y-auto  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md">
          <div className="flex gap-2 lg:flex-col  ">
            {episodes.map((episode, index) => (
              <div
                onClick={() => setSelectedEpisode(episode)}
                key={index}
                className={`${
                  selectedEpisode === episode && "text-btn border-btn font-semibold"
                } cursor-pointer mb-3 lg:mb-0 text-center w-24 duration-300 lg:w-32 my-1 text-[14px] border border-border rounded-lg py-1 lg:py-2`}
              >
                Episode {episode}
              </div>
            ))}
            <div
              onClick={() => {
                setEpisodes([...episodes, episodes.slice(-1)[0] + 1]);
                setSelectedEpisode(episodes.slice(-1)[0] + 1);
              }}
              className={`hover:bg-btn hover:dark:bg-btn mb-3 lg:mb-0 text-[12px] flex flex-col justify-center dark:bg-gray-700 bg-gray-600 text-white duration-200 cursor-pointer text-center w-28 lg:w-32 my-1 rounded-lg py-1 lg:py-2`}
            >
              <div>
                <HiPlus className="inline text-lg " /> Add Episode{" "}
                {episodes.slice(-1)[0] ? episodes.slice(-1)[0] + 1 : 1}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mr-3 flex justify-center">
          {episodes.map((episode, index) => (
            <EpisodeItem key={index} episode={episode} selectedEpisode={selectedEpisode} selectedSeason={season} setSeasonFile={setSeasonFile} seasonFile={seasonFile} />
          ))}
        </div>
      </div>
    </div>
  );
};
