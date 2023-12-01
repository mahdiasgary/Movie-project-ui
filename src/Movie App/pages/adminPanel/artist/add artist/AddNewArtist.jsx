import React, { useState } from "react";
import AddArtistCover from "./AddArtistCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import {
  useAddArtistInAdminPanelMutation,
  useGetCareerListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddArtistListItems } from "../../../../constans";
import toast from "react-hot-toast";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
const AddArtist = ({ history }) => {
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  const careerQuery = useGetCareerListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [addNewSeries] = useAddArtistInAdminPanelMutation();
  const [artistImage, setArtistImage] = useState(null);
  const [date, setDate] = useState({ DateBirth: "" });

  const initialValues = {
    name: "",
    summary: "",
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const validationSchema = Yup.object({
    name: Yup.string().required("name and last name is requried"),
    summary: Yup.string().required("summary is requried"),
  });
  const careerHandleChange = (selectedOption) => {
    selectedOption = selectedOption?.map((career) => {
      return career.id;
    });
    setSelectedOption(selectedOption);
  };

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  function tranformDate(strDate) {
    let result = "";
    if (strDate) {
      let parts = strDate.split("-");
      result = `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
    return result;
  }
  const [selectedOptions, setSelectedOptionss] = useState({
    career: [],
  });
  const SubmitHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("Name", Formik.values.name);
    formData.append("BirthDate", date.DateBirth);
    formData.append("Bio", Formik.values.summary);
    formData.append("Image", artistImage);
    for (let i = 0; i < selectedOptions.career.length; i++) {
      formData.append("SelectedCareerIds", selectedOptions.career[i]["id"]);
    }
    addNewSeries(formData)
      .unwrap()
      .then((r) => {
        toast.success(`${Formik.values.name} add to Artist `, {
          autoClose: 1100,
          position: "top-right",
        });
        setTimeout(() => history.push("artistslist"), 800);
        setLoadingButton(false);
      })
      .catch((error) => {
        toast.error(`Error 404 `, {
          autoClose: 1100,
          position: "top-right",
        });
        setLoadingButton(false);
      });
  };
  console.log(Object.keys(Formik.errors).length);
  return (
    <div className=" min-h-screen pb-20  ">
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addnewartist", value: "Add Artist" }]}
      />
      <div className="sm:mx-10 mx-6 md:mx-28">
        <div className="text-[23px]  font-bold mt-10 mb-6 ">
          Add New Artist{" "}
        </div>
        <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
          <div className="">
            <form className="" onSubmit={SubmitHandler}>
              <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                <AddArtistCover
                  artistImage={artistImage}
                  setArtistImage={setArtistImage}
                />

                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  <AdminFromBodyInfo
                    preInfo={artistImage}
                    scondePreInfo={true}
                    thirdPreInfo={
                      Object.keys(Formik.errors).length === 0 &&
                      date.DateBirth !== "" &&
                      selectedOptions.career.length !== 0
                    }
                  />

                  <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                    Artist Info
                  </h3>
                  <div className="">
                    <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                      <AdminAddItemList
                        datePiker={{ date, setDate }}
                        dataQuery={{ careerQuery }}
                        Formik={Formik}
                        itemList={adminAddArtistListItems}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptionss}
                        // selectHandler={{ Career: careerHandleChange }}
                      />
                    </div>
                  </div>
                </li>

                <li className="ml-6 ">
                  <AdminFormDoneIcon
                    preDone={
                      artistImage &&
                      Object.keys(Formik.errors).length === 0 &&
                      date.DateBirth !== "" &&
                      selectedOptions.career.length !== 0
                    }
                  />
                </li>
              </ol>
            </form>
            <div className="flex justify-center ">
              {loadingButton ? (
                <button
                  type="button"
                  class="inline-flex items-center px-10 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow cursor-not-allowed bg-blue-800"
                  disabled=""
                >
                  <svg
                    class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
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
                  Loading...
                </button>
              ) : (
                <button
                  onClick={SubmitHandler}
                  className={
                    artistImage &&
                    Object.keys(Formik.errors).length === 0 &&
                    date.DateBirth !== "" &&
                    selectedOptions.career.length !== 0
                      ? "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                      : "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                  }
                  type="submit"
                  disabled={
                    artistImage &&
                    Object.keys(Formik.errors).length !== 0 &&
                    date.DateBirth === "" &&
                    selectedOptions.career.length === 0
                  }
                >
                  DONE !
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(AddArtist);
