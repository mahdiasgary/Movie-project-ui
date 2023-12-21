import avatar from "../assets/avatar.png";
import { TbBrandBlogger } from "react-icons/tb";
import { RiPlayList2Fill } from "react-icons/ri";

import {
  AiOutlineHeart,
  MdOutlineExplore,
  BiGift,
  IoNewspaperOutline,
  GiCeremonialMask,
  MdMonitor,
  BiCameraMovie,
  AiOutlineSchedule,
  FaListAlt,
  MdMenu,
  RiSlideshow3Line,
  FiUsers,
  BiComment,
  FiFilm,
  FaTheaterMasks,
  RiHome2Line,
  RiMovie2Line,
  CgAddR,
  FaRegListAlt,
  MdAddBox,
  ImEarth,
  BiDna,
  IoLanguage,
} from "../common/icons";
import { FaBloggerB } from "react-icons/fa";

export const adminArtistListTh = [
  "ID",
  "IMAGE",
  "NAME",
  "BIRTH DATE",
  "CREATED DATE",
  "ACTION",
];
export const adminArtistListTd = [
  "id",
  "image",
  "name",
  "birthDate",
  "createdAt",
  "action",
];
export const adminMoviesListTh = [
  "ID",
  "COVER",
  "TITLE",
  "CREATED DATE",
  "TIME",
  "RELEASED DATE",
  "ACTION",
];
export const adminMoviesListTd = [
  "id",
  "image",
  "title",
  "createdAt",
  "time",
  "releasedDate",
  "action",
];
export const adminNormalListTd = ["id", "title", "createdAt", "action"];
export const adminNormalListTh = ["ID", "TITLE", "CREATED DATE", "ACTION"];
export const adminGenreListTd = ["id", "image", "title", "createdAt", "action"];
export const adminGenreListTh = [
  "ID",
  "IMAGE",
  "TITLE",
  "CREATED DATE",
  "ACTION",
];

