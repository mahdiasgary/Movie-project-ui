import React from "react";
import Chart from "react-apexcharts";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";

const MovieChart = ({data}) => {
  const queryData =data?.data?.data

  let state = {
    series: [
      {
        name: "movies",
        // color: "#ffffff",

        // data: data?.data?.charts,
        data:queryData?.movieChart
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
          columnWidth: "35%",
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
  var spark1 = {
    series: [
      {
        data: [25, 66, 41, 59, 25, 44, 40],
      },
    ],
    options: {
      chart: {
        id: "spark1",
        group: "sparks",
        //   type: 'line',
        // height: 80,
        width: 60,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      // grid: {
      //   padding: {
      //     top: 20,
      //     bottom: 10,
      //     left: 110,
      //   },
      // },
      colors: ["#1e74f1"],
    },
  };
  
  return (
    <div>
      <Chart
        class="dark:text-red-500"
        options={state.options}
        series={state.series}
        type="bar"
        // width={"100%"}
        height={"81%"}
      />
      <div className="flex gap-4">
        <div className=" bg-white dark:bg-opacity-70 dark:bg-gray-800  text- p-3 pl-5 rounded-3xl min-w-[270px] flex">
          <div className="min-w-[110px]">
          <BiSolidMoviePlay className="text-[39px] text-btn" />
            <div className="text-[25px] font-extrabold">25</div>
            <div className="font-semibold">Download Count</div>
          </div>
          <div className="items-center flex flex-col justify-center">
            <Chart
              // class="w-[150px]"
              options={spark1.options}
              series={spark1.series}
              // type="line"
              // width={"100%"}
              height={"40%"}
              // width={"50%"}
            />
          </div>
        </div>
        <div className=" bg-white  dark:bg-gray-800 dark:bg-opacity-70 text- p-3 pl-5 rounded-3xl min-w-[270px] flex">
          <div className="min-w-[110px]">
            <BiSolidMoviePlay className="text-[39px] text-btn" />
            <div className="text-[25px] font-extrabold">25</div>
            <div className="font-semibold">Download Count</div>
          </div>
          <div className="items-center flex flex-col justify-center">
            <Chart
              // class="w-[150px]"
              options={spark1.options}
              series={spark1.series}
              // type="line"
              // width={"100%"}
              height={"40%"}
              // width={"50%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieChart;
