import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

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
    [...options]?.filter(
      (o) =>
        o["title"].includes(inputs.search) &&
        !selectedOptions?.find((q) => q["title"] === o["title"])
    );
  let titlee = "career";
  return (
    <div
      ref={wrapperRef}
      className={`relative border  flex border-[#787f98]  focus-within:border-btn focus-within:border-2 my-3  rounded-lg w-full h-[69px] `}
    >
      <fieldset
        onClick={() => cahngeInput((v) => ({ ...v, showModal: true }))}
        className={`${
          title === "Imdb"
            ? "text-yellow-400"
            : " text-screenDark dark:text-screenLight"
        }  flex justify-between  w-full  my-1 px-3 rounded-lg  min-h-[69px] `}
      >
        <span
          // ref={ref}
          className={`px-1 bg-screenLight dark:bg-screenDark bg-opacity-90 absolute -top-3  text-sm y9:text-[16px] text-btn  text-[17px]`}
        >
          {title}
        </span>
        {selectedOptions?.length === 0 && (
          <div className="self-center opacity-60 px-3">Select...</div>
        )}
        <div className="flex  self-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-2 py-3">
            {selectedOptions?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-300 dark:bg-border  rounded-md px-2  flex h-[30px]"
              >
                <p className="self-center text-sm">{item["title"]}</p>
                <div className="self-center pl-2">
                  <RxCross2
                    onClick={() =>
                      setSelectedOptions((v) => ({
                        ...v,
                        career: v["career"]?.filter(
                          (o) => o["title"] !== item["title"]
                        ),
                      }))
                    }
                    className="text-sm cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex ">
          <RxCross2
            onClick={() =>
              setSelectedOptions((v) => ({
                ...v,
                career: [],
              }))
            }
            className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer"
          />
          <p className="text-[30px] self-center font-semibol opacity-20">|</p>
          <FaCaretDown className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer" />
        </div>
      </fieldset>
      {inputs.showModal && (
        <div className="bg-white top-[70px] max-h-[270px] pb-3 px-1  dark:bg-border  rounded-xl absolute w-full z-[20]">
          <input
            autoFocus
            onChange={(e) =>
              cahngeInput((v) => ({ ...v, search: e.target.value }))
            }
            placeholder="search ..."
            type="text"
            className="w-full duration-200 py-2 my-2  dark:bg-transparent  px-5"
          />
          <div className="max-h-[200px]  scrollbar-thin dark:scrollbar-track-gray-600 scrollbar-track-gray-300  scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md  overflow-y-auto">
            {filteredOption.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  title === "Career" &&
                    setSelectedOptions((v) => ({
                      ...v,
                      career: [
                        ...v[titlee],
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
          {filteredOption.length === 0 && (
            <div className="rounded-lg text-center cursor-pointer  duration-200 py-2 my-2  px-5">
              no Options{" "}
            </div>
          )}
        </div>
      )}
      {/* {error && touched && <div className="text-red-600 text-sm ">{error}</div>} */}
    </div>
  );
};

export default SelectMulti;
