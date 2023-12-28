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
        <Switch>
          {/* <div
          className={`dark:text-textDark text-textLight   
            ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
        > */}
          {/* <div className="bg-[#f9f9f9] dark:bg-[#282a37]"> */}
          <Route path={"/login"} exact component={() => <LogInPage />} />
          <Route
            path={"/login/:id"}
            exact
            component={() => <ForgotPasswordPage />}
          />

          <Route path={"/singup"} exact component={() => <SingupPage />} />
          {/* </div> */}

          {/* </div> */}
          <Route path={"/admin"} exact component={() => <AdminPage />} />
          <Route path={"/admin/:id"} exact component={() => <AdminPage />} />

          <div className="">
            <div
              onClick={() => setIsSearchItemsShow(false)}
              className={`${
                !isSearchItemsShow && "hidden"
              } fixed z-40 w-full h-full bg-black  backdrop-blur-sm dark:bg-opacity-60 bg-opacity-25 `}
            />
            <div
              onClick={() => setOpenMenu(false)}
              className={`${
                !openMenu && "left-[-100%]"
              } fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25 `}
            />
            <div
              className={`dark:text-textDark text-textLight   
            ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
            >
              <FooterMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />

              <div className="flex">
                <div className="lg:sticky">
                  <SideBar
                    mode={mode}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    setMode={setMode}
                  />
                </div>
                <div className=" w-full flex flex-col  ">
                  <NavBar
                    isSearch={isSearchItemsShow}
                    setIsSearch={setIsSearchItemsShow}
                    setMode={setMode}
                    mode={mode}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                  <Route
                    path={"/user"}
                    exact
                    component={() => <UserProfile />}
                  />

                  <Route
                    path={"/series"}
                    exact
                    component={() => <SeriesPage />}
                  />

                  <Route
                    path={"/genres/:id"}
                    exact
                    component={() => <MoviesByGenre />}
                  />
                  <Route
                    path={"/profile"}
                    exact
                    component={() => <UserProfile />}
                  />
                  <Route
                    path={"/movies"}
                    exact
                    component={() => <MoviesPage />}
                  />

                  <Route path={"/genres"} exact component={() => <Genres />} />
                  <Route path={"/"} exact component={() => <Explore />} />
                  <div className="bg-[#101018] ">
                    <Route
                      path={"/movies/:id"}
                      exact
                      component={() => <MoviePage />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
