import React from "react";
import AddFileItem from "./AddFileItem";
import AddOrEditTrailer from "./AddOrEditTrailer";
import EditFileItem from "./EditItem";
const UplaodBox = ({
  setMovieFiles,
  movieFiles,
  loadingButton,
  qw,
  initialInputs,
  from,
  selectedOptions,
}) => {
  const qualities = [
    "Trailer",
    "WEB-DL 1080p",
    "WEB-DL 720p",
    "WEB-DL 720p x265 10bit",
    "WEB-DL 480p",
  ];
  return (
    <div
      className={`w-full  rounded-lg cursor-pointer border-2 border-[#787f98] border-dashed text-center    flex flex-col`}
    >
      <p className="pt-3">Uplaode Box</p>
      <div className="my-3">
        {qualities.map((quality, index) =>
          from === "add" ? (
            <AddFileItem
              key={index}
              loadingButton={loadingButton}
              qw={qw}
              quality={quality}
              setMovieFiles={setMovieFiles}
              movieFiles={movieFiles}
              initialInputs={initialInputs}
              from={from}
            />
          ) : quality === "Trailer" ? (
            <AddOrEditTrailer
              key={index}
              loadingButton={loadingButton}
              qw={qw}
              quality={quality}
              setMovieFiles={setMovieFiles}
              movieFiles={movieFiles}
              initialInputs={initialInputs}
              from={from}
              selectedOptions={selectedOptions}
            />
          ) : (
            <EditFileItem
              key={index}
              loadingButton={loadingButton}
              qw={qw}
              quality={quality}
              setMovieFiles={setMovieFiles}
              movieFiles={movieFiles}
              initialInputs={initialInputs}
              from={from}
            />
          )
        )}
      </div>
    </div>
  );
};

export default UplaodBox;
