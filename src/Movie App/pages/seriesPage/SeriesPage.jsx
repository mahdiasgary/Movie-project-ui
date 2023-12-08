import ItemCard from "../../components/explore/ItemCard";
import { LoadingOutlined } from "@ant-design/icons";
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
  return (
    <div className="w-full">
      <h7 className="text-[22px] font-semibold mx-8 mt-8"> Popular Series</h7>
      <div className="w-full">
        {/* <div className="flex flex-wrap justify-center gap-3 md:gap-5 mx-8 mt-10 "> */}
        <div className="w-full ">
          {data?.slice(0, 8)?.map((movie, index) => (
            // <ItemCard data={movie}/>
            <div className="relative px-3m my-4   h-[240px]  ">
              <img
                src={movie.image}
                className={`w-[130px] top-4 absolute right-0 shadow-xl h-[205px] y9:w-[182px] y9:h-[268px] rounded-xl`}
                alt=""
              />
              <div className=" h-[240px] pr-16 mr-12 rounded-2xl dark:bg-border bg-white">
                <div className="bg-btn text-center text-white  w-[45px] py-2 rounded-tl-2xl rounded-br-2xl ">
                  +
                </div>
                <div className="flex h-[200px] flex-col justify-between">
                  <div className="text-sm">
                    <div className="mt-3 ml-3  font-semibold  text-[17px]">
                      The Killer of Flower Moon 2023
                    </div>
                    <div className="text-sm pl-2 mt-1">
                      <p>time : 258</p>
                      <p>country : U.S.A</p>
                    </div>
                    <div className="h-[45px] text-btn text-[12px] overflow-clip">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusamus laboriosam vel aut eum enim nulla tempora
                      provident ducimus iusto maiores, cupiditate natus eos est
                      quas tenetur libero ipsa perspiciatis voluptatibus!
                    </div>
                  </div>
                  <div className="bg-btn mx-4 mb-2 text-center py-2 rounded-lg text-white ">
                    download
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesPage;
