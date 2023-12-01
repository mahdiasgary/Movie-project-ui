import React, { useEffect, useState } from "react";
import AddArtistCover from "./AddArtistCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
import {
  useAdminArtistUserMutation,
  useGetArtistForEditInAdminPanelQuery,
  useGetCareerListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddArtistListItems } from "../../../../constans";
import toast from "react-hot-toast";
const EditArtist = ({ history }) => {
  const { data } = useGetArtistForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const [correctPage, setCorrectPage] = useState(1);
  const [search, setSearch] = useState("");
  const careerQuery = useGetCareerListInAdminPanelQuery(
    { searchkey: search, page: correctPage },
    { refetchOnMountOrArgChange: true }
  );
  const [inputs, setInputs] = useState({
    Name: data?.data.name,
    summary: "",
    datebirth: "",
  });
  const [date, setDate] = useState({
    DateBirth: data?.data.birthDate.split("T")[0],
  });
  const [editArtist] = useAdminArtistUserMutation();
  const [artistImage, setArtistImage] = useState(data?.data.imageName);
  const [artistImageIni, setArtistImageIni] = useState(data?.data.imageName);
  useEffect(() => {
    setInputs({
      Name: data?.data.name,
      summary: data?.data.bio,
      datebirth: "",
    });
    setDate({
      DateBirth: data?.data.birthDate.split("T")[0],
    });
    setArtistImage(data?.data.imageName);
    setArtistImageIni(data?.data.imageName);
  }, [data]);

  // console.log(data)
  const initialValues = {
    name: "",
    datebirth: "",
    summary: "",
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptions, setSelectedOptionss] = useState({
    career: [
      { id: 1, title: "h sff" },
      { id: 1, title: "sffh" },
      { id: 1, title: "ewkfh" },
    ],
  });
  const careerHandleChange = (selectedOptions) => {};
  const Formik = useFormik({
    initialValues,
    validateOnMount: true,
  });

  const SubmitHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("id", window.location.search.split("=")[1]);
    formData.append("name", inputs["Name"]);
    formData.append("birthDate", date.DateBirth);
    formData.append("bio", inputs["summary"]);
    formData.append(
      artistImage !== artistImageIni ? "image" : "ImageName",
      artistImage
    );

    for (let i = 0; i < selectedOptions.career.length; i++) {
      formData.append("selectedCareerIds", selectedOptions.career[i].id);
    }
    editArtist(formData)
      .unwrap()
      .then((r) => {
        if (r.isSuccessFull) {
          toast.success("Successfully Edited!", {
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
        setTimeout(() => history.push("artistslist"), 200);
      })
      .then((error) => {});
  };

  return data ? (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Artist </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form className="" onSubmit={SubmitHandler}>
            <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <AddArtistCover
                artistImage={artistImage}
                setArtistImage={setArtistImage}
                editProccss={true}
                artistImageIni={artistImageIni}
              />

              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                <AdminFromBodyInfo
                  preInfo={true}
                  thirdPreInfo={false}
                  scondePreInfo={true}
                />

                <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                  Artist Info
                </h3>
                <div className="">
                  <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                    <AdminAddItemList
                      inputs={inputs}
                      changeInput={setInputs}
                      datePiker={{ date, setDate }}
                      dataQuery={{ careerQuery }}
                      Formik={Formik}
                      itemList={adminAddArtistListItems}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptionss}
                      selectHandler={{ Career: careerHandleChange }}
                      from={"edit"}
                    />
                  </div>
                </div>
              </li>

              <li className="ml-6 ">
                <AdminFormDoneIcon preDone={true} />
              </li>
            </ol>
          </form>
          <div className="flex justify-center ">
            {loadingButton ? (
              <button
                type="button"
                class="inline-flex items-center px-10 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow cursor-pointer bg-blue-800"
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
                  Object.keys(Formik.errors).length > 0
                    ? "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                    : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                }
                type="submit"
                disabled={Object.keys(Formik.errors).length > 0 ? true : false}
              >
                DONE !
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="flex h-screen justify-center">
      <div className="flex mt-20 text-[19px]">
        <svg
          class="w-5 h-5 mt-2 mr-2 -ml-1 text-btn animate-spin"
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
        please be patient
      </div>
    </div>
  );
};

export default withRouter(EditArtist);
