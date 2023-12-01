import React, { useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";

const AddFileItem = ({
  quality,
  qw,
  setMovieFiles,
  movieFiles,
  loadingButton,
}) => {
  console.log(qw);
  const uploadMovieHandler = (e) => {
    setMovieFiles([...movieFiles, { quality, file: e.target.files[0] }]);
  };

  return (
    <div className="">
      <div className="px-5 pr-8">
        {loadingButton &&
          movieFiles?.map(
            (file, index) =>
              file.quality === quality && (
                <div key={index}>
                  {qw >= (100 * (index + 1)) / movieFiles.length ? (
                    <div>
                      <div class="mb-2 flex justify-between items-center">
                        <div class="flex items-center gap-x-3">
                          <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                            <BiSolidMoviePlay />
                          </span>
                          <div>
                            <p class="text-sm font-medium text-gray-800 dark:text-white">
                              {file.file.name}
                            </p>
                            <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                              {Math.floor(movieFiles[0].file.size / 1000000)} MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div
                          class="flex w-full h-[5px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class={`flex  flex-col duration justify-center rounded-full overflow-hidden bg-btn text-xs text-white text-center whitespace-nowrap transition duration-700 dark:bg-btn w-[${qw}%]`}
                            style={{
                              width: `${
                                qw >= (100 * (index + 1)) / movieFiles.length &&
                                "100"
                              }% `,
                            }}
                          ></div>
                        </div>
                        <div class="w-6 text-end">
                          <span class="text-sm text-gray-800 dark:text-white">
                            {qw >= (100 * (index + 1)) / movieFiles.length &&
                              "100"}
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div class="mb-2 flex justify-between items-center">
                        <div class="flex items-center gap-x-3">
                          <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                            <BiSolidMoviePlay />
                          </span>
                          <div>
                            <p class="text-sm font-medium text-gray-800 dark:text-white">
                              {file.file.name}
                            </p>
                            <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                              {Math.floor(movieFiles[0].file.size / 1000000)} MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div class="demo-container w-full">
                          <div class="progress-bar w-full">
                            <div class="progress-bar-value w-full"></div>
                          </div>
                        </div>
                        <div class="w-6 text-end">
                          <div className="pl-3">
                            {/* <div className="self-center"> */}
                            <svg
                              class="w-4 h-4 mr-3 -ml-1 text-btn animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                              ></circle>
                              <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
          )}
      </div>
      <div
        className={` flex ${
          loadingButton && "hidden"
        }   mx-2 my-1 bg-gray-300 dark:bg-border px-1 rounded-md py-1 justify-between`}
      >
        <input
          onChange={uploadMovieHandler}
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
