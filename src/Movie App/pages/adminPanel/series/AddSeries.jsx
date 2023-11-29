import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormItem from "../movie/addMovie/FormItem";
// import { useAddMovieMutation } from "../../../redux/services/movieDatabase";
import MultipleSelect from "../../../common/MultipleSelect";
import AddSeasonFile from "./AddSeasonFile/AddSeasonFile";
import {
  useAddMovieInAdminPanelMutation,
  useGetArtisitListInAdminPanelQuery,
  useGetCountryListInAdminPanelQuery,
  useGetGenreListInAdminPanelQuery,
  useGetLanguageListInAdminPanelQuery,
} from "../../../redux/services/movieDatabase";
import AddMoveImage from "../movie/addMovie/AddMovieImage";
import AdminFromBodyInfo from "../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../constans";
const genresOptions = [
  { label: "Deram ", value: "graspes" },
  { label: "War ", value: "manasgo" },
  { label: "Sport ", value: "stafrawberry" },
  { label: "Comedy ", value: "graefafapes" },
];

const AddSeries = () => {
  const [SeriesCover, setSeriesCover] = useState(null);
  const [seriesBackground, setSeriesBackground] = useState(null);
  const [state, setState] = useState(false);

  //seasons episodes file
  const [seasonFile, setSeasonFile] = useState([]);
  console.log(seasonFile);

  
  const genreQuery = useGetGenreListInAdminPanelQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const languageQuery = useGetLanguageListInAdminPanelQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const countryQuery = useGetCountryListInAdminPanelQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const artistQuery = useGetArtisitListInAdminPanelQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const initialValues = {
    title: "",
    imdb: "",
    year: "",
    time: "",
    summary: "",
    ReleasedDate:'',
    CreatedDate:''
  };
  const [addNewMovie] = useAddMovieInAdminPanelMutation();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const [loadingButton, setLoadingButton] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string().required("title is requried"),
    imdb: Yup.string()
      .required("imdb is requried")
      .matches(/(?=.*[0-9])/, "imdb should be a number"),
    year: Yup.string()
      .required("Year is requried")
      .matches(/(?=.*[0-9])(?=.{4,})/, "Year should be a number be 4 digits"),
    time: Yup.string().required("Time is requried"),
    summary: Yup.string().required("Summary is requried"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const artistHandleChange = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setSelectedArtist(selectedOption);
  };
  const genreHandleChange = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setSelectedGenres(selectedOption);
  };
  const languageHandleChange = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setSelectedLanguages(selectedOption);
  };
  const countryHandleChange = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setSelectedCountries(selectedOption);
  };
  function tranformDate(strDate) {
    let result = "";
    if (strDate) {
      let parts = strDate.split("-");
      result = `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
    return result;
  }

  const SubmiHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("title", Formik.values.title);
    formData.append("imdb", Formik.values.imdb);
    formData.append("Summary", Formik.values.summary);
    formData.append("time", Formik.values.time);
    // formData.append("cover", movieCover);
    formData.append("image", movieBackground);
    formData.append("releasedDate", tranformDate(Formik.values.releasedDate));
    formData.append("createdDate", tranformDate(Formik.values.createdDate));
    for (let i = 0; i < selectedArtist.length; i++) {
      formData.append("SelectedArtistsIds", selectedArtist[i]);
    }
    for (let i = 0; i < selectedCountries.length; i++) {
      formData.append("SelectedCountryIds", selectedCountries[i]);
    }
    for (let i = 0; i < selectedGenres.length; i++) {
      formData.append("SelectedGenreIds", selectedGenres[i]);
    }
    for (let i = 0; i < selectedLanguages.length; i++) {
      formData.append("SelectedLanguagesIds", selectedLanguages[i]);
    }
    addNewMovie(formData)
      .unwrap()
      .then((r) => {
        toast.success(`${Formik.values.title} add to Movies `, {
          autoClose: 1100,
          position: "top-right",
        });
        // setTimeout(() => history.push("movieslist"), 800);
      })
      .then((error) => {});
  };
  return (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      <button onClick={SubmiHandler}>55555</button>
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Series </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form className="">
            <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <AddMoveImage
                movieBackground={seriesBackground}
                setMovieBackground={setSeriesBackground}
                movieCover={SeriesCover}
                setMovieCover={setSeriesCover}
              />
              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                <AdminFromBodyInfo
                  preInfo={SeriesCover}
                  scondePreInfo={seriesBackground}
                  thirdPreInfo={state}
                />
                <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                  Series Info
                </h3>
                  <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                 
                  <AdminAddItemList dataQuery={{artistQuery,genreQuery,languageQuery,countryQuery}} Formik={Formik} itemList={adminAddMovieListItems} selectHandler={[languageHandleChange , genreHandleChange , countryHandleChange,artistHandleChange]}/>

                  </div>
              </li>

              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                {SeriesCover && seriesBackground ? (
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
                <AddSeasonFile
                  seasonFile={seasonFile}
                  setSeasonFile={setSeasonFile}
                />
              </li>
              <li className="ml-6 ">
                <AdminFormDoneIcon preDone={SeriesCover} />
              </li>
            </ol>
          </form>
          <div className="flex justify-center ">
            <button
              onClick={SubmiHandler}
              className={
                Object.keys(Formik.errors).length > 0 ||
                SeriesCover === null ||
                seriesBackground === null ||
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddSeries;

// <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
//   {SeriesCover && seriesBackground ? (
//     !state ? (
//       <div className="absolute flex text-screenLight items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 ">
//         <BiLinkAlt className="font-bold text-[20px] " />
//       </div>
//     ) : (
//       <div className="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
//         <svg
//           aria-hidden="true"
//           className="w-5 h-5 text-screenLight"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       </div>
//     )
//   ) : (
//     <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
//       <BiLinkAlt className="font-bold text-[20px] " />
//     </span>
//   )}

//   <AddSeasonFile />
// </li>
