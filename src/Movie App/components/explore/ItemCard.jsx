import a from "../../assets/luther-the-fallen-sun-2023-sm.webp";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const ItemCard = ({ data }) => {
  let qw =
    "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis quam tempore, est facere nostrum non expedita ipsam consequatur architecto atque quis culpa vel assumenda excepturi inventore laborum quisquam eveniet!";

  return (
    <Link to={{ pathname: `/movies/${data.title}`, state: { data } }}>
      <div className={`flex flex-col w-[150px]  y9:w-[182px]  `}>
        <div className="relative group text-textDark">
          <img
            src={data.image}
            alt=""
            className={`w-[140px] shadow-xl h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}
          />
          <div className="absolute hidden y9:flex z-20  inset-0  rounded-xl origin-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-300 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className=" px-5 pt-5 font-bold">Year : {data.year}</p>
                    <p className=" px-5 pt-1 font-semibold">
                      {/* {data?.title.runningTimeInMinutes || "--"} minutes */}
                    </p>
                  </div>
                  <div className="bg-btn hover:bg-blue-800 px-2 duration-200 rounded-tr-xl flex justify-center rounded-bl-xl ">
                    <MdOutlinePlaylistAdd className="text-[28px]  self-center  " />
                  </div>
                </div>

                <div className="flex flex-wrap mt-2 mx-2 text-sm font-semibold">
                  {data.genre.map((genre, index) => (
                    <Link
                      key={index}
                      to={{
                        pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                        state: { genre },
                      }}
                    >
                      <p className="mr-2 backdrop-blur-sm  bg-gray-200 bg-opacity-10 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark ">
                        {genre}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="max-h-[40px] px-3 text-sm overflow-hidden    ">
                <p>{qw + "..."}</p>
              </div>
              <div className="text-center  pb-6  w-[180px] px-3 ">
                <button className=" bg-btn text-sm py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                  Watch Movie
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[14px] mt-1  text-btn flex justify-center ">
          {[...Array(Math.floor(data.rating / 2))].map((x) => (
            <FaStar className="self-center mx-1" />
          ))}
          {parseInt(data.rating / 2) !== data.rating / 2 && (
            <FaStarHalfAlt className="self-center mx-1" />
          )}
        </div>
        <div className=" w-[140px] text-center y9:w-[180px]  flex self-center  justify-center text-[17px] ">
          <p>
            {data.title} {data.year}
          </p>
        </div>
        {/* <div className="text-[14px] text-btn flex justify-center ">
        {[...Array(Math.floor(data.rating / 2))].map((x) => (
          <FaStar className="self-center mx-1" />
        ))}
        {parseInt(data.rating / 2) !== data.rating / 2 && (
          <FaStarHalfAlt className="self-center mx-1" />
        )}
      </div> */}
      </div>
    </Link>
  );
};

export default ItemCard;
