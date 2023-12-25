import React, { useCallback, useState } from "react";
import UsersItem from "./UsersItem";
import { BsArrowDown } from "react-icons/bs";
import {
  useGetUsersListInAdminPanelQuery,
  useRemoveUserMutation,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";
import Pagenation from "../../../common/Pagenation";
import { Dropdown, Tooltip } from "flowbite-react";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
import toast from "react-hot-toast";
const Users = ({ history }) => {
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  const [FilterType, setFilterType] = useState("");
  const { data, isFetching, isLoading, error } =
    useGetUsersListInAdminPanelQuery(
      { searchkey: search, page: correctPage, FilterType },
      { refetchOnMountOrArgChange: true }
    );
  const [removeUser] = useRemoveUserMutation();
  const [sort, setsort] = useState(["id", false, false]);
  const [searc, setSearc] = useState(false);

  const removeUserHandler = ({ id, username }) => {
    removeUser({ id })
      .unwrap()
      .then((r) => {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: `${username} has been deleted.`,
        //   icone: "success",
        //   confirmButtonColor: "#3085d6",
        // });
        if (r.isSuccessFull) {
          toast.success(`${username} has been deleted.`);
        }
        console.log(r);
      })
      .then((error) => {
        console.log(error);
      });
    // forceUpdate()
    setSearc(!searc);
    // history.push("/admin/users");
  };

  // sort by value
  const sortBy = (key) => {
    if (key[0] === "username")
      return function sort(a, b) {
        let title1 = a[key[0]].toLowerCase();
        let title2 = b[key[0]].toLowerCase();
        if (key[2] ? title2 < title1 : title2 > title1) {
          return -1;
        }
      };
    if (key[0] === "createdDate")
      return function sort(a, b) {
        console.log(a[key[0]].split(" ")[0]);
        let title1 = a[key[0]].split(" ")[0];
        let title2 = b[key[0]].split(" ")[0];
        if (key[1] ? title2 < title1 : title2 > title1) {
          return -1;
        }
      };
    else
      return function sort(a, b) {
        let value1 = a[key[0]];
        let value2 = b[key[0]];
        if (key[1]) return value2 - value1;
        else value1 - value2;
      };
  };

  return (
    <div className=" w-full">
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/users", value: "Users" }]}
      />
      <div className="flex justify-center mt-10 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">Users List</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] placeholder:text-sm rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      <div className="pb-36 flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
          <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
            <table className="rounded-xl   table-auto w-full border dark:border-0 ">
              <thead>
                <tr className="bg-gray-500 dark:bg-[#1c1d21]   h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                  <th className="px-3 py-2  w-[5%] cursor-pointer dark:text-[#6d7077] text-gray-300 ">
                    <div
                      onClick={() => setsort(["id", !sort[1], false])}
                      className="flex justify-center"
                    >
                      <Tooltip content={"sort by ID"}>
                        <div
                          className={`ml-1 text-sm ${
                            sort[0] === "id" && "text-white"
                          } `}
                        >
                          ID
                        </div>
                      </Tooltip>
                      <div
                        className={`self-center  cursor-pointer ${
                          sort[0] === "id" ? "text-white" : "text-[#6d7077]"
                        } ${sort[1] && "rotate-180"} duration-200 `}
                      >
                        <BsArrowDown />
                      </div>
                    </div>
                  </th>

                  {/* <th className="flex justify-center py-2 text-sm text-center w-[10%]  ">
                    <Tooltip content={"profile"}>PROFILE</Tooltip>
                  </th> */}
                  <th className=" py-2 w-[10%]  ">
                    <div className="flex justify-center cursor-pointer w-full ">
                      <Tooltip content={"profile"} className="">
                        <div className="">PROFILE</div>
                      </Tooltip>
                    </div>
                  </th>
                  <th className=" py-2 w-[20%]  ">
                    <div
                      onClick={() => {
                        setsort(["username", false, !sort[2]]);
                      }}
                      className="flex justify-center cursor-pointer w-full "
                    >
                      <Tooltip content={"sort by Name"} className="">
                        <div className="">NAME</div>
                      </Tooltip>
                      <div
                        className={`self-center  cursor-pointer ${
                          sort[0] === "username"
                            ? "text-white"
                            : "text-[#6d7077]"
                        } ${sort[2] && "rotate-180"} duration-200 `}
                      >
                        <BsArrowDown />
                      </div>
                    </div>
                  </th>
                  <th className=" py-2 w-[20%]  ">
                    <div className="flex justify-center  w-full ">
                      <Tooltip content={"email"} className="">
                        <div className="">EMAIL</div>
                      </Tooltip>
                    </div>
                  </th>
                  <th className="w-[10%] px-5">
                    <div className="flex justify-center">
                      {/* <div className="">ROLE</div> */}
                      <Tooltip content={"sort by Role"}>
                        <Dropdown label="ROLE" inline className="px-0 mx-0">
                          <Dropdown.Item
                            onClick={(e) => setFilterType("RoleAdmin")}
                          >
                            Admin
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => setFilterType("RoleUser")}
                          >
                            User
                          </Dropdown.Item>
                        </Dropdown>
                      </Tooltip>
                    </div>
                  </th>
                  <th className="w-[10%] px-5">
                    <div className="flex justify-center">
                      <Tooltip content={"sort by Status"}>
                        <Dropdown label="STATUS" inline>
                          <Dropdown.Item
                            onClick={(e) => setFilterType("IsActived")}
                          >
                            Active
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => setFilterType("IsNotActived")}
                          >
                            Inactive
                          </Dropdown.Item>
                        </Dropdown>
                      </Tooltip>
                    </div>
                  </th>
                  <th className=" py-2 w-[20%]  ">
                    <div
                      onClick={() => {
                        setsort(["createdDate", !sort[1], false]);
                      }}
                      className="flex justify-center cursor-pointer w-full "
                    >
                      <Tooltip content={"sort by Date"} className="">
                        <div
                          className={`ml-1 text-sm ${
                            sort[0] === "createdDate" && "text-white"
                          } `}
                        >
                          DATE
                        </div>
                      </Tooltip>
                      <div
                        className={`self-center  cursor-pointer ${
                          sort[0] === "createdDate"
                            ? "text-white"
                            : "text-[#6d7077]"
                        } ${sort[1] && "rotate-180"} duration-200 `}
                      >
                        <BsArrowDown />
                      </div>
                    </div>
                  </th>
                  <th className="w-[10%] px-3">ACTION</th>
                </tr>
              </thead>

              <tbody className="px-5 rounded-3xl">
                {data &&
                  [...data?.data].sort(sortBy(sort)).map((user) => (
                    <UsersItem
                      user={user}
                      key={user.id}
                      removeUserHandler={removeUserHandler}
                      // forceUpdate={forceUpdate}
                    />
                  ))}
              </tbody>
            </table>

            {(isFetching || isLoading || error) && <LoadingAdminListItem />}
          </div>
          <Pagenation
            item={"user"}
            correctPage={correctPage}
            totalCount={data?.totalCount}
            setCorrectPage={setCorrectPage}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Users);
