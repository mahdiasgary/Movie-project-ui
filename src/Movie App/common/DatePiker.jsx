import { Datepicker } from "flowbite-react";
import React, { useState } from "react";

const DatePiker = ({ datePiker,title }) => {
  // const [date, setDate] = useState();
  // console.log(datePiker?.date);

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
  // console.log(Formik.values);
  return (
    <div className={`w-full `}>
      <fieldset
        className={`${"flex flex-col justify-center text-screenDark dark:text-screenLight"} border focus-within:border-btn focus-within:border-2 border-[#787f98]  my-1 px-3 rounded-lg  h-[69px] `}
      >
        <legend className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}>
          {title}
        </legend>
        <Datepicker
        onSelectedDateChanged={(date) =>datePiker.setDate({ ...datePiker.date, [title.replace(/\s/g, "")]: new Date(date).toLocaleDateString('zh-Hans-CN') })}
          class="border-0  pl-10 bg-transparent"
          formNoValidate={"r"}
          theme={theme}
          value={datePiker?.date[title.replace(/\s/g, "")]}
          placeholder="yyyy/mm/dd"
        />
      </fieldset>
    </div>
  );
};

export default DatePiker;
