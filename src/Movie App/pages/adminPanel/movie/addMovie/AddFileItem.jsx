import styled from "@emotion/styled";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import { Typography } from "antd";
// import { Accordion } from "flowbite-react";
import React, { useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa6";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import MuiAccordion from "@mui/material/Accordion";
import { MdChangeCircle } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbTrashFilled } from "react-icons/tb";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { IoIosSave } from "react-icons/io";
import AlertModal from "../../../../common/AlertModal";
import axios from "axios";

const AddFileItem = ({
  quality,
  qw,
  setMovieFiles,
  movieFiles,
  loadingButton,
  initialInputs,
  from,
}) => {
  const uploadMovieHandler = (e) => {
    setMovieFiles([...movieFiles, { quality, file: e.target.files[0] }]);
  };
  const { IsDarkMode, setqw } = useStateContext();
  const [editUploadProccess, seteditUploadProccess] = useState(0);

  const [state, setState] = useState({
    alertTitle: "",
    readyForUploadFile: false,
    loading: false,
    file: "",
    newFile: "",
  });
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const editHandler = () => {
    props.setOpenModal(undefined);
    setState((v) => ({ ...v, loading: true }));
    if (state.alertTitle === "editfile") {
      const formData = new FormData();
      formData.append(
        `Id`,
        initialInputs.files[
          initialInputs.files.findIndex((m) => m.quality === quality)
        ].id
      );
      formData.append("Quality", quality);
      formData.append("File", state.file);
      formData.append("IsDeleted", false);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let precentage = Math.floor((loaded * 100) / total);
          seteditUploadProccess(precentage);
        },
      };

      axios
        .post("https://localhost:7175/Admin/Movie/EditFile", formData, options)
        .then((r) => {
          if (r.data.isSuccessFull) {
            setqw(Math.random());
          }
        });
    }
    if (state.alertTitle === "addfile") {
      // console.log(2);
      const formData = new FormData();
      formData.append(`MovieId`, initialInputs.id);
      formData.append("Quality", quality);
      formData.append("File", state.newFile);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let precentage = Math.floor((loaded * 100) / total);
          seteditUploadProccess(precentage);
        },
      };

      axios
        .post("https://localhost:7175/Admin/Movie/AddFile", formData, options)
        .then((r) => {
          console.log(r);
          if (r.data.isSuccessFull) {
            setqw(Math.random());
          }
        });
    }
  };
  // console.log(movieFiles);
  return (
    <div className="">
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
        <p
          className={`${
            quality === "Trailer" && "text-btn font-semibold"
          } self-center md:text-[16px] text-[13px] `}
        >
          {quality}
        </p>
      </div>
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
    </div>
  );
};

export default AddFileItem;
