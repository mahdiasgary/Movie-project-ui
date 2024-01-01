import { Spin } from "antd";
import { Link } from "react-router-dom";
import a from "../../assets/8.gif";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const ExploreItemCard = ({ data }) => {
  let qw =
    "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis quam tempore, est facere nostrum non expedita ipsam consequatur architecto atque quis culpa vel assumenda excepturi inventore laborum quisquam eveniet!";

  return (
    <Link>
      <div className={`flex flex-col text-textDark `}>
        <div className="relative group">
          <img
            src={data.image}
            alt=""
            className={`w-[130px] h-[191px] md:w-[170px] md:h-[250px] rounded-xl`}
          />
          <div className=" z-20 hidden md:flex absolute md:w-[170px] md:h-[250px] inset-0  rounded-xl origin-bottom opacity-0 group-hover:opacity-100  group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
            <div className=" flex flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className=" px-5 pt-5 font-bold">Year : {data.year}</p>
                    <p className=" px-5 pt-1 font-semibold">
                      {/* {data?.title.runningTimeInMinutes || "--"} minutes */}
                    </p>
                  </div>
                  {/* <div className="bg-btn hover:bg-blue-800 px-2 duration-200 rounded-tr-xl flex justify-center rounded-bl-xl ">
                    <MdOutlinePlaylistAdd className="text-[28px]  self-center  " />
                  </div> */}
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
              <div className="text-center  pb-6  w-[170px] px-3 ">
                <button className=" bg-btn text-sm py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                  Watch Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreItemCard;
