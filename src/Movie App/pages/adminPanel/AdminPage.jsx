import React, { useEffect, useState } from "react";
import { useStateContext } from "../../contextProvider/ContextProvider";
import { Route, withRouter } from "react-router-dom";
import AddMovies from "./movie/addMovie/AddMovies";
import MoviesList from "./movie/movieList/MoviesList";
import SeriesList from "./series/seriesList/SeriesList";
import AddGenre from "./genre/AddGenre";
import AddSeries from "./series/AddSeries";
import Users from "./users/Users";
import AdminSideBar from "../../components/admin/AdminSideBar/AdminSideBar";
import AdminNavBar from "../../components/admin/adminNavBar/AdminNavBar";
import ProfessionList from "./profession/professionList/ProfessionList";
import AddProfession from "./profession/addProfession/AddProfession";
import LanguageList from "./language/languagesList/LanguageList";
import AddLanguage from "./language/addLanguage/AddLanguage";
import CountriesList from "./country/countriesList/CountriesList";
import AddCountry from "./country/addCountry/AddCountry";
import GenresList from "./genre/GenresList";
import nprogress from "nprogress";
import AddNewArtist from "./artist/add artist/AddNewArtist";
import ArtistList from "./artist/artistList/ArtistList";
import UserProfile from "../profile/profile/UserProfile";
import Dashboard from "./dashboard/Dashboard";
import EditUserInfo from "./users/userInfoEdit/EditUserInfo";
import EditArtist from "./artist/add artist/EditArtist";
import ScrollToTop from "./ScrollToTop";
import CommentsList from "./comments/commentsList/CommentsList";

const AdminPage = ({ history }) => {
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const { IsDarkMode } = useStateContext();
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [history.location.pathname]);

  return (
    <div
      className={`dark:text-textDark text-textLight  
    ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
    >
      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          !openMenu && "left-[-100%]"
        } fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25 `}
      />
      <div className="flex">
        <div className="lg:sticky">
          <AdminSideBar
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            setMode={setMode}
          />
        </div>

        <div className="flex flex-col w-full">
          <AdminNavBar
            isSearch={isSearchItemsShow}
            setIsSearch={setIsSearchItemsShow}
            setMode={setMode}
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />{" "}
          <div>
            <ScrollToTop />
            <Route
              path={"/admin/addnewmovie"}
              exact
              component={() => <AddMovies />}
            />
            <Route path={"/admin/users"} exact component={() => <Users />} />
            <Route
              path={"/admin/movieslist"}
              exact
              component={() => <MoviesList />}
            />
            <Route path={"/admin/edit"} exact component={() => <AddMovies />} />
            <Route
              path={"/admin/user"}
              exact
              component={() => <EditUserInfo />}
            />
            <Route
              path={"/admin/user/:id"}
              exact
              component={() => <EditUserInfo />}
            />
            <Route
              path={"/admin/addnewseries"}
              exact
              component={() => <AddSeries />}
            />
            <Route
              path={"/admin/addnewgenre"}
              exact
              component={() => <AddGenre />}
            />
            <Route
              path={"/admin/serieslist"}
              exact
              component={() => <SeriesList />}
            />
            <Route
              path={"/admin/genreslist"}
              exact
              component={() => <GenresList />}
            />
            <Route
              path={"/admin/professionlist"}
              exact
              component={() => <ProfessionList />}
            />
            <Route
              path={"/admin/addnewprofession"}
              exact
              component={() => <AddProfession />}
            />
            <Route
              path={"/admin/languageslist"}
              exact
              component={() => <LanguageList />}
            />
            <Route
              path={"/admin/addnewlanguage"}
              exact
              component={() => <AddLanguage />}
            />
            <Route
              path={"/admin/countriesList"}
              exact
              component={() => <CountriesList />}
            />
            <Route
              path={"/admin/addnewcountry"}
              exact
              component={() => <AddCountry />}
            />
            <Route
              path={"/admin/addnewartist"}
              exact
              component={() => <AddNewArtist />}
            />
            <Route
              path={"/admin/comments"}
              exact
              component={() => <CommentsList />}
            />
            <Route
              path={"/admin/editartist"}
              exact
              component={() => <EditArtist />}
            />
            <Route
              path={"/admin/editartist:id"}
              exact
              component={() => <EditArtist />}
            />
            <Route
              path={"/admin/artistslist"}
              // exact
              component={() => <ArtistList />}
            />

            <Route
              path={"/admin/dashboard"}
              exact
              component={() => <Dashboard />}
            />

            <Route path={"/admin"} exact component={() => <Dashboard />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminPage);
