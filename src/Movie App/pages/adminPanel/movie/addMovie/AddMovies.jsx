import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import AddMoveImage from "./AddMovieImage";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAddMovieInAdminPanelMutation,
  useGetGenreListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import UplaodBox from "./UplaodBox";
import {
  useGetCountryListInAdminPanelQuery,
  useGetLanguageListInAdminPanelQuery,
  useGetArtisitListInAdminPanelQuery,
  useGetArtistSelectListInAdminPanelQuery,
  useGetCountrySelectListInAdminPanelQuery,
  useGetGenreSelectListInAdminPanelQuery,
  useGetLanguageSelectListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import { withRouter } from "react-router-dom";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../../constans";
import axios from "axios";
import { Progress } from "flowbite-react";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
import toast from "react-hot-toast";
const AddMovies = ({ history }) => {
  // Movie File
  const [movieFiless, setMovieFiles] = useState([]);
  const ids = movieFiless?.map(({ quality }) => quality);
  const movieFiles = movieFiless?.filter(
    ({ quality }, index) => !ids.includes(quality, index + 1)
  );

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
    title: "",
    imdb: "",
    year: "",
    time: "",
    summary: "",
  };
  const [addNewMovie] = useAddMovieInAdminPanelMutation();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const [loadingButton, setLoadingButton] = useState(false);
  const [date, setDate] = useState({
    ReleasedDate: "yyyy/mm/dd",
    CreatedDate: "yyyy/mm/dd",
  });
  const validationSchema = Yup.object({
    title: Yup.string().required("title is requried"),
    imdb: Yup.string()
      .required("imdb is requried")
      .matches(/(?=.*[0-9])/, "imdb should be a number"),
    time: Yup.string().required("Time is requried"),
    summary: Yup.string().required("Summary is requried"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const [selectedOptions, setSelectedOptionss] = useState({
    genre: [],
    language: [],
    country: [],
    artist: [],
  });
  const [qw, we] = useState(70);
  const SubmiHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("Title", Formik.values.title);
    formData.append("ImdbRate", Formik.values.imdb);
    formData.append("Summary", Formik.values.summary);
    formData.append("Time", Formik.values.time);
    formData.append("Cover", movieCover);
    formData.append("Image", movieBackground);
    formData.append("ReleasedDate", date.ReleasedDate);
    formData.append("CreatedDate", date.CreatedDate);
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
    formData.append(
      "Trailer",
      movieFiles[movieFiles.findIndex((m) => m.quality === "Trailer")].file
    );

    for (let i = 0; i < movieFiles.length; i++) {
      movieFiles.find((m) => m.quality !== "Trailer") &&
        formData.append(`Files[${i}].Quality`, movieFiles[i].quality);
    }
    for (let i = 0; i < movieFiles.length; i++) {
      movieFiles.find((m) => m.quality !== "Trailer") &&
        formData.append(`Files[${i}].File`, movieFiles[i].file);
    }
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        we(precentage);
      },
    };
    const config = {
      onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    };
    axios
      .post("https://localhost:7175/Admin/Movie/Add", formData, options)
      .then((r) => {
        // console.log(r);
        // setqw(Math.random());
        if (r.data.isSuccessFull) {
          toast.success(`${Formik.values.title} add to Movies `, {
            autoClose: 1100,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            position: "top-right",
          });
          setTimeout(() => history.push("movieslist"), 300);
        }
      });

    // addNewMovie(formData)
    //   .unwrap()
    //   .then((r) => {
    //   })
    //   .then((error) => {}); movieFiles.length!==0 &&
  };
  // console.log(
  //   movieFiles.length !== 0 && Math.floor(movieFiles[0].file.size / 1000000)
  // );
  // console.log(movieFiles);
  return (
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addnewmovie", value: "Add Movie" }]}
      />{" "}
      <div className=" my-10 min-h-screen pb-20  mx-6 sm:mx-10 md:mx-28">
        <div className="text-[23px] font-bold mt-10 mb-6 ">
          {"Add New Movie"}
        </div>
        <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
          <div className="">
            <form className="">
              <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                <AddMoveImage
                  // editProccss={editProccss}
                  movieBackground={movieBackground}
                  setMovieBackground={setMovieBackground}
                  movieCover={movieCover}
                  setMovieCover={setMovieCover}
                  // image={selectedMovieData?.data.image}
                />
                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  <AdminFromBodyInfo
                    preInfo={movieCover}
                    scondePreInfo={movieBackground}
                    thirdPreInfo={
                      Object.keys(Formik.errors).length === 0 &&
                      movieCover &&
                      movieBackground &&
                      selectedOptions.artist.length !== 0 &&
                      selectedOptions.country.length !== 0 &&
                      selectedOptions.genre.length !== 0 &&
                      selectedOptions.language.length !== 0 &&
                      date.CreatedDate !== "yyyy/mm/dd" &&
                      date.ReleasedDate !== "yyyy/mm/dd"
                    }
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
                    />
                  </div>
                </li>

                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  {Object.keys(Formik.errors).length === 0 &&
                  movieCover &&
                  movieBackground &&
                  selectedOptions.artist.length !== 0 &&
                  selectedOptions.country !== 0 &&
                  selectedOptions.genre !== 0 &&
                  selectedOptions.language !== 0 &&
                  date.CreatedDate !== "yyyy/mm/dd" &&
                  date.ReleasedDate !== "yyyy/mm/dd" ? (
                    true ? (
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
                  <div className="min-w-[200px]  mt-20 md:mt-8 mx-3 ">
                    <UplaodBox
                      setMovieFiles={setMovieFiles}
                      movieFiles={movieFiles}
                      loadingButton={loadingButton}
                      qw={qw}
                      from={"add"}
                    />
                  </div>
                </li>
                <li className="ml-6 ">
                  <AdminFormDoneIcon
                    preDone={
                      Object.keys(Formik.errors).length === 0 &&
                      movieCover &&
                      movieBackground &&
                      selectedOptions.artist.length !== 0 &&
                      selectedOptions.country.length !== 0 &&
                      selectedOptions.genre.length !== 0 &&
                      selectedOptions.language.length !== 0 &&
                      date.CreatedDate !== "yyyy/mm/dd" &&
                      date.ReleasedDate !== "yyyy/mm/dd"
                    }
                  />
                </li>
              </ol>
            </form>

            <div className="flex justify-center ">
              <button
                onClick={SubmiHandler}
                className={
                  Object.keys(Formik.errors).length === 0 &&
                  movieCover &&
                  movieBackground &&
                  selectedOptions.artist.length !== 0 &&
                  selectedOptions.country !== 0 &&
                  selectedOptions.genre !== 0 &&
                  selectedOptions.language !== 0 &&
                  date.CreatedDate !== "yyyy/mm/dd" &&
                  date.ReleasedDate !== "yyyy/mm/dd"
                    ? "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                    : "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                }
                type="submit"
                disabled={
                  Object.keys(Formik.errors).length === 0 &&
                  movieCover &&
                  movieBackground &&
                  selectedOptions.artist.length !== 0 &&
                  selectedOptions.country.length !== 0 &&
                  selectedOptions.genre.length !== 0 &&
                  selectedOptions.language.length !== 0 &&
                  date.CreatedDate !== "yyyy/mm/dd" &&
                  date.ReleasedDate !== "yyyy/mm/dd"
                    ? false
                    : true
                }
              >
                DONE !
              </button>
              {/* <button onClick={SubmiHandler}>55555</button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(AddMovies);
