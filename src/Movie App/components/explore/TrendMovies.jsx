import { trendingItem } from "../../constans";
import { ImFire } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import TrendMoviesItem from "./TrendMoviesItem";
import { useEffect, useState } from "react";

const TrendMovies = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <div className="en mr-1">
      <p className="text-[23px] font-semibold mb-2  flex ">
        Trending Movie
        <span className="self-center text-[20px] mx-1 ">
          <ImFire />
        </span>
      </p>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-color": "#fff",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`relative h-[250px] md:h-[350px] x:h-[50vh] max-w-[700px] x:max-w-[58vw] flex  `}
      >
        {trendingItem.map((item, index) => (
          <SwiperSlide key={index}>
            <TrendMoviesItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendMovies;
