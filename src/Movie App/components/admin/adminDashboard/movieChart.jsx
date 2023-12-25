import React from "react";
import Chart from "react-apexcharts";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";

const MovieChart = ({ data }) => {
  const queryData = data?.data?.data;

  let state = {
    series: [
      {
        name: "movies",
        // color: "#ffffff",

        // data: data?.data?.charts,
        data: queryData?.movieChart,
      },
      {
        name: "series",
        colors: "#FCCF31",

        // data: data?.data?.charts,
        data: [
          {
            x: "Dec 26 2017",
            y: 10,
          },
          {
            x: "Dec 27 2018",
            y: 18,
          },
          {
            x: "Dec 28 2019",
            y: 13,
          },
          {
            x: "Dec 29 2018",
            y: 18,
          },
          {
            x: "Dec 30 2018",
            y: 18,
          },
          {
            x: "Dec 31 2018",
            y: 18,
          },
          {
            x: "Dec 32 2018",
            y: 18,
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
    },
  };


  return (
    <div class=" w-full min-h-[350px] bg-white dark:bg-opacity-40 shadow-lg rounded-3xl dark:bg-gray-800 p-4 md:p-6">
      <Chart
        class="dark:text-red-500"
        options={state.options}
        series={state.series}
        type="bar"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default MovieChart;

// <div className="flex md:flex-row w-full xl:flex-row lg:hidden xl:flex flex-col gap-4">
//   <div className=" bg-white w-full dark:bg-opacity-70 dark:bg-gray-800  text- p-3 pl-5 rounded-3xl min-w-[270px] flex">
//     <div className="min-w-[90px]">
//       <BiSolidMoviePlay className="text-[39px] text-btn" />
//       <div className="text-[25px] font-extrabold">25</div>
//       <div className="font-semibold">Download Count</div>
//     </div>
//     <div className="w-full flex flex-col justify-center">
//       <Chart
//         // class="w-[150px]"
//         options={spark1.options}
//         series={spark1.series}
//         // type="line"
//         width={"100%"}
//         height={"40%"}
//         // width={"50%"}
//       />
//       <span className="self-center"></span>
//     </div>
//   </div>
//   <div className=" bg-white w-full dark:bg-opacity-70 dark:bg-gray-800  text- p-3 pl-5 rounded-3xl min-w-[270px] flex">
//     <div className="min-w-[90px]">
//       <BiSolidMoviePlay className="text-[39px] text-btn" />
//       <div className="text-[25px] font-extrabold">25</div>
//       <div className="font-semibold">Download Count</div>
//     </div>
//     <div className="w-full  flex flex-col justify-center">
//       <Chart
//         // class="w-[150px]"
//         options={spark1.options}
//         series={spark1.series}
//         // type="line"
//         width={"100%"}
//         height={"40%"}
//         // width={"50%"}
//       />
//       <span className="self-center"></span>
//     </div>
//   </div>
//   {/* <div className=" bg-white  dark:bg-gray-800 dark:bg-opacity-70 text- p-3 pl-5 rounded-3xl min-w-[270px] flex">
//     <div className="min-w-[110px]">
//       <BiSolidMoviePlay className="text-[39px] text-btn" />
//       <div className="text-[25px] font-extrabold">25</div>
//       <div className="font-semibold">Download Count</div>
//     </div>
//     <div className="items-center flex flex-col justify-center">
//       <Chart
//         // class="w-[150px]"
//         options={spark1.options}
//         series={spark1.series}
//         // type="line"
//         // width={"100%"}
//         height={"40%"}
//         // width={"50%"}
//       />
//     </div>
//   </div> */}
// </div>
