import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ItemCard from "../../components/explore/ItemCard";

const MoviesPage = () => {
  // const { data, isFetching, error } = useGetTopMoviesQuery();
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
  return (
    <div className="flex flex-col min-h-screen pb-28 w-full self-center">
      <h7 className="text-[22px] font-semibold mx-8 mt-8"> Popular Movies</h7>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-2 y9:gap-5 mx-1 md:mx-8 mt-10 self-center ">
          {data?.slice(0, 8)?.map((movie, index) => (
            <ItemCard data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
