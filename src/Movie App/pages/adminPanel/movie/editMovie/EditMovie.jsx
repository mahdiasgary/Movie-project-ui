import React, { useEffect, useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import AddMoveImage from "../addMovie/AddMovieImage";
import { useFormik } from "formik";
import * as Yup from "yup";

import UplaodBox from "../addMovie/UplaodBox";
import {
  useGetArtistSelectListInAdminPanelQuery,
  useGetCountrySelectListInAdminPanelQuery,
  useGetGenreSelectListInAdminPanelQuery,
  useGetLanguageSelectListInAdminPanelQuery,
  useGetMovieForEditInAdminPanelQuery,
  useAddMovieInAdminPanelMutation,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import { withRouter } from "react-router-dom";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../../constans";
import axios from "axios";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
const EditMovie = ({ history }) => {
  // Movie File
  const [movieFiless, setMovieFiles] = useState([]);
  const ids = movieFiless?.map(({ quality }) => quality);
  const movieFiles = movieFiless?.filter(
    ({ quality }, index) => !ids.includes(quality, index + 1)
  );
  const { data } = useGetMovieForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const [initialInputs, setInitialInputs] = useState({ files: [] });
  console.log(data);
  useEffect(() => {
    data && setInitialInputs((v) => ({ files: data.data.files }));
  }, [data]);
  const [movieCover, setMovieCover] = useState(null);
  const [movieBackground, setMovieBackground] = useState(null);
  const [state, setState] = useState(false);
  const genreQuery = useGetGenreSelectListInAdminPanelQuery({
    refetchOnMountOrArgChange: true,
  });
  const languageQuery = useGetLanguageSelectListInAdminPanelQuery({
    refetchOnMountOrArgChange: true,
  });
  const countryQuery = useGetCountrySelectListInAdminPanelQuery({
    refetchOnMountOrArgChange: true,
  });
  const artistQuery = useGetArtistSelectListInAdminPanelQuery({
    refetchOnMountOrArgChange: true,
  });

  const initialValues = {
    title: "qw",
    imdb: "7",
    year: "7",
    time: "7",
    summary: "qw",
  };
  const [addNewMovie] = useAddMovieInAdminPanelMutation();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const [loadingButton, setLoadingButton] = useState(false);
  const [date, setDate] = useState({
    ReleasedDate: "2020/2/8",
    CreatedDate: "2020/8/5",
  });
  //const validationSchema = Yup.object({
  //  title: Yup.string().required("title is requried"),
  //  imdb: Yup.string()
  //    .required("imdb is requried")
  //    .matches(/(?=.*[0-9])/, "imdb should be a number"),
  //  year: Yup.string()
  //    .required("Year is requried")
  //    .matches(/(?=.*[0-9])(?=.{4,})/, "Year should be a number be 4 digits"),
  //  time: Yup.string().required("Time is requried"),
  //  summary: Yup.string().required("Summary is requried"),
  //  ReleasedDate : Yup.string().required("ReleasedDate is requried"),
  //  CreatedDate : Yup.string().required("CreatedDate is requried"),

  //});
  const Formik = useFormik({
    initialValues,
    /*validationSchema*/
    validateOnMount: true,
  });

  const [selectedOptions, setSelectedOptionss] = useState({
    genre: [],
    language: [],
    country: [],
    artist: [],
  });
  const [qw, we] = useState(70);
  // console.log(
  //   movieFiles.length !== 0 && Math.floor(movieFiles[0].file.size / 1000000)
  // );
  const [inputs, setInputs] = useState({
    Title: data?.data.title,
    Imdb: data?.data.imdb,
    year: "7",
    Time: data?.data.time,
    summary: data?.data.summary,
  });
  useEffect(() => {
    setInputs({
      Title: data?.data.title,
      Imdb: data?.data.imdb,
      year: "7",
      Time: data?.data.time,
      summary: data?.data.summary,
    });
    setDate({
      CreatedDate: data?.data.createdDate?.split("T")[0],
      ReleasedDate: data?.data.releasedDate?.split("T")[0],
    });
    setSelectedOptionss({
      artist: data?.data.artists,
      country: data?.data.country,
      genre: data?.data.genre,
      language: data?.data.languages,
    });
    setMovieCover(data?.data.cover);
    setMovieBackground(data?.data.image);
    // setArtistImage(data?.data.image);
    // setArtistImageIni(data?.data.image);
  }, [data]);
  console.log(typeof movieCover === "string");
  const SubmiHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("title", Formik.values.title);
    formData.append("imdb", Formik.values.imdb);
    formData.append("Summary", Formik.values.summary);
    formData.append("time", Formik.values.time);
    formData.append("cover", movieCover);
    formData.append("image", movieBackground);
    formData.append("releasedDate", date.ReleasedDate);
    formData.append("createdDate", date.CreatedDate);
    for (let i = 0; i < selectedOptions.artist.length; i++) {
      formData.append("SelectedArtistsIds", selectedOptions.artist[i].id);
    }
    for (let i = 0; i < selectedOptions.language.length; i++) {
      formData.append("SelectedLanguagesIds", selectedOptions.language[i].id);
    }
    for (let i = 0; i < selectedOptions.country.length; i++) {
      formData.append("SelectedCountryIds", selectedOptions.country[i].id);
    }
    for (let i = 0; i < selectedOptions.genre.length; i++) {
      formData.append("SelectedGenreIds", selectedOptions.genre[i].id);
    }

    for (let i = 0; i < movieFiles.length; i++) {
      formData.append(`Files[${i}].Quality`, movieFiles[i].quality);
    }
    for (let i = 0; i < movieFiles.length; i++) {
      formData.append(`Files[${i}].File`, movieFiles[i].file);
    }
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        we(precentage);
      },
    };

    axios
      .post("https://localhost:7175/Admin/Movie/Edit", formData, options)
      .then((res) => {
        // setLoadingButton(false);
      });

    // addNewMovie(formData)
    //   .unwrap()
    //   .then((r) => {
    //     // toast.success(`${Formik.values.title} add to Movies `, {
    //     //   autoClose: 1100,
    //     //   position: "top-right",
    //     // });
    //     // setTimeout(() => history.push("movieslist"), 800);
    //   })
    //   .then((error) => {}); movieFiles.length!==0 &&
  };

  return (
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/editmovie", value: "Edit Movie" }]}
      />{" "}
      <div className=" my-10 min-h-screen pb-20  mx-6 sm:mx-10 md:mx-28">
        <div className="text-[23px] font-bold mt-10 mb-6 ">{"Edit Movie"}</div>
        <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
          <div className="">
            <form className="">
              <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                <AddMoveImage
                  movieBackground={movieBackground}
                  setMovieBackground={setMovieBackground}
                  movieCover={movieCover}
                  setMovieCover={setMovieCover}
                  editProccss={true}
                  // image={selectedMovieData?.data.image}
                />
                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  <AdminFromBodyInfo
                    preInfo={movieCover}
                    scondePreInfo={movieBackground}
                    thirdPreInfo={state}
                  />
                  <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                    Movie Info
                  </h3>
                  <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                    <AdminAddItemList
                      datePiker={{ date, setDate }}
                      dataQuery={{
                        artistQuery,
                        genreQuery,
                        languageQuery,
                        countryQuery,
                      }}
                      Formik={Formik}
                      itemList={adminAddMovieListItems}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptionss}
                      from={"edit"}
                      inputs={inputs}
                      changeInput={setInputs}
                    />
                  </div>
                </li>

                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  {movieCover && movieBackground ? (
                    !state ? (
                      <div className="absolute flex text-screenLight items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 ">
                        <BiLinkAlt className="font-bold text-[20px] " />
                      </div>
                    ) : (
                      <div className="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-screenLight"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    )
                  ) : (
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <BiLinkAlt className="font-bold text-[20px] " />
                    </span>
                  )}

                  <UplaodBox
                    setMovieFiles={setMovieFiles}
                    movieFiles={movieFiles}
                    loadingButton={loadingButton}
                    qw={qw}
                    initialInputs={initialInputs}
                  />
                </li>
                <li className="ml-6 ">
                  <AdminFormDoneIcon preDone={movieCover} />
                </li>
              </ol>
            </form>

            <div className="flex justify-center ">
              <button
                onClick={SubmiHandler}
                className={
                  Object.keys(Formik.errors).length > 0 ||
                  movieCover === null ||
                  movieBackground === null ||
                  selectedArtist.length === 0 ||
                  selectedCountries.length === 0 ||
                  selectedGenres.length === 0 ||
                  selectedLanguages.length === 0
                    ? "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                    : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                }
                // type="submit"
                // disabled={
                //   (Object.keys(Formik.errors).length>0 ||movieCover===null ||movieBackground===null ||selectedOption.length===0)
                //     ? true
                //     : false
                // }
              >
                SAVE !
              </button>
              <button onClick={SubmiHandler}>55555</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(EditMovie);
