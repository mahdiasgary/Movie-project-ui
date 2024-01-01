import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import Explore from "./pages/Explore";
import Genres from "./pages/genres/Genres";
import MoviesByGenre from "./pages/genres/MoviesByGenre";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import SeriesPage from "./pages/seriesPage/SeriesPage";
import "./styles/globalStyles.css";
import FooterMenu from "./components/mobile-footer-menu/FooterMenu";
import MoviePage from "./pages/moviePage/MoviePage";
import { useStateContext } from "./contextProvider/ContextProvider";
import AdminPage from "./pages/adminPanel/AdminPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/profile/profile/UserProfile";
import LogInPage from "./pages/login singUp/login/LogInPage";
import SingupPage from "./pages/login singUp/singup/SingupPage";
import nprogress from "nprogress";
import ForgotPasswordPage from "./pages/login singUp/login/ForgotPasswordPage";
import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
const App = () => {
  const { setIsDarkMode, IsDarkMode } = useStateContext();
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  let location = window.location;
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <Toaster position="top-right" reverseOrder={true} />
      <div className="en font-[Eudoxus Sans]  ">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
