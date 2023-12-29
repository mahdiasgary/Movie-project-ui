import React, { useState } from "react";
import DragDropSeriesFile from "./DragDropSeriesFile";
import { useStateContext } from "../../../../../contextProvider/ContextProvider";
import { TbTrashFilled } from "react-icons/tb";
import { MdChangeCircle } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown, FaRegCircleCheck } from "react-icons/fa6";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AlertModal from "../../../../../common/AlertModal";
import axios from "axios";
const AddFileItem = ({
  quality,
  season,
  episode,
  seasonFile,
  setSeasonFile,
  seriesFilesForEdits,
}) => {
  let seriesFilesForEdit = seriesFilesForEdits.files;
  const { IsDarkMode, setqw } = useStateContext();
  const [editUploadProccess, seteditUploadProccess] = useState(0);

  const [state, setState] = useState({
    alertTitle: "",
    readyForUploadFile: false,
    loading: false,
    file: "",
    newFile: "",
  });
  const [openModal, setOpenModal] = useState();
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const props = { openModal, setOpenModal };

  //   console.log(seriesFilesForEdit);
  const editHandler = () => {
    props.setOpenModal(undefined);
    setState((v) => ({ ...v, loading: true }));
    if (state.alertTitle === "editfile") {
      const formData = new FormData();
      formData.append(
        `Id`,
        seriesFilesForEdit[
          seriesFilesForEdit.findIndex(
            (s) =>
              s.quality == quality &&
              s.episode == episode &&
              s.season == season &&
              !s.isDeleted
          )
        ].id
      );
      // formData.append("Quality", quality);
      // formData.append("File", state.newFile);
      formData.append("Season", season);
      formData.append("Episode", episode);
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
        .post("https://localhost:7175/Admin/Series/EditFile", formData, options)
        .then((r) => {
          if (r.data.isSuccessFull) {
            setqw(Math.random());
          }
          if (!r.data.isSuccessFull) {
            toast.error("Error");
            seteditUploadProccess(0);
            setState({
              alertTitle: "",
              file: "",
              loading: false,
              newFile: "",
              readyForUploadFile: false,
            });
          }
        });
    }
    if (state.alertTitle === "addfile") {
      const formData = new FormData();
      formData.append(`MovieId`, seriesFilesForEdits.id);
      formData.append("Quality", quality);
      formData.append("Season", season);
      formData.append("File", state.newFile);
      formData.append("Episode", episode);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let precentage = Math.floor((loaded * 100) / total);
          seteditUploadProccess(precentage);
        },
      };

      axios
        .post("https://localhost:7175/Admin/Series/AddFile", formData, options)
        .then((r) => {
          //   console.log(r);
          if (r.data.isSuccessFull) {
            setqw(Math.random());
          }
          if (!r.data.isSuccessFull) {
            toast.error("Error");
            seteditUploadProccess(0);
            setState({
              alertTitle: "",
              file: "",
              loading: false,
              newFile: "",
              readyForUploadFile: false,
            });
          }
        });
    }
    if (state.alertTitle === "delete") {
      const formData = new FormData();
      formData.append(
        `Id`,
        seriesFilesForEdit[
          seriesFilesForEdit.findIndex(
            (s) =>
              s.quality == quality &&
              s.episode == episode &&
              s.season == season &&
              !s.isDeleted
          )
        ].id
      );
      formData.append("Quality", quality);
      // formData.append("File", state.file);
      formData.append("IsDeleted", true);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let precentage = Math.floor((loaded * 100) / total);
          seteditUploadProccess(precentage);
        },
      };

      axios
        .post("https://localhost:7175/Admin/Series/EditFile", formData, options)
        .then((r) => {
          console.log(r);
          if (r.data.isSuccessFull) {
            setqw(Math.random());
          }
          if (!r.data.isSuccessFull) {
            toast.error("Error");
            seteditUploadProccess(0);
            setState({
              alertTitle: "",
              file: "",
              loading: false,
              newFile: "",
              readyForUploadFile: false,
            });
          }
        });
    }
  };
  // console.log(
  //   seriesFilesForEdit[
  //     seriesFilesForEdit.findIndex(
  //       (s) =>
  //         s.quality == quality &&
  //         s.episode == episode &&
  //         s.season == season &&
  //         !s.isDeleted
  //     )
  //   ]?.fileName
  // );
  return (
    <div>
      <AlertModal
        loading={state.loading}
        functionHandler={editHandler}
        functionHandler2={setState}
        text={"Are you sure you want to Confirm"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {seriesFilesForEdit.find(
        (s) =>
          s.quality == quality &&
          s.episode == episode &&
          s.season == season &&
          !s.isDeleted
      ) ? (
        <div
          className={`  mx-2 my-1 bg-gray-300 dark:bg-border  rounded-md justify-between`}
        >
          <Accordion open={open === 1} className="">
            <AccordionHeader onClick={() => handleOpen(1)} className="border-0">
              <div className="flex  px-2 w-full self-center justify-between ">
                {/* <span>s</span> */}
                <div className="flex  text-sm ">
                  <div className="bg-btn text-btn  bg-opacity-10 rounded-xl px-3 py-1 flex self-center font-semibold text-sm">
                    <FaRegCircleCheck className="self-center mr-1 " />
                    File Uploaded {}
                  </div>
                  <div className="mx-2 self-center dark:text-gray-400 text-sm">
                    Quality : {quality}
                  </div>
                </div>
                <FaCaretDown
                  className={`${
                    open === 1 && "rotate-180"
                  } duration-200 text-[19px] self-center  dark:text-gray-400`}
                />
              </div>{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className=" w-full cursor-default px-3 ">
                {state.readyForUploadFile ? (
                  <div>
                    {state.loading ? (
                      <div className="bg-gray-300 dark:bg-border">
                        <div class=" px-2  flex justify-between items-center">
                          <div class="flex items-center gap-x-3">
                            <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                              <BiSolidMoviePlay />
                            </span>
                            <div>
                              <p class="text-sm font-medium text-gray-800 dark:text-white">
                                {state.file.name}
                              </p>
                              <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                                {Math.floor(state.file.size / 1000000)} MB
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="flex px-3 items-center gap-x-3 whitespace-nowrap">
                          <div
                            class="flex w-full h-[5px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              class={`flex  flex-col duration justify-center rounded-full overflow-hidden bg-btn text-xs text-white text-center whitespace-nowrap transition duration-700 dark:bg-btn `}
                              style={{
                                width: `${editUploadProccess}% `,
                              }}
                            ></div>
                          </div>
                          <div class="w-6 text-end">
                            <span class="text-sm text-gray-800 dark:text-white">
                              {editUploadProccess}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={` flex     my-1 border-2 border-btn bg-whit text-gray-600 dark:bg-opacity-30 bg-opacity-50 dark:text-gray-400 dark:bg-screenDar px-1 rounded-2xl py-2 justify-between`}
                      >
                        <input
                          onChange={(e) => {
                            e.preventDefault();
                            setState((v) => ({
                              ...v,
                              file: e.target.files[0],
                            }));
                          }}
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
                        <div className="flex justify-end">
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setState((v) => ({
                                  ...v,
                                  readyForUploadFile: false,
                                }));
                              }}
                              className="duration-200 hover:text-white hover:bg-opacity-100 text-red-500 bg-opacity-20 text-[17px] bg-red-500 p-2 rounded-xl"
                            >
                              <RxCross2 />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setState((v) => ({
                                  ...v,
                                  alertTitle: "editfile",
                                }));
                                setOpenModal("pop-up");
                              }}
                              className="duration-200 hover:text-white hover:bg-opacity-100 text-btn bg-opacity-20 text-[20px] bg-btn p-2 rounded-xl"
                            >
                              <IoIosSave />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="flex">
                      <div className="flex  dark:text-gray-200 text-sm">
                        <BiSolidMoviePlay className="self-center pr-1 text-[21px]" />
                        {
                          seriesFilesForEdit[
                            seriesFilesForEdit.findIndex(
                              (s) =>
                                s.quality == quality &&
                                s.episode == episode &&
                                s.season == season &&
                                !s.isDeleted
                            )
                          ].fileName
                        }
                      </div>
                    </div>

                    <div className=" flex dark:text-gray-400 text-sm">
                      uploaded time:{" "}
                      <span className="text-white mr-1">
                        {
                          seriesFilesForEdit[
                            seriesFilesForEdit.findIndex(
                              (s) =>
                                s.quality == quality &&
                                s.episode == episode &&
                                s.season == season &&
                                !s.isDeleted
                            )
                          ].updatedAt?.split("T")[0]
                        }
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <video
                        className="h-full mt-5 w-[90%] mb-4 flex justify-center  rounded-xl"
                        controls
                        preload="metadata"
                      >
                        <source
                          // src="https://docs.material-tailwind.com/demo.mp4"
                          src={`https://localhost:7175/Movies/${
                            seriesFilesForEdit[
                              seriesFilesForEdit.findIndex(
                                (s) =>
                                  s.quality == quality &&
                                  s.episode == episode &&
                                  s.season == season &&
                                  !s.isDeleted
                              )
                            ]?.fileName
                          }`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setState((v) => ({
                              ...v,
                              readyForUploadFile: true,
                            }));
                          }}
                          className={`${
                            state.readyForUploadFile && "hidden"
                          } duration-200 hover:text-white hover:bg-opacity-100 text-btn bg-opacity-20  text-[24px] bg-btn p-2 rounded-2xl`}
                        >
                          <MdChangeCircle />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setState((v) => ({
                              ...v,
                              alertTitle: "delete",
                            }));
                            setOpenModal("pop-up");
                          }}
                          className="duration-200 hover:text-white hover:bg-opacity-100 text-red-500 bg-opacity-20 text-[20px] bg-red-500 p-2 rounded-2xl"
                        >
                          <TbTrashFilled />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      ) : (
        <div>
          {state.loading ? (
            <div className="bg-gray-300 mx-2 my-1 py-2 px-1 rounded-md py-1  dark:bg-border">
              <div class=" px-2  flex justify-between items-center">
                <div class="flex items-center gap-x-3">
                  <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                    <BiSolidMoviePlay />
                  </span>
                  <div>
                    <p class="text-sm font-medium text-gray-800 dark:text-white">
                      {state.newFile.name}
                    </p>
                    <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                      {Math.floor(state.newFile.size / 1000000)} MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex px-4 items-center gap-x-3 whitespace-nowrap">
                <div
                  class="flex w-full h-[5px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class={`flex  flex-col duration justify-center rounded-full overflow-hidden bg-btn text-xs text-white text-center whitespace-nowrap transition duration-700 dark:bg-btn `}
                    style={{
                      width: `${editUploadProccess}% `,
                    }}
                  ></div>
                </div>
                <div class="w-6 text-end">
                  <span class="text-sm text-gray-800 dark:text-white">
                    {editUploadProccess}%
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={` flex    mx-2 my-1 bg-gray-300 dark:bg-border px-1 rounded-md py-1 justify-between`}
            >
              <input
                onChange={(e) =>
                  setState((v) => ({ ...v, newFile: e.target.files[0] }))
                }
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
                } self-center  text-[13px] `}
              >
                {quality}
                {state.newFile && (
                  <div className="flex justify-end">
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setState((v) => ({
                            ...v,
                            readyForUploadFile: false,
                            newFile: "",
                          }));
                        }}
                        className="duration-200 hover:text-white hover:bg-opacity-100 text-red-500 bg-opacity-20 text-[17px] bg-red-500 p-2 rounded-xl"
                      >
                        <RxCross2 />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          setState((v) => ({
                            ...v,
                            alertTitle: "addfile",
                          }));
                          setOpenModal("pop-up");
                        }}
                        className="duration-200 hover:text-white hover:bg-opacity-100 text-btn bg-opacity-20 text-[20px] bg-btn p-2 rounded-xl"
                      >
                        <IoIosSave />
                      </button>
                    </div>
                  </div>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddFileItem;
