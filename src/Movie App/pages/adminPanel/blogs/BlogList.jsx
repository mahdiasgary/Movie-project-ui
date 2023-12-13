import React, { useCallback, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import BlogListItem from "./BlogListItem";
import { withRouter } from "react-router-dom";
import Pagenation from "../../../common/Pagenation";
import { Dropdown, Tooltip } from "flowbite-react";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
import { useGetBlogListInAdminPanelQuery } from "../../../redux/services/movieDatabase";

const BlogList = ({ history }) => {
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  const [FilterType, setFilterType] = useState("sort by");
  const { data, isFetching, isLoading, error } =
    useGetBlogListInAdminPanelQuery(
      {
        searchkey: search,
        page: correctPage,
        FilterType: FilterType === "sort by" ? "" : FilterType,
      },
      { refetchOnMountOrArgChange: true }
    );
  console.log(data);
  return (
    <div className="min-h-screen pb-20 w-full">
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/bloglist", value: "Blogs" }]}
      />
      <div className="flex justify-center mt-10 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">Blogs</div>
          <div className="md:flex-row-reverse flex flex-col gap-2 text-sm ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] placeholder:text-sm rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
            <div className="  flex justify-end">
              <div className="bg-white self-center dark:bg-border px-3 py-2 rounded-lg ">
                <Dropdown className="text-sm" label={FilterType} inline>
                  <Dropdown.Item
                    onClick={(e) => {
                      setFilterType("ApprovedComments");
                    }}
                    className="text-sm"
                  >
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setFilterType("RejectedComments");
                    }}
                    className="text-sm"
                  >
                    Rejected
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setFilterType("PendedComments");
                    }}
                    className="text-sm"
                  >
                    Pended
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setFilterType("CreatedDateAsc");
                    }}
                    className="text-sm"
                  >
                    Newest
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      setFilterType("CreatedDateDesc");
                    }}
                    className="text-sm"
                  >
                    Oldest
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data?.data.map((blog, index) => (
        <BlogListItem comment={blog} key={index} />
      ))}
      {(data?.data.length === 0 || !data?.data) && (
        <div className="text-center mt-10 ">Not Found Blog :(</div>
      )}
      <div className="flex justify-center">
        <div className="self-center min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <Pagenation
            item={"Blog"}
            correctPage={correctPage}
            totalCount={data?.totalCount}
            setCorrectPage={setCorrectPage}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogList);

// <div className="pb-36 flex justify-center w-full">
//         <div className="dark:bg-[#1c1d21] bg-white rounded-2xl  ">
//           <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
//             <table className="rounded-xl   table-auto w-full border dark:border-0 ">
//               <thead>
//                 <tr className="bg-gray-500 dark:bg-[#1c1d21]   h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
//                   <th className="px-3 py-2  w-[5%] cursor-pointer dark:text-[#6d7077] text-gray-300 ">
//                     <div
//                       onClick={() => setsort(["id", !sort[1], false])}
//                       className="flex justify-center"
//                     >
//                       <Tooltip content={"sort by ID"}>
//                         <div
//                           className={`ml-1 text-sm ${
//                             sort[0] === "id" && "text-white"
//                           } `}
//                         >
//                           ID
//                         </div>
//                       </Tooltip>
//                       <div
//                         className={`self-center  cursor-pointer ${
//                           sort[0] === "id" ? "text-white" : "text-[#6d7077]"
//                         } ${sort[1] && "rotate-180"} duration-200 `}
//                       >
//                         <BsArrowDown />
//                       </div>
//                     </div>
//                   </th>
//                   <th className=" py-2 w-[20%]  ">
//                     <div className="flex justify-center  w-full ">
//                       <Tooltip content={"text"} className="">
//                         <div className="">COMMENT</div>
//                       </Tooltip>
//                     </div>
//                   </th>
//                   {/* <th className="px-3 py-2 text-sm  w-[10%]  ">
//                     <Tooltip content={"profile"}>PROFILE</Tooltip>
//                   </th> */}
//                   <th className=" py-2 w-[10%]  ">
//                     <div className="flex justify-center cursor-pointer w-full ">
//                       <Tooltip content={"sort by Name"} className="">
//                         <div className="">USER</div>
//                       </Tooltip>
//                       <div
//                         className={`self-center  cursor-pointer ${
//                           sort[0] === "username"
//                             ? "text-white"
//                             : "text-[#6d7077]"
//                         } ${sort[2] && "rotate-180"} duration-200 `}
//                       >
//                         <BsArrowDown />
//                       </div>
//                     </div>
//                   </th>
//                   <th className=" py-2 w-[10%]  ">
//                     <div className="flex text-center justify-center cursor-pointer w-full ">
//                       <Tooltip content={"sort by Name"} className="">
//                         <div className="text-center">movie </div>
//                       </Tooltip>
//                     </div>
//                   </th>

//                   <th className="w-[10%] px-5">
//                     <div className="flex justify-center">
//                       {/* <div className="">ROLE</div> */}
//                       <Dropdown label="isDeleted" inline className="px-0 mx-0">
//                         <Dropdown.Item
//                           onClick={(e) => setFilterType("RoleAdmin")}
//                         >
//                           Admin
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={(e) => setFilterType("RoleUser")}
//                         >
//                           User
//                         </Dropdown.Item>
//                       </Dropdown>
//                     </div>
//                   </th>
//                   <th className="w-[10%] px-5">
//                     <div className="flex justify-center">
//                       <Dropdown label="STATUS" inline>
//                         <Dropdown.Item
//                           onClick={(e) => setFilterType("IsActived")}
//                         >
//                           Active
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={(e) => setFilterType("IsNotActived")}
//                         >
//                           Inactive
//                         </Dropdown.Item>
//                       </Dropdown>
//                     </div>
//                   </th>
//                   <th className=" py-2 w-[10%]  ">
//                     <div
//                       onClick={() => {
//                         setsort(["createdDate", !sort[1], false]);
//                       }}
//                       className="flex justify-center cursor-pointer w-full "
//                     >
//                       <Tooltip content={"sort by Date"} className="">
//                         <div
//                           className={`ml-1 text-sm ${
//                             sort[0] === "createdDate" && "text-white"
//                           } `}
//                         >
//                           DATE
//                         </div>
//                       </Tooltip>
//                       <div
//                         className={`self-center  cursor-pointer ${
//                           sort[0] === "createdDate"
//                             ? "text-white"
//                             : "text-[#6d7077]"
//                         } ${sort[1] && "rotate-180"} duration-200 `}
//                       >
//                         <BsArrowDown />
//                       </div>
//                     </div>
//                   </th>
//                   <th className="w-[10%] px-3">ACTION</th>
//                 </tr>
//               </thead>

//               <tbody className="px-5 rounded-3xl">
//                 {data &&
//                   [...data?.data].sort(sortBy(sort)).map((user) => (
//                     <BlogListItem
//                       user={user}
//                       key={user.id}
//                       // removeUserHandler={removeUserHandler}
//                       // forceUpdate={forceUpdate}
//                     />
//                   ))}
//               </tbody>
//             </table>

//             {(isFetching || isLoading || error) && <LoadingAdminListItem />}
//           </div>
//           <Pagenation
//             item={"user"}
//             correctPage={correctPage}
//             totalCount={data?.totalCount}
//             setCorrectPage={setCorrectPage}
//           />
//         </div>
//       </div>
