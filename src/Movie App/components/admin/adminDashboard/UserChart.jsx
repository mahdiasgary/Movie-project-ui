import React from "react";
import { Button, Datepicker, Dropdown } from "flowbite-react";

import Chart from "react-apexcharts";

const UserChart = ({data}) => {
  const queryData =data?.data?.data

  let state = {
    series: [
      {
        // name: 'series1',
        color: "#1e74f1",

        data: queryData?.userChart,
        // data: [
        //   {
        //     x: "2023-10-22",
        //     y: 20,
        //   },
        //   {
        //     x: "2023-10-23",
        //     y: 14,
        //   },
        //   {
        //     x: "2023-10-24",
        //     y: 40,
        //   },
        //   {
        //     x: "2023-10-25",
        //     y: 20,
        //   },
        //   {
        //     x: "2023-10-26",
        //     y: 25,
        //   },
        //   {
        //     x: "2023-10-27",
        //     y: 18,
        //   },
        //   {
        //     x: "2023-10-28",
        //     y: 40,
        //   },
        // ],
      },
    ],
    options: {
      // colors: ["#1e74f1"],

      chart: {
        zoom: {
          enabled: false,
        },
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        // categories: ['21/10/2023']
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  
  return (
    <div class="lg:max-w-[40vw] min-w-[30vw]  bg-white dark:bg-opacity-40 shadow-lg rounded-3xl dark:bg-gray-800 p-4 md:p-6">
      <div class="flex justify-between">
        <div>
          <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            32.4k
          </h5>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Users this week
          </p>
        </div>
        <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          12%
          <svg
            class="w-3 h-3 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div className="dark:text-red-500">
        <div id="area-chart" class="dark:text-red-500">
          <Chart
            class=""
            options={state.options}
            series={state.series}
            type="area"
            width={"100%"}
            height={"150%"}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div class="flex justify-between items-center pt-5">
          <div className=" text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white">
            <Dropdown label="Last 7 days" dismissOnClick={false} inline>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
