import { Link } from "react-router-dom";
import { trendingItem } from "../../constans";
import { ImFire } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import ExploreItemCard from "./ExploreItemCard";
import { LoadingOutlined } from "@ant-design/icons";

const TopMovie = () => {
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
    <div className="mt-16 max-w-[700px] x:max-w-[55vw] md:self-center  ">
      <div className="flex justify-between mb-1 ">
        <p className="text-[20px] font-semibold mx-3 ">Popular Movies </p>
        <Link to={"/movies"}>
          <p className="text-btn font-semibold text-sm self-center mt-1 ">
            View All
          </p>
        </Link>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 6 },
          570: { slidesPerView: 4, spaceBetween: 10 },
          1527: { slidesPerView: 5, spaceBetween: 9 },
          2027: { slidesPerView: 6, spaceBetween: 9 },
          2827: { slidesPerView: 6, spaceBetween: 9 },
          3500: { slidesPerView: 6, spaceBetween: 9 },
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-color": "#fff",
        }}
        // slidesPerView={3}
        // spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={`relative h-[200px] md:h-[270px] x:h- max-w-[700px] x:max-w-[55vw] flex  `}
      >
        {data?.slice(0, 8)?.map((movie, index) => (
          <SwiperSlide key={index}>
            <ExploreItemCard data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMovie;
