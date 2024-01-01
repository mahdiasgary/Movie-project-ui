import { FaImdb } from "react-icons/fa";
import ItemCard from "../../components/explore/ItemCard";
import { MdBookmarkAdded, MdBookmarkBorder } from "react-icons/md";
const SeriesPage = () => {
  // const { data, isFetching, error } = useGetTopSeriesQuery();
  // if (isFetching) {
  //   return (
  //     <div className="flex justify-center mt-10 ">
  //       <div>
  //         <LoadingOutlined style={{ fontSize: 48 }} />
  //       </div>
  //       <p className="text-[26px] self-center mx-1 ">Loading . . . </p>
  //     </div>
  //   );
  // }
  const data = [
    {
      title: "The Usual Suspects",
      bbb: "https://filmkio.io/wp-content/uploads/2023/12/berlin-wallpaper.jpg",
      image:
        "https://filmkio.io/wp-content/uploads/2023/12/berlin-poster-207x310.jpg",
      year: 2023,
      rating: 9.9,
      genre: ["comedy", "action", "love"],
    },
    {
      title: "Thor: Love and Thunder",
      image:
        "https://filmkio.io/wp-content/uploads/2023/12/MV5BOWRiZjYwZjUtYmIwMy00ZDUzLTk2NjktZmJkZjRkNjU0MDE3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX500.jpg",
      year: 2023,
      rating: 7.6,
      genre: ["comedy", "action", "love"],
      bbb: "https://filmkio.io/wp-content/uploads/2022/08/reacher-wallpaper-v4.jpg",
    },
    {
      title: "The Killer",
      image:
        "https://filmkio.io/wp-content/uploads/2023/12/MV5BYmZmMWJiODMtNDcyOC00NDMwLWIwNmQtZGYzYzgwZjJkMTM1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX500.jpg",
      year: 2023,
      rating: 6,
      genre: ["comedy", "action", "love"],
      bbb: "https://filmkio.io/wp-content/uploads/2022/07/what-If-wallpaper.jpg",
    },
    {
      title: "She Came to Me",
      bbb: "https://filmkio.io/wp-content/uploads/2023/12/percy-jackson-and-the-olympians-wallpaper.jpg",
      image:
        "https://filmkio.io/wp-content/uploads/2023/12/percy-jackson-and-the-olympians-poster.jpg",
      year: 2023,
      rating: 7.1,
      genre: ["comedy", "action", "love"],
    },
  ];

  return (
    <div className="w-full min-h-screen pb-56 en">
      <h7 className="text-[22px] font-semibold mx-8 mt-8"> Popular Series</h7>
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mx-3 mt-10 ">
          {/* <div className="w-full px-3 "> */}
          {data?.slice(0, 8)?.map((movie, index) => (
            <div key={index}>
              <div className="relative w-full my-4 sm:hidden  h-[240px]  ">
                <img
                  src={movie.image}
                  className={`w-[130px] z-[3] top-4 absolute right-0 shadow-xl h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}
                  alt=""
                />

                <div className=" relative h-[240px] pr-20 mr-12 rounded-2xl dark:bg-border bg-whit">
                  <div className="bg-btn flex justify-center relative z-[2] text-center text-white  w-[45px] py-2 rounded-tl-2xl rounded-br-2xl ">
                    <MdBookmarkBorder className="text-[22px]" />
                  </div>
                  <div className="flex relative text-white z-[2] h-[200px] flex-col justify-between">
                    <div className="text-sm">
                      <div className="mt-3 ml-3  font-semibold  text-[17px]">
                        The Killer of Flower Moon 2023
                      </div>
                      <div className="text-sm pl-2 mt-2">
                        <p className=" flex text-yellow-500  text-sm ">
                          <FaImdb className="self-center mr-[2px] text-[17px]" /> 8.7
                        </p>
                        <p>time : 258</p>
                        <p>country : U.S.A</p>
                      </div>
                      <div className="h-[42px] mx-3 mt-3 text-gray-300 text-[12px] overflow-clip">
                        d Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Accusamus laboriosam vel aut eum enim nulla
                        tempora provident ducimus iusto maiores, cupiditate
                        natus eos est quas tenetur libero ipsa perspiciatis
                        voluptatibus!
                      </div>
                    </div>
                    <div className="bg-btn mx-8 mb-2 text-center py-2 rounded-lg text-white ">
                      download
                    </div>
                  </div>
                  <div className="absolute  z-[0] inset-0 rounded-2xl   bg-screenDark  overflow-hidden ">
                    <img
                      src={movie.bbb}
                      alt=""
                      className="min-w-[800px] blur-sm opacity-50   "
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex ">
                <ItemCard data={movie} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesPage;
