import React, { useEffect, useState } from "react";
import { BiLinkAlt, BiSolidMoviePlay } from "react-icons/bi";
import AddMoveImage from "../addMovie/AddMovieImage";
import { useFormik } from "formik";
import {
  useAddSeriesInAdminPanelMutation,
  useGetSeriesForEditInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import {
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
import AddSeasonFile from "../addMovie/AddSeasonFile/AddSeasonFile";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
import { BeatLoader } from "react-spinners";
import AddEditTrailer from "../addMovie/AddEditTrailer";
import toast from "react-hot-toast";
const EditSeries = ({ history }) => {
  // Movie File
  const [movieFiless, setMovieFiles] = useState([]);
  const [seasonFile, setSeasonFile] = useState([]);
  const ids = seasonFile?.map(({ id }) => id);

  const seriesFiles = seasonFile?.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );
  const { data } = useGetSeriesForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const [initialInputs, setInitialInputs] = useState({
    files: [],
    id: "",
    Trailer: "",
  });
  console.log(data);

  // console.log(movieFiles);
  useEffect(() => {
    data &&
      setInitialInputs((v) => ({
        files: data.data.files,
        id: data.data.id,
        Trailer: data.data.trailer,
      }));
  }, [data]);
  const [movieCover, setMovieCover] = useState(null);
  const [movieBackground, setMovieBackground] = useState(null);
  const [inputs, setInputs] = useState({
    Title: data?.data.title,
    Imdb: data?.data.imdb,
    year: "7",
    Time: data?.data.time,
    summary: data?.data.summary,
  });
  const [selectedOptions, setSelectedOptionss] = useState({
    genre: [{ id: 7, title: "sef" }],
    language: [{ id: 7, title: "sef" }],
    country: [{ id: 7, title: "sef" }],
    artist: [{ id: 7, title: "sef" }],
  });
  useEffect(() => {
    setInputs({
      Title: data?.data.title,
      Imdb: data?.data.imdbRate,
      year: "7",
      Time: data?.data.time,
      summary: data?.data.summary,
      id: data?.data.id,
    });

    setDate({
      CreatedDate: data?.data.createdDate?.split("T")[0],
      ReleasedDate: data?.data.releasedDate?.split("T")[0],
    });
    // setSelectedOptionss({
    //   artist: data?.data.artists,
    //   country: data?.data.country,
    //   genre: data?.data.genre,
    //   language: data?.data.languages,
    // });

    setMovieCover(data?.data.cover);
    setMovieBackground(data?.data.image);
  }, [data]);

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

  const Formik = useFormik({
    initialValues,
    validateOnMount: true,
  });

  const [trailer, settrailer] = useState("");
  const [qw, we] = useState(0);
  // console.log(filteredFiles);
  const SubmiHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("id", initialInputs.id);
    formData.append("title", inputs.Title);
    formData.append("imdbRate", inputs.Imdb);
    formData.append("Summary", inputs.summary);
    formData.append("time", inputs.Time);
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

    // const options = {
    //   onUploadProgress: (progressEvent) => {
    //     const { loaded, total } = progressEvent;
    //     let precentage = Math.floor((loaded * 100) / total);
    //     we(precentage);
    //   },
    // };
    // const config = {
    //   onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    // };
    axios
      .post("https://localhost:7175/Admin/Series/Edit", formData)
      .then((r) => {
        // setLoadingButton(false);
        if (r.data.isSuccessFull) {
          toast.success(`Edited Successfully `, {
            autoClose: 1100,
            position: "top-right",
          });
          // setTimeout(() => history.push("serieslist"), 300);
        }
        console.log(r);
      });
  };

  return data ? (
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addnewseries", value: "Edit Series" }]}
      />{" "}
      <div className=" my-10 min-h-screen pb-20  mx-6 sm:mx-10 md:mx-28">
        <div className="text-[23px] font-bold mt-10 mb-6 ">{"Edit Series"}</div>
        <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
          <div className="">
            <form className="">
              <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                <AddMoveImage
                  editProccss={true}
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
                      inputs={inputs}
                      changeInput={setInputs}
                      from={"edit"}
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
                  <AddEditTrailer
                    file={initialInputs}
                    setFile={setInitialInputs}
                    selectedOptions={selectedOptions}
                  />

                  {/* <div className="min-w-[200px]  mt-20 md:mt-8 mx-3 ">
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
                  </div> */}

                  <AddSeasonFile
                    from={"edit"}
                    seasonFile={seriesFiles}
                    setSeasonFile={setSeasonFile}
                    loadingButton={loadingButton}
                    files={initialInputs}
                    qw={qw}
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
              {/* <button onClick={SubmiHandler}>55555</button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <div className="flex h-screen justify-center">
      <div className="flex mt-20 text-[19px]">
        <div className="flex justify-center">
          <BeatLoader size={"20px"} color="#1e74f1" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditSeries);
