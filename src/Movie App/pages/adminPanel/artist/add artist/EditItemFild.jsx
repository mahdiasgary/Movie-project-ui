import React from "react";
import { AiFillEdit } from "react-icons/ai";

const EditItemField = ({ changeInput, inputs, item }) => {
  // console.log(inputs);
  return (
    <div className="w-full">
      <div className={` w-full`}>
        <fieldset
          className={`border focus-within:border-btn focus-within:border-2 border-[#787f98]  my-1 px-3 rounded-lg  h-[69px] `}
        >
          <legend
            className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
          >
            {item}
          </legend>

          <input
            // type={type}
            name="text"
            onChange={(e) => {
              changeInput((v) => ({ ...v, [item]: e.target.value }));
            }}
            value={inputs[item]}
            className="fa rounded-sm h-10 border-0  border-transparent focus:border-transparent focus:ring-0  w-full outline-white bg-transparent  text-lg px-2 "
          />
        </fieldset>
      </div>
    </div>
  );
};

export default EditItemField;
