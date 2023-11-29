import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const MultipleSelect = ({ options, handleChange, lable,selectedValue }) => {
  options = options?.data.map((item) => {
    if (lable === "Artist")
      return {
        label: item.name,
        value: item.name,
        id: item.id,
      };
    else
      return {
        label: item.title,
        value: item.title,
        id: item.id,
      };
  });
  const colorStyles = {
    control: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: "zink",
      border: "none",
      border: "none",

      outlineWidth: "0px",

      outline: "none",
    }),
    option: (
      styles,
      { data, isDisabled, isFocused, isSelected, isHovered }
    ) => {
      return {
        ...styles,
        color: data.color,
        backgroundColor: "#1c1d21",
        "&:hover": {
          ...styles,
          backgroundColor: "blue",
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        color: "zink",
        // backgroundOpacity: "10%",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  return (
    <fieldset
      className={`border border-[#787f98]  focus-within:border-btn focus-within:border-2 my-1 px-3 rounded-lg w-full h-[69px]  `}
    >
      <legend className="px-1 border-transparent focus:border-transparent focus:ring-0 text-sm y9:text-[16px] text- text-[17px]">
        {lable}
      </legend>
      <div className="text-btn ">
        <CreatableSelect
          options={options}
          onChange={handleChange}
          isMulti
          // defaultValue={{ label: "Select Dept", value: 0 }}

          // tabSelectsValue='d'
          className="h-12 text-white border border-transparent focus:border-transparent  focus:ring-0"
          styles={colorStyles}
          isValidNewOption={() => false}
        />
      </div>
    </fieldset>
  );
};

export default MultipleSelect;
