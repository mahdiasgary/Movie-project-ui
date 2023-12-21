import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import AdminListItemCard from "./AdminListItemCard";
import LoadingAdminListItem from "../LoadingAdminListItem";
import { Toast, Tooltip } from "flowbite-react";

const AdminListItems = ({ dataQuery, thAndTdAdminList, from, editHandler }) => {
  const { data, isFetching, isLoading, error } = dataQuery;

  const [sort, setsort] = useState(["ID", false, false]);

  const sortBy = (key) => {
    if (key[0] === "NAME" || key[0] === "TITLE")
      return function sort(a, b) {
        let title1 = a[key[0].toLowerCase()].toLowerCase();
        let title2 = b[key[0].toLowerCase()].toLowerCase();
        if (key[2] ? title2 < title1 : title2 > title1) {
          return -1;
        }
      };
    if (key[0] === "ID") {
      return function sort(a, b) {
        let value1 = a[key[0].toLowerCase()];
        let value2 = b[key[0].toLowerCase()];
        if (key[1]) return value2 - value1;
        else return value1 - value2;
      };
    }
  };
  const [selectedID, setSelectedID] = useState("");

  return (
    <div className="rounded-2xl">
      <table className="   table-auto w-full  ">
        <thead>
          <tr className="bg-gray-500 dark:bg-[#1c1d21] rounded-2xl bg-opacity0 h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
            {thAndTdAdminList[0].map((th, index) => (
              <th
                key={index}
                className={`px-3 py-2 ${
                  th === "ID" || th === "ACTION"
                    ? "w-[10%]"
                    : th === "NAME" ||
                      th === "BIRTH DATE" ||
                      th === "CREATED DATE" ||
                      th === "RELEASED DATE"
                    ? "w-[20%]  "
                    : "w-[10%}"
                }  dark:text-[#6d7077]  text-gray-300 `}
              >
                <div
                  onClick={() =>
                    (th === "ID" ||
                      th === "NAME" ||
                      th === "TITLE" ||
                      th === "TIME" ||
                      th === "BIRTH DATE") &&
                    setsort([
                      th,
                      th === "ID" || th === "TIME" || th === "BIRTH DATE"
                        ? !sort[1]
                        : false,
                      th === "NAME" || th === "TITLE" ? !sort[2] : false,
                      // th === "TIME" ? !sort[3] : false,
                      // th==='BIRTHDATE' ? !sort[4] : false
                    ])
                  }
                  className="flex justify-center cursor-pointer "
                >
                  <Tooltip content={th}>
                    <div className={` ${th === sort[0] && "text-white"} ml-1`}>
                      {th}
                    </div>
                  </Tooltip>
                  {(th === "ID" ||
                    th === "NAME" ||
                    th === "TITLE" ||
                    th === "TIME" ||
                    th === "BIRTH DATE") && (
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === th ? "text-white" : "text-gray-300"
                      }
                      ${th === "TIME" && sort[1] && "rotate-180"}
                      ${th === "NAME" && sort[2] && "rotate-180"}
                      ${th === "ID" && sort[1] && "rotate-180"}
                      ${th === "TITLE" && sort[2] && "rotate-180"}
                      duration-200 `}
                    >
                      <BsArrowDown />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="px-5 rounded-3xl">
          {data &&
            [...data?.data]
              ?.sort(sortBy(sort))
              .map((tdItem) => (
                <AdminListItemCard
                  item={tdItem}
                  key={tdItem.id}
                  td={thAndTdAdminList[1]}
                  setSelectedID={setSelectedID}
                  selectedID={selectedID}
                  from={from}
                  editHandler={editHandler}
                />
              ))}
        </tbody>
      </table>
      {data?.data.length === 0 && (
        <div className="text-center py-5">No items were found :(</div>
      )}
      {(isFetching || isLoading || error) && <LoadingAdminListItem />}
    </div>
  );
};

export default AdminListItems;
