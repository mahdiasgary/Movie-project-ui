import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export const IdontKnowName = ({ root, prob }) => {
  //   let root = { path: "/", value: "home" };
  //   let prob = [
  //     { path: "/", value: "title1" },
  //     { path: "/", value: "title2" },
  //     { path: "/", value: "title3" },
  //   ];
  return (
    <div className="flex   ">
      <div className="flex text-start flex-col  mt-10 ">
        <div className=" text-[17px] mx-5  flex ">
          <Link to={root.path} className="text-[#717374] hover:text-btn duration-150 mr-1">
            {root.value}
          </Link>
          {prob.map((item, index) => (
            <div key={index} className="flex">
              <span className="self-center mt-[2px] text-[#717374] mr-1 ">
                <BiChevronsRight />
              </span>
              <Link
                to={item.path}
                className={` self-center cursor-pointer mr-1 ${
                  index + 1 == prob.length ? "text-btn font-" : "text-[#717374]"
                } hover:text-btn duration-150 `}
              >
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
