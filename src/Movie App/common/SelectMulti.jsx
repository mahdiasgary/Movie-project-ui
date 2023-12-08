import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMinus } from "react-icons/hi2";

const SelectMulti = ({
  styles,
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [inputs, cahngeInput] = useState({
    showModal: false,
    search: "",
  });
  const wrapperRef = useRef(null);
  useEffect(() => {
    const useOutsideAlerter = (ref) => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          cahngeInput((v) => ({ ...v, showModal: false }));
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    };
    useOutsideAlerter(wrapperRef);
  }, [wrapperRef]);

  let filteredOption =
    options &&
    [...options].filter(
      (o) =>
        o["title"]?.includes(inputs.search) &&
        !selectedOptions?.find((q) => q["title"] === o["title"])
    );
  let titlee = "career";
  return (
    // <div
    //   ref={wrapperRef}
    //   className={`relative border  flex border-[#787f98]  focus-within:border-btn focus-within:border-2 my-3  rounded-lg w-full min-h-[69px] `}
    // >
    <fieldset
      ref={wrapperRef}
      onClick={() => cahngeInput((v) => ({ ...v, showModal: true }))}
      className={`${
        title === "Imdb"
          ? "text-yellow-400"
          : " text-screenDark dark:text-screenLight"
      } relative flex-col justify-center border border-[#787f98] w-full   my-1 px-3 rounded-lg  min-h-[69px] `}
    >
      <legend className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}>
        {title}
      </legend>
      <div className="flex justify-between mt-1  w-full">
        {selectedOptions?.length === 0 && (
          <div className="self-center opacity-60 px-3">Select...</div>
        )}
        <div className="flex  self-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-2 py-3">
            {selectedOptions?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-300  dark:bg-border  rounded-md px-2  flex h-[30px]"
              >
                <p className="self-center text-sm">{item["title"]}</p>
                <div className="self-center pl-2">
                  <RxCross2
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedOptions((v) => ({
                        ...v,
                        [title.toLowerCase()]: selectedOptions?.filter(
                          (o) => o["title"] !== item["title"]
                        ),
                      }));
                    }}
                    className="text-sm cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex self-center">
          <RxCross2
            onClick={(e) => {
              e.preventDefault();
              setSelectedOptions((v) => ({
                ...v,
                [title.toLowerCase()]: [],
              }));
            }}
            className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer"
          />
          <p className="text-[30px] self-center rotate-90 font-semibol opacity-20">
            <HiOutlineMinus />
          </p>
          <FaCaretDown className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer" />
        </div>
      </div>
      {inputs.showModal && (
        <div
          className={`${
            filteredOption?.length === 0
              ? "-bottom-[125px]"
              : filteredOption?.length === 1
              ? "-bottom-[128px]"
              : filteredOption?.length === 3
              ? "-bottom-[222px]"
              : filteredOption?.length === 2
              ? "-bottom-[175px]"
              : "-bottom-[285px]"
          } bg-white right-0 absolute shadow-xl  max-h-[270px] pb-3 px-1  dark:bg-border  rounded-xl  w-full z-[20]`}
        >
          <input
            autoFocus
            onChange={(e) =>
              cahngeInput((v) => ({ ...v, search: e.target.value }))
            }
            placeholder="search ..."
            type="text"
            className="w-full duration-200 py-2 my-2  dark:bg-transparent  px-5"
          />
          <div className="max-h-[200px]  scrollbar-thin bottom-0 dark:scrollbar-track-gray-600 scrollbar-track-gray-300  scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md  overflow-y-auto">
            {filteredOption?.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOptions((v) => ({
                    ...v,
                    [title.toLowerCase()]: [
                      ...selectedOptions,
                      { id: item["id"], title: item["title"] },
                    ],
                  }));
                }}
                className="rounded-lg cursor-pointer hover:text-black dark:hover:text-white dark:hover:bg-gray-600 hover:bg-gray-100 duration-200 py-2 my-2  px-5"
              >
                {item["title"]}
              </div>
            ))}
          </div>
          {filteredOption?.length === 0 && (
            <div className="rounded-lg text-center cursor-pointer  duration-200 py-2 my-2  px-5">
              no Options{" "}
            </div>
          )}
        </div>
      )}
    </fieldset>
  );
};

export default SelectMulti;

{
  /* {error && touched && <div className="text-red-600 text-sm ">{error}</div>} */
}
// </div>