export const sidbarItem = [
  { id: 1, title: "Explore", icon: <MdOutlineExplore /> },
  { id: 2, title: "Movies", icon: <BiCameraMovie /> },
  { id: 3, title: "Series", icon: <MdMonitor /> },
  { id: 4, title: "Blog", icon: <TbBrandBlogger /> },
  { id: 5, title: "Genres", icon: <BiGift /> },
  { id: 6, title: "Watch list", icon: <RiPlayList2Fill /> },
  { title: "Coming Soon", icon: <AiOutlineSchedule /> },
];
export const adminSidbarItem = [
  [{ id: 1, title: "Dashboard", icon: <RiHome2Line /> }],
  [{ id: 5, title: "Users", icon: <FiUsers /> }],
  [{ id: 10, title: "Comments", icon: <BiComment /> }],

  [
    { id: 9, title: "Artists", icon: <FaTheaterMasks /> },
    [
      {
        id: 9,
        title: "Add New Artist",
        main: "addnewartist",
        parent: "Artists",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 9,
        title: "Artists List",
        main: "artistslist",
        parent: "Artists",

        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 2, title: "Movies", icon: <RiMovie2Line /> },
    [
      {
        id: 2,
        title: "Add New Movie",
        main: "addnewmovie",
        parent: "Movies",

        icon1: <CgAddR />,
        icon2: <MdAddBox className="text-[22px]" />,
      },
      {
        id: 2,
        title: "Movies List",
        main: "movieslist",
        parent: "Movies",

        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 3, title: "Series", icon: <RiSlideshow3Line /> },
    [
      {
        id: 3,
        title: "Add New Series",
        main: "addnewseries",
        parent: "Series",

        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 3,
        title: "Series List",
        main: "serieslist",
        parent: "Series",

        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 4, title: "Genre", icon: <FiFilm /> },
    [
      {
        id: 4,
        title: "Add New Genre",
        main: "addnewgenre",
        parent: "Genre",

        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 4,
        title: "Genres List",
        main: "genreslist",
        parent: "Genre",

        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 6, title: "Profession", icon: <BiDna /> },
    [
      {
        id: 6,
        title: "Add New Profession",
        main: "addnewprofession",
        parent: "Profession",

        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 6,
        title: "Profession List",
        main: "professionlist",
        parent: "Profession",

        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 7, title: "Languages", icon: <IoLanguage /> },
    [
      {
        id: 7,
        title: "Add New Language",
        parent: "Languages",
        main: "addnewlanguage",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 7,
        title: "Languages List",
        parent: "Languages",
        main: "languageslist",
        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    { id: 8, title: "Countries", icon: <ImEarth /> },
    [
      {
        id: 8,
        title: "Add New Country",
        parent: "Countries",
        main: "addnewcountry",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 8,
        title: "Countries List",
        parent: "Countries",
        main: "countrieslist",
        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],

  [
    { id: 11, title: "Blogs", icon: <FaBloggerB /> },
    [
      {
        id: 11,
        title: "Add New Blog",
        parent: "Blogs",
        main: "addnewblog",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 11,
        title: "Blog List",
        parent: "Blogs",
        main: "bloglist",
        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
];
import { MdLogin } from "react-icons/md";
import { MdExplore } from "react-icons/md";
// import { IoTvSharp } from "react-icons/lia";
import { PiMonitorPlayBold } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";

export const footerMenu = [
  { title: "Menu", icon: <MdMenu />, iconP: <MdMenu /> },
  { title: "Movies", icon: <BiCameraMovie />, iconP: <BiSolidCameraMovie /> },
  {
    title: "Series",
    icon: <PiMonitorPlayBold />,
    iconP: <PiMonitorPlayFill />,
  },
  { title: "Explore", icon: <MdOutlineExplore />, iconP: <MdExplore /> },
  { title: "Login", icon: <MdLogin /> },
];

export const genres = [
  { name: "Action", imgUrl: "https://mobomoviez.fun/images/genres/action.jpg" },
  {
    name: "Adventure",
    imgUrl: "https://mobomoviez.fun/images/genres/adventure.jpg",
  },
  {
    name: "Animation",
    imgUrl: "https://mobomoviez.fun/images/genres/animation.jpg",
  },
  { name: "Comedy", imgUrl: "https://mobomoviez.fun/images/genres/comedy.jpg" },
  {
    name: "Mystery",
    imgUrl: "https://mobomoviez.fun/images/genre/mystery.jpg",
  },
  { name: "Sport", imgUrl: "https://mobomoviez.fun/images/genres/sport.jpg" },
  { name: "Horror", imgUrl: "https://mobomoviez.fun/images/genres/horror.jpg" },
  {
    name: "Documentary",
    imgUrl: "https://mobomoviez.fun/images/genres/documentary.jpg",
  },
  { name: "War", imgUrl: "https://mobomoviez.fun/images/genres/war.jpg" },
  { name: "Drama", imgUrl: "https://mobomoviez.fun/images/genres/drama.jpg" },
  { name: "Family", imgUrl: "https://mobomoviez.fun/images/genres/family.jpg" },
  {
    name: "Fantasy",
    imgUrl: "https://mobomoviez.fun/images/genres/fantasy.jpg",
  },
  {
    name: "History",
    imgUrl: "https://mobomoviez.fun/images/genres/history.jpg",
  },
  { name: "Crime", imgUrl: "https://mobomoviez.fun/images/genres/crime.jpg" },
  { name: "Music", imgUrl: "https://mobomoviez.fun/images/genres/music.jpg" },
  {
    name: "Musical",
    imgUrl: "https://mobomoviez.fun/images/genres/musical.jpg",
  },
  {
    name: "Biography",
    imgUrl: "https://mobomoviez.fun/images/genres/biography.jpg",
  },
  {
    name: "Western",
    imgUrl: "https://mobomoviez.fun/images/genres/western.jpg",
  },
  { name: "Sci-fi", imgUrl: "https://mobomoviez.fun/images/genres/sci-fi.jpg" },
];
export const trendingItem = [
  {
    id: 1630029,
    title: "Avatar: The Way of Water",
    titleType: "movie",
    year: 2022,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 7.8,
    time: "3h 12m",
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm",
    imgBachGrand: avatar,
  },
  {
    id: 13833688,
    title: "The Whale ",
    titleType: "movie",
    year: 2022,
    genres: ["Drama"],
    rating: 8.0,
    time: "1h 57m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2023/01/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2023/02/the-whale-wallpaper.jpg",
  },

  {
    id: 9764362,
    title: "The Menu",
    titleType: "movie",
    year: 2022,
    genres: ["Comedy", "Horror"],
    rating: 7.2,
    time: "1h 47m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2022/10/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX500.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2022/10/the-menu-poster.jpg",
  },
  {
    id: 10954600,
    title: "Ant-Man and the Wasp",
    titleType: "movie",
    year: 2023,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 7.8,
    time: "2h 4m",
    imgUrl:
      "https://mobomoviez.fun/images/movie/2023/tt10954600/thumbnail/ant-man-and-the-wasp-quantumania-2023.jpg",
    imgBachGrand:
      "https://mobomoviez.fun/images/movie/2023/tt10954600/cover/ant-man-and-the-wasp-quantumania-2023-cover.jpg",
  },
  {
    id: 8111088,
    title: "The Mandalorian",
    titleType: "movie",
    year: 2019,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.7,
    time: "2h 36m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-poster-210x310.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-wallpaper.jpg",
  },
];

export const adminAddMovieListItems = [
  ["Title", "Imdb", "Time"],
  ["Artist", "Genre"],
  ["Language", "Country"],
  ["Created Date", "Released Date"],
  ["Summary"],
];
export const adminAddOthersListItems = [["Title"]];

export const adminAddBlogListItems = [["Title"], ["TimeForRead"]];
export const adminAddArtistListItems = [
  ["Name"],
  ["Date Birth"],
  ["Career"],
  ["Summary"],
];
