import React, { useState } from "react";
import { BiLinkAlt, BiSolidMoviePlay } from "react-icons/bi";
import AddMoveImage from "./AddMovieImage";
import { useFormik } from "formik";
import { useAddSeriesInAdminPanelMutation } from "../../../../redux/services/movieDatabase";
import {
  useGetArtistSelectListInAdminPanelQuery,
  useGetCountrySelectListInAdminPanelQuery,
  useGetGenreSelectListInAdminPanelQuery,
  useGetLanguageSelectListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../../constans";
import axios from "axios";
import AddSeasonFile from "./AddSeasonFile/AddSeasonFile";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
import UplaodBox from "../../movie/addMovie/UplaodBox";
const AddSeries = ({ history }) => {
  // Movie File
  const [movieFiless, setMovieFiles] = useState([]);
  const [seasonFile, setSeasonFile] = useState([]);
  const ids = seasonFile?.map(({ id }) => id);

  const seriesFiles = seasonFile?.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );
  console.log(seriesFiles);
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
  const [addNewMovie] = useAddSeriesInAdminPanelMutation();
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
  const [trailer, settrailer] = useState("");
  const [qw, we] = useState(70);
  let filteredFiles = seriesFiles.filter((s) => s.id !== "Trailer");
  console.log(filteredFiles);
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

    for (let i = 0; i < filteredFiles.length; i++) {
      formData.append(`Files[${i}].Quality`, filteredFiles[i].quality);
    }
    for (let i = 0; i < filteredFiles.length; i++) {
      formData.append(`Files[${i}].File`, filteredFiles[i].file);
    }
    for (let i = 0; i < filteredFiles.length; i++) {
      formData.append(`Files[${i}].Season`, filteredFiles[i].season);
    }
    for (let i = 0; i < filteredFiles.length; i++) {
      formData.append(`Files[${i}].Episode`, filteredFiles[i].episode);
    }
    formData.append(
      "Trailer",
      seriesFiles[seriesFiles.findIndex((m) => m.quality === "Trailer")].file
    );
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        we(precentage);
      },
    };
    // const config = {
    //   onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    // };
    axios
      .post("https://localhost:7175/Admin/Series/Add", formData, options)
      .then((r) => {
        // setLoadingButton(false);
        if (r.data.isSuccessFull) {
          toast.success(`${Formik.values.title} add to Series `, {
            autoClose: 1100,
            position: "top-right",
          });
          setTimeout(() => history.push("serieslist"), 300);
        }
        console.log(r);
      });
  };

  return (
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addnewseries", value: "Add Series" }]}
      />{" "}
      <div className=" my-10 min-h-screen pb-20  mx-6 sm:mx-10 md:mx-28">
        <div className="text-[23px] font-bold mt-10 mb-6 ">
          {"Add New Series"}
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
                    thirdPreInfo={state}
                  />
                  <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                    Series Info
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

                  <div className="min-w-[200px]  mt-20 md:mt-8 mx-3 ">
                    <div
                      className={` flex ${
                        loadingButton && "hidden"
                      }   mx-2 my-1 bg-gray-300 dark:bg-border px-1 rounded-md py-1 justify-between`}
                    >
                      <input
                        onChange={(e) =>
                          setSeasonFile((v) => [
                            ...v,
                            {
                              id: "Trailer",
                              season: "Trailer",
                              episode: "Trailer",
                              quality: "Trailer",
                              file: e.target.files[0],
                            },
                          ])
                        }
                        // onChange={(e) => settrailer(e.target.files[0])}
                        type="file"
                        className="text-sm text-grey-500
        file:mr-5 file:py-2 file:px-3 md:file:px-6  self-center
        file:rounded-full file:border-0
        file:text-sm file:font-medium
        file:bg-blue-50 file:text-blue-700
        hover:file:cursor-pointer hover:file:bg-screenDark
        hover:file:text-screenLight
        "
                      />
                      <p
                        className={`text-btn font-semibold self-center md:text-[16px] text-[13px] `}
                      >
                        Trailer{" "}
                      </p>
                    </div>
                  </div>
                  {loadingButton ? (
                    <div
                      className={` px-5 pb-6 md:mx-3 mx-4 mt-16 rounded-lg cursor-pointer border-2 border-[#787f98] border-dashed text-center m-2   flex flex-col`}
                    >
                      <p className="pt-3 ">Uplaode Box</p>

                      {seriesFiles?.map((file, index) => (
                        <div key={index}>
                          {qw >= (100 * (index + 1)) / seriesFiles.length ? (
                            <div>
                              <div class="mb-2 flex justify-between items-center">
                                <div class="flex items-center gap-x-3">
                                  <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                                    <BiSolidMoviePlay />
                                  </span>
                                  <div>
                                    <p class="text-sm font-medium text-gray-800 dark:text-white">
                                      {file.file.name}
                                    </p>
                                    <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                                      {Math.floor(
                                        seriesFiles[0].file.size / 1000000
                                      )}{" "}
                                      MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center gap-x-3 whitespace-nowrap">
                                <div
                                  class="flex w-full h-[5px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <div
                                    class={`flex  flex-col duration justify-center rounded-full overflow-hidden bg-btn text-xs text-white text-center whitespace-nowrap transition duration-700 dark:bg-btn w-[${qw}%]`}
                                    style={{
                                      width: `${
                                        qw >=
                                          (100 * (index + 1)) /
                                            seriesFiles.length && "100"
                                      }% `,
                                    }}
                                  ></div>
                                </div>
                                <div class="w-6 text-end">
                                  <span class="text-sm text-gray-800 dark:text-white">
                                    {qw >=
                                      (100 * (index + 1)) /
                                        seriesFiles.length && "100"}
                                    %
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div class="mb-2 flex justify-between items-center">
                                <div class="flex items-center gap-x-3">
                                  <span class="w-8 h-8 text-[21px] flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700">
                                    <BiSolidMoviePlay />
                                  </span>
                                  <div>
                                    <p class="text-sm font-medium text-gray-800 dark:text-white">
                                      {file.file.name}
                                    </p>
                                    <p class="text-xs text-start text-gray-500 dark:text-gray-500">
                                      {Math.floor(
                                        seriesFiles[0].file.size / 1000000
                                      )}{" "}
                                      MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center gap-x-3 whitespace-nowrap">
                                <div class="demo-container w-full">
                                  <div class="progress-bar w-full">
                                    <div class="progress-bar-value w-full"></div>
                                  </div>
                                </div>
                                <div class="w-6 text-end">
                                  <div className="pl-3">
                                    {/* <div className="self-center"> */}
                                    <svg
                                      class="w-4 h-4 mr-3 -ml-1 text-btn animate-spin"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                      ></circle>
                                      <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <AddSeasonFile
                      seasonFile={seriesFiles}
                      setSeasonFile={setSeasonFile}
                      loadingButton={loadingButton}
                      qw={qw}
                    />
                  )}
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

export default withRouter(AddSeries);
