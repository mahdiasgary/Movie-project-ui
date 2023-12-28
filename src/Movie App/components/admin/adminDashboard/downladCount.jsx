import React from "react";
import Chart from "react-apexcharts";

const DownloadCount = ({ data }) => {
  const queryData = data?.data?.data;

  let state = {
    series: [
      {
        name: "movies",
        // color: "#ffffff",

        // data: data?.data?.charts,
        // data: queryData?.movieChart,
        data: [
            {
              x: "Dec 26 2017",
              y: 28,
            },
            {
              x: "Dec 27 2018",
              y: 30,
            },
            {
              x: "Dec 28 2019",
              y: 5,
            },
            {
              x: "Dec 29 2018",
              y: 18,
            },
            {
              x: "Dec 30 2018",
              y: 20,
            },
            {
              x: "Dec 31 2018",
              y: 18,
            },
            {
              x: "Dec 32 2018",
              y: 8,
            },
          ],
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
      // //   series: [
      // //     {
      // //       name: "High - 2013",
      // //       data: [28, 29, 33, 36, 32, 32, 33],
      // //     },
      // //     {
      // //       name: "Low - 2013",
      // //       data: [12, 11, 14, 18, 17, 13, 13],
      //     },
      //   ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      //   colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },

      // grid: {
      //   borderColor: "#e7e7e7",
      //   row: {
      //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //     opacity: 0.5,
      //   },
      // },
      markers: {
        size: 1,
      },
      //   xaxis: {
      //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      //     title: {
      //       text: "Month",
      //     },
      //   },
      yaxis: {
        title: {
          text: "downLoad count",
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  return (
    <div className="flex justify-center">
      <div id="area-chart" className="h-[300px] w-full">
        <Chart
          class=""
          options={state.options}
          series={state.series}
          type="line"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default DownloadCount;
