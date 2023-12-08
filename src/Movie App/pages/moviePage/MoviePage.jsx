import { Link, withRouter } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BiLike, BiDislike } from "react-icons/bi";
import { AiOutlineHeart, AiFillLike, AiFillDislike } from "react-icons/ai";
import Trailer from "./Trailer";
import Comments from "./Comments";
import Download from "./Download";
import Details from "./Details";
import { MdBookmarkAdded, MdBookmarkBorder } from "react-icons/md";

const poi = ["Details", "Download", "Trailer", "Comments"];
const MoviePage = ({ history }) => {
  const [query, setQuery] = useState("Details");
  //  const movieData = history.location.state?.data;
  // const { data, fetching, error } = useGetMovieImgQuery({
  //   movieId: movieData?.id.match(/\d+/g)[0],
  // });
  // const data = [];
  const [windowSize, setWindowSize] = useState(window.innerWidth - 290 + "px");
  const [likedd, setlikedd] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth - 290 + "px");
      console.log(windowSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth - 290 + "px");
      console.log(windowSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const data = [
    {
      title: "Thor: Love and Thunder",
      image:
        "https://mobomovies1.space/images/movie/2022/tt10648342/thumbnail/thor-love-and-thunder-2022.jpg",
      year: 2023,
      rating: 7.6,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "The Killer",
      image:
        "https://mobomovies1.space/images/movie/2023/tt1136617/thumbnail/the-killer-2023.jpg",
      year: 2023,
      rating: 6,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "She Came to Me",
      image:
        "https://mobomovies1.space/images/movie/2023/tt6689014/thumbnail/she-came-to-me-2023.jpg",
      year: 2023,
      rating: 7.1,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "The Usual Suspects",
      image:
        "https://mobomovies1.space/images/movie/1995/tt0114814/thumbnail/the-usual-suspects-1995.jpg",
      year: 2023,
      rating: 9.9,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "Thor: Love and Thunder",
      image:
        "https://mobomovies1.space/images/movie/2022/tt10648342/thumbnail/thor-love-and-thunder-2022.jpg",
      year: 2023,
      rating: 8,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "The Killer",
      image:
        "https://mobomovies1.space/images/movie/2023/tt1136617/thumbnail/the-killer-2023.jpg",
      year: 2023,
      rating: 8.7,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "She Came to Me",
      image:
        "https://mobomovies1.space/images/movie/2023/tt6689014/thumbnail/she-came-to-me-2023.jpg",
      year: 2023,
      rating: 3.8,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "The Usual Suspects",
      image:
        "https://mobomovies1.space/images/movie/1995/tt0114814/thumbnail/the-usual-suspects-1995.jpg",
      year: 2023,
      rating: 9.3,
      genre: ["comedy", "action", "love"],
    },
  ];
  const genres = ["sfsfgg", "srs", "oduw", "wjnkkkkd"];
  let backg =
    "https://filmkio30.pw/wp-content/uploads/2023/11/squid-game-the-challenge-wallpaper.jpg";
  let cover =
    "https://filmkio30.pw/wp-content/uploads/2023/12/killers-of-the-flower-moon-poster-207x310.jpg";
  return (
    <div>
      {/* <div className="dark:bg-[#101018] h-screen fixed w-full "></div> */}
      <div className="w-full z-0 relative group top-[-84px]  bg-screenLight dark:bg-[#101018] h-[2000px]  dark:text-screenLight">
        <div className=" absolute z-20 w-full mt-28 px-3 y9:px-7 sm:px-10 md:px-5 lg:px-2 xl:px-10 2xl:px-20  ">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-auto flex justify-center md:justify-start ">
                <div className="flex-col">
                  <img
                    src={cover}
                    alt={"k"}
                    className="min-w-[180px] shadow-2xl max-h-[265px] y9:min-w-[240px] y9:max-h-[352px] lg:min-w-[200px] lg:max-h-[351px]  xl:min-w-[240px] xl:max-h-[352px] self-center  rounded-lg  "
                  />
                  <div className="flex xl:hidden justify-center mt-1 z-10">
                    <button className="w-[44px] h-[44px]  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300 border border-btn   text-btn flex justify-center rounded-2xl text-[25px] ">
                      <BsPlay className="self-center" />
                    </button>
                    <p className="self-center text-gray-200 mx-2 ">
                      View Trailar{" "}
                    </p>
                  </div>
                  {/* <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                    {likedd ? (
                      <AiFillLike className="self-center" />
                    ) : (
                      <BiLike className="self-center" />
                    )}
                  </div>
                  <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                    {likedd ? (
                      <AiFillDislike className="self-center" />
                    ) : (
                      <BiDislike className="self-center" />
                    )}
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col w-full mr-8">
                <div className=" flex flex-col  mx-2 xl:mx-5   md:flex-row md:justify-between ">
                  <div>
                    <div>
                      <p className="text-[25px] y9:text-[28px] text-screenLight font-bold text-center md:text-start  ">
                        The Usual Suspects
                      </p>
                      <div className="flex justify-center md:justify-start text-textPlight ">
                        <p>1995</p>
                        <RxDotFilled className="self-center" />
                        <p>movie</p>
                        <RxDotFilled className="self-center" />
                        <p>85 min</p>
                      </div>
                      <div className="flex md:hidden mt-3 justify-center gap-2">
                        <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  ">
                          <div>
                            <p className="text-[29px] text-btn inline">8.5</p>
                            /10
                          </div>
                          <p className="text-sm text-gray-500 "> 338k votes </p>
                        </div>
                        {/* <div className=" text-[28px] cursor-pointer text-green-700 md:border-0 border border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark ">
                          {likedd ? (
                            <AiFillLike className="self-center" />
                          ) : (
                            <BiLike className="self-center" />
                          )}
                        </div>
                        <div className=" text-[28px] cursor-pointer text-red-700 border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark">
                          {likedd ? (
                            <AiFillDislike className="self-center" />
                          ) : (
                            <BiDislike className="self-center" />
                          )}
                        </div> */}
                        <div
                          className=" text-[28px] cursor-pointer  border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                          onClick={() => setlikedd(!likedd)}
                        >
                          {likedd ? (
                            <MdBookmarkAdded className="self-center text-btn" />
                          ) : (
                            <MdBookmarkAdded className="self-center text-btn" />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start mt-5">
                        {genres.slice(0, 3).map((genre, index) => (
                          <Link
                            key={index}
                            to={{
                              pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                              state: { genre },
                            }}
                          >
                            <p className="mr-2 backdrop-blur-sm md:text-white bg-gray-200  dark:bg-opacity-10 bg-opacity-70 md:bg-opacity-20 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark  hover:text-screenLight duration-300 ">
                              {genre}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <p className="my-3 text-sm md:text-gray-200 lg:text-[16px] ">
                        Cast :
                        <p className="inline text-[16px] ml-16   text-gray-600  md:text-white">
                          Bryan Cranston , Aaron Paul , Anna
                        </p>
                      </p>
                      <p className="my-3 text-sm md:text-gray-200 lg:text-[16px]">
                        Country :
                        <p className="inline text-[16px] ml-9 text-gray-600 md:text-white">
                          U.S.A , Germany
                        </p>
                      </p>
                      <p className="my-3 text-sm md:text-gray-200 lg:text-[16px]">
                        Language :
                        <p className="inline text-[16px] ml-6  text-gray-600 md:text-white">
                          English
                        </p>
                      </p>
                    </div>
                    <div className="mt-2  md:text-gray-200">
                      The sole survivor of a pier shoot-out tells the story of
                      how a notorious criminal influenced the events that began
                      with five criminals meeting in a seemingly random police
                      lineup.
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between mt-4 ">
                    <div className="hidden md:flex md:flex-col md:justify-between self-end ">
                      <div>
                        <div className="flex gap-2 justify-center "></div>
                        <div className="flex flex-col xl:flex-row gap-2 mt-2 justify-end ">
                          <div className="border md:border-0 border-border px-1 rounded-lg w-[100px] h-[76px] self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80  hover:bg-screenDark  ">
                            <div>
                              <p className="text-[29px] text-btn inline">8.9</p>
                              /10
                            </div>
                            <p className="text-sm text-textPDark ">
                              338k votes
                            </p>
                          </div>
                          <div
                            title="add to favrite"
                            className=" text-[28px] cursor-pointer   border md:border-0 border-border w-[60px] h-[76px] rounded-lg text-center flex justify-center self-center backdrop-blur-sm  bg-screenDark bg-opacity-50  hover:bg-screenDark"
                            onClick={() => setlikedd(!likedd)}
                          >
                            {likedd ? (
                              <MdBookmarkAdded className="self-center text-[29px] text-btn " />
                            ) : (
                              <MdBookmarkBorder className="self-center text-[29px] text-btn" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="self-center mt-32">
                        <div className="text-btn xl:flex hidden  font-semibold border md:border-0 border-border px-6 py-4 rounded-lg  self-center text-center  backdrop-blur-sm  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300    ">
                          <button className="w-[36px] h-[36px]  bg-screenDark bg-opacity-80 hover:bg-screenDark duration-300 border border-btn   text-btn flex justify-center rounded-xl text-[25px] ">
                            <BsPlay className="self-center pl-1 " />
                          </button>
                          <p className="self-center mx-2 ">View Trailar </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:md:mt-28 md:mt-[170px] text-black dark:text-screenLight">
            <div className="w-full ">
              <div className=" sticky z-[50] top-0 ">
                <ul className="flex  justify-between pb-2 overflow-x-auto scrollbar:!w-1.5 scrollbar:!h-1.5 md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]">
                  {poi.map((item, index) => (
                    <Link
                      to={{
                        pathname: "/movies/1",
                        search: item.toLocaleLowerCase(),
                      }}
                      key={index}
                    >
                      <li
                        className={`px-4 py-2   ${
                          query === item
                            ? "bg-[length:100%_2px] font-semibold text-btn"
                            : "bg-[length:0%_2px]"
                        }  origin-right bg-left-bottom bg-gradient-to-r from-btn to-btn  bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
                        onClick={() => setQuery(item)}
                      >
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className=" z-0 flex justify-center w-full">
                {/* <Download/> */}
                {query === "Details" && <Details />}
                {query === "Download" && <Download />}
                {query === "Comments" && <Comments />}
                {query === "Trailer" && <Trailer />}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative  z-0 group ">
          <div className="w-full absolute gradient-10 h-[50px] z-20 rotate-180 top-0 " />
          <div className="z-0 bg-screenDark   flex justify-center overflow-hidden max-h-[680px]  ">
            <img
              src={backg}
              alt=""
              className={`opacity-30    relative min-w-[1050px] md:min-w-[950px] lg:min-w-[820px] xl:min-w-[700px]  w-full xl:min-h-[625px] `}
            />
          </div>
          <div className="w-full dark:hidden absolute bottom-0">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  fill="#f9f9f9"
                  // fill="#0f0f0f"
                  fill-rule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="w-full hidden dark:flex relative gradient-10   dark:h-[150px] dark:-top-[150px] -top-[100px] h-[100px] " />
        </div>
        <div className="relative -top-28 hidden md:flex">
          {/* <MoviePageDtailes/> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MoviePage);
