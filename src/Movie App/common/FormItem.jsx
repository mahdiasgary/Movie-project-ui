import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import SelectMulti from "./SelectMulti";

const FormItem = ({
  Formik,
  title,
  error,
  touched,
  styles, 
  type,
  children,
}) => {
  const [inputs, cahngeInput] = useState({
    showModal: false,
    search: "",
  });
  const [options, setOptions] = useState([
    { id: 1, value: "jwev" },
    { id: 1, value: "jwev" },
    { id: 1, value: "jwev" },
  ]);


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

  let filteredOption = [...options].filter((o) =>
    o.value.includes(inputs.search)
  );
  return (
    <div className={` ${styles}`}>
      <fieldset
        className={`${
          title === "Imdb" ? "text-yellow-400" : " text-screenDark dark:text-screenLight"
        } border focus-within:border-btn focus-within:border-2 border-[#787f98]  my-1 px-3 rounded-lg  h-[69px] `}
      >
        <legend className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}>
          {title}
        </legend>

        <input
          type={type}
          className="fa rounded-sm h-10 border-0  border-transparent focus:border-transparent focus:ring-0  w-full outline-white bg-transparent  text-lg px-2 "
          name="text"
          {...Formik.getFieldProps(
            title === "Created Date" || title === "Released Date"
              ? title.replace(/\s/g, "")
              : title.toLowerCase()
          )}
        />
      </fieldset>
      {error && touched && <div className="text-red-600 text-sm ">{error}</div>}
    </div>
    // <div ref={wrapperRef} className={`relative ${styles}`}>
    //   {/* <div >0000</div> */}
    //   {/* <button
    //     onClick={(e) => {
    //       e.preventDefault();
    //       cahngeInput((v) => ({ ...v, showModal: !v.showModal }));
    //     }}
    //   >
    //     5555
    //   </button> */}
    //   <fieldset
    //     // ref={wrapperRef}
    //     onClick={() => cahngeInput((v) => ({ ...v, showModal: true }))}
    //     className={`${
    //       title === "Imdb"
    //         ? "text-yellow-400"
    //         : " text-screenDark dark:text-screenLight"
    //     } border flex justify-between focus-within:border-btn focus-within:border-2 border-[#787f98]  my-1 px-3 rounded-lg  min-h-[69px] `}
    //   >
    //     <legend
    //       // ref={ref}
    //       className={`px-1  text-sm y9:text-[16px] text-btn  text-[17px]`}
    //     >
    //       TEST
    //     </legend>
    //     {Selectedoptions.length === 0 && (
    //       <div className="self-center opacity-60 px-3">Select...</div>
    //     )}
    //     <div className="flex  self-center flex-wrap gap-2">
    //       <div className="flex flex-wrap gap-2 py-3">
    //         {Selectedoptions.map((item, index) => (
    //           <div
    //             key={index}
    //             className="bg-gray-300 dark:bg-border  rounded-md px-2  flex h-[30px]"
    //           >
    //             <p className="self-center text-sm">{item["value"]}</p>
    //             <div className="self-center pl-2">
    //               <RxCross2
    //                 onClick={() =>
    //                   setSelectedOptions(
    //                     Selectedoptions.filter((o) => o.value !== item["value"])
    //                   )
    //                 }
    //                 className="text-sm cursor-pointer"
    //               />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="flex ">
    //       <RxCross2
    //         onClick={() => setSelectedOptions([])}
    //         className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer"
    //       />
    //       <p className="text-[30px] self-center font-semibol opacity-20">|</p>
    //       <FaCaretDown className="self-center  hover:opacity-100 text-[20px] opacity-50 cursor-pointer" />
    //     </div>
    //   </fieldset>
    //   {inputs.showModal && (
    //     <div className="bg-white  dark:bg-border  rounded-xl absolute w-full z-[20]">
    //       <input
    //       autoFocus
    //         onChange={(e) =>
    //           cahngeInput((v) => ({ ...v, search: e.target.value }))
    //         }
    //         placeholder="search ..."
    //         type="text"
    //         className="w-full duration-200 py-2 my-2  dark:bg-transparent  px-5"
    //       />
    //       {filteredOption.map((item, index) => (
    //         <div
    //           key={index}
    //           onClick={(e) => {
    //             e.preventDefault();
    //             setSelectedOptions([
    //               ...Selectedoptions,
    //               { id: 8, value: item.value },
    //             ]);
    //           }}
    //           className="rounded-lg cursor-pointer hover:text-black dark:hover:text-white dark:hover:bg-gray-600 hover:bg-gray-100 duration-200 py-2 my-2  px-5"
    //         >
    //           {item["value"]}
    //         </div>
    //       ))}
    //       {filteredOption.length === 0 && (
    //         <div className="rounded-lg text-center cursor-pointer   hover:bg-gray-100 duration-200 py-2 my-2  px-5">
    //           no Options{" "}
    //         </div>
    //       )}
    //     </div>
    //   )}
    //   {error && touched && <div className="text-red-600 text-sm ">{error}</div>}
    // </div>
  );
};

export default FormItem;
