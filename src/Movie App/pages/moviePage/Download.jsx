import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { FaCaretDown } from "react-icons/fa";
import { useStateContext } from "../../contextProvider/ContextProvider";

const Download = () => {
  const [active, setActive] = useState(false);
  const { IsDarkMode } = useStateContext();
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderLeft: `4px solid #1e74f1`,
    font: "14px",
    padding: "4px 0",
    backgroundColor: !IsDarkMode ? `rgb(209 213 219)` : "#2f2f3c",
    borderRadius: "12px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  return (
    <div className="mt-10 w-full">
      <fieldset className="border-t w-full dark:border-border">
        <legend className=" px-3  md:pr-2 text-gray-500 dark:text-white">
          Seasen 1
        </legend>

        <div className="flex- flex-col w-full md:mx-4 px-1  mt-3">
          <Accordion className="bg-red-500">
            <AccordionSummary
              expandIcon={
                <FaCaretDown className="text-[19px] dark:text-gray-400" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <ul className="flex ">
                  <li className="dark:text-white text-sm">
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5 dark:text-white text-sm">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex flex-wrap gap-2 ">
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </fieldset>
      <fieldset className="border-t w-full mt-3 dark:border-border">
        <legend className=" px-3  md:pr-2 text-gray-500 dark:text-white">
          Seasen 1
        </legend>

        <div className="flex- flex-col w-full md:mx-4 px-1  mt-3">
          <Accordion className="bg-red-500">
            <AccordionSummary
              expandIcon={
                <FaCaretDown className="text-[19px] dark:text-gray-400" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <ul className="flex ">
                  <li className="dark:text-white text-sm">
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5 dark:text-white text-sm">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex flex-wrap gap-2 ">
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </fieldset>
      <fieldset className="border-t w-full mt-3 dark:border-border">
        <legend className=" px-3  md:pr-2 text-gray-500 dark:text-white">
          Seasen 1
        </legend>

        <div className="flex- flex-col w-full md:mx-4 px-1  mt-3">
          <Accordion className="bg-red-500">
            <AccordionSummary
              expandIcon={
                <FaCaretDown className="text-[19px] dark:text-gray-400" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <ul className="flex ">
                  <li className="dark:text-white text-sm">
                    <span className="text-btn"> Quality:</span> WEB-DL 720p{" "}
                  </li>
                  <li className="mx-5 dark:text-white text-sm">
                    <span className="text-btn ">Size:</span> 1.3GB{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex flex-wrap gap-2 ">
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>{" "}
                  <button className="dark:bg-secondColorDark dark:text-gray-100 bg-white text-sm hover:bg-opacity-10 text-prameryColorDark  hover:bg-screenDark duration-200 px-5 py-[7px] rounded-md">
                    episode <span className="text-btn font-semibold ">1</span>
                  </button>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </fieldset>
    </div>
  );
};

export default Download;
