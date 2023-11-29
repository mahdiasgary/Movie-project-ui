import React, { useEffect, useState } from "react";
import DatePicker from "tailwind-datepicker-react";
import DatePiker from "../DatePiker";
import { Button, Datepicker, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AlertModal from "../AlertModal";

const EditItem1 = ({ td, item, setSelectedID, editHandler }) => {
  let lastTdIndex = td.length - 1;
  const editItems = ["title", "image"];
  const [isChanged, setIsChanged] = useState(false);
  const [file, setFile] = useState(undefined);
  const [input, setInputs] = useState({ title: item["title"], imgae: "" });
  useEffect(() => {
    setIsChanged(true);
  }, [input]);
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  let theme = {
    root: {
      base: "relative pb-1 ",
      icon: "text-[30px]",
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner:
          "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
      },
      header: {
        base: "",
        title:
          "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        selectors: {
          base: "flex justify-between mb-2",
          button: {
            base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
            prev: "",
            next: "",
            view: "",
          },
        },
      },
      view: {
        base: "p-1 ",
      },
      footer: {
        base: "flex mt-2 space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
          today:
            "bg-btn text-white hover:bg-cyan-800 dark:btn dark:hover:bg-btn",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "grid grid-cols-7 mb-1",
          title:
            "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
            selected: "bg-btn text-white hover:btn",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-btn text-white hover:btn",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
            selected: "bg-btn text-white hover:btn",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
            selected: "bg-btn text-white hover:btn",
            disabled: "text-gray-500",
          },
        },
      },
    },
  };
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [loading, setLoading] = useState(false);

  const uploadHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const handler = () => {
    editHandler(item["id"], input.title, file ? file : item["image"]);
    // setSelectedID('')
  };
  // console.log(item);
  return (
    <tr className=" py-10 my-5 rounded-xl hover:text-screenLight dark:text-[#d1d1d3] group    ">
      <AlertModal
        loading={loading}
        functionHandler={handler}
        text={"Are you sure you want to edit this genre"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {td.map((td, index) => (
        <td key={index} className="relative my-5 py-3">
          <label
            htmlFor="id"
            className={`${
              td !== "id" && "opacity-0"
            } dark:bg-[#1c1d21] bg-white font-semibold dark:font-normal py-0 absolute mx-4 px-1 -top-0  z-[2] text-btn  rounded-md`}
          >
            edit{" "}
          </label>
          <fieldset
            id={td}
            className={`${
              td === "id"
                ? "text-sm text-btn border-l-2  justify-center  rounded-l-xl  font-semibold"
                : td === "action"
                ? "border-r-2  rounded-r-xl justify-end  "
                : td === "name" ||
                  td === "title" ||
                  td === "birthDate" ||
                  td === "createdDate" ||
                  td === "releasedDate"
                ? "min-w-[169px]  justify-center "
                : ""
            } ${index === 0 && "group-hover:rounded-l-xl "} 
        ${
          index === lastTdIndex && "group-hover:rounded-r-xl"
        }  border-2 border-btn border-x-0 flex justify-center group-hover:text-screen Lightself-center bg-btn bg-opacity-5  px-2 z-[1]  duration-300 h-[100px] my-1  `}
          >
            <div className="self-center flex justify-center  text-center">
              {td === "image" ? (
                <div className="flex justify-center gap-2 w-[130px]">
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      className="w-[40px] h-[40px] self-center rounded-[30%] "
                    />
                  ) : (
                    <img
                      src={"https://localhost:7175/images/" + item[td]}
                      alt={item[td]}
                      className="w-[40px] h-[40px] self-center rounded-[30%] "
                    />
                  )}
                  <input
                    onChange={uploadHandler}
                    type="file"
                    className="text-sm text-grey-500 file:bg-white
            file:mr-5 file:py-2  self-center file:font-semibold
            file:rounded-lg file:border-0 h-[38px]
            file:text-[12px] dark:hover:file:bg-blue-500 file:duration-200
            dark:file:bg-blue-50 file:text-blue-700 
            hover:file:cursor-pointer hover:file:bg-screenDark
            hover:file:text-screenLight 
          "
                  />
                </div>
              ) : td === "birthDate" ||
                td === "createdDate" ||
                td === "releasedDate" ? (
                // item[td].split(" ")[0]
                // 'f'
                <div className={` `}>
                  <div
                    className={`${"flex flex-col  justify-center dark:text-white text-screenDark  bg-border  bg-opacity-40"}   focus-within:border-btn focus-within:border-2 border-[#787f98]   h-[40px] flex flex-col justify-center px-3 rounded-lg  `}
                  >
                    <Datepicker
                      //   onSelectedDateChanged={(date) =>
                      //     datePiker.setDate({
                      //       ...datePiker.date,
                      //       [title.replace(/\s/g, "")]: new Date(
                      //         date
                      //       ).toLocaleDateString("zh-Hans-CN"),
                      //     })
                      //   }
                      class="border-0  pl-10  bg-transparent"
                      formNoValidate={"r"}
                      theme={theme}
                      value={item[td].split(" ")[0]}
                      placeholder="yyyy/mm/dd"
                    />
                  </div>
                </div>
              ) : td === "action" ? (
                <div className="flex justify- self-end mr-2 gap-3 text-[19px] py-[2px]">
                  <span
                    onClick={() => setSelectedID("")}
                    className="cursor-pointer text-sm self-center hover:bg-gray-600 bg-gray-300 py-[10px] text-white dark:bg-gray-600 dark:hover:bg-slate-700 duration-200 px-3 rounded-lg hover:bg-opacity-40 "
                  >
                    cancel
                  </span>
                  <button
                    disabled={
                      item["title"] !== input.title || file ? false : true
                    }
                    onClick={() => props.setOpenModal("pop-up")}
                    className={`text-base ${
                      item["title"] !== input.title || file ? 'hover:bg-blue-900 bg-btn' : 'cursor-not-allowed bg-gray-700 opacity-80'
                    } text-white  py-2 px-6  duration-200 rounded-lg  text-[20px] `}
                  >
                    edit
                  </button>
                </div>
              ) : td === "id" ? (
                item[td]
              ) : (
                <input
                  onChange={(e) => handleChange(e)}
                  value={input.title}
                  type="text"
                  name="title"
                  className="dark:bg-border  bg-opacity-40  focus-within:border-btn focus-within:border-2 h-[40px] flex flex-col justify-center rounded-lg px-2 dark:text-white text-screenDark"
                />
              )}
            </div>
          </fieldset>
        </td>
      ))}
    </tr>
  );
};

export default EditItem1;
