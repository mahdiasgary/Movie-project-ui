import React from "react";
import AddFileItem from "./AddFileItem";

const EpisodeItem = ({ episode, selectedEpisode,selectedSeason,seasonFile,setSeasonFile }) => {
  const qualities = [
    "WEB-DL 1080p",
    "WEB-DL 720p",
    "WEB-DL 720p x265 10bit",
    "WEB-DL 480p",
  ];
  return (
    <div
      className={`${
        selectedEpisode !== episode && "hidden"
      } w-full rounded-lg cursor-pointer border-2 border-[#787f98] border-dashed text-center m-2   flex flex-col`}
    >
      <p>episode {episode}</p>
      <div className="my-3">
        {qualities.map((quality, index) => (
          <AddFileItem key={index} episode={episode} quality={quality} season={selectedSeason}  setSeasonFile={setSeasonFile} seasonFile={seasonFile} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeItem;
