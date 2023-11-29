import React, { useState } from "react";
import AddGenreCover from "./AddGenreCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddGenreMutation } from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import AdminFromBodyInfo from "../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../common/adminPanel/AdminAddItemList";
import { adminAddOthersListItems } from "../../../constans";
import { toast } from "react-hot-toast";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

const AddGenre = ({ history }) => {
  const [genreCover, setGenreCover] = useState(null);
  const initialValues = {
    title: "",
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [addNewGenre] = useAddGenreMutation();
  const validationSchema = Yup.object({
    title: Yup.string().required("title is requried"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const SubmitHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("title", Formik.values.title);
    formData.append("image", genreCover);

    addNewGenre(formData)
      .unwrap()
      .then((r) => {
        // toast.success(`${Formik.values.title} add to Genres `, {
        //   autoClose: 1100,
        //   position: "top-right",
        // });
        toast.success(`${Formik.values.title} add to Genres `, {
          // position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          }})
        // toast.custom(
        //   <div>
        //     <Toast>
        //       <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        //         <HiCheck className="h-5 w-5" />
        //       </div>
        //       <div className="ml-3 text-sm font-normal">
        //         {Formik.values.title} add to Genres{" "}
        //       </div>
        //       <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
        //     </Toast>
        //   </div>,
        //   { }
        // );
        history.push("genreslist")
        // setTimeout(() => history.push("genreslist"), 800);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Genre </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form className="" onSubmit={SubmitHandler}>
            <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <AddGenreCover
                genreCover={genreCover}
                setGenreCover={setGenreCover}
              />
              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                <AdminFromBodyInfo
                  preInfo={genreCover}
                  thirdPreInfo={Formik.values.title === "" ? false : true}
                />
                <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                  Genre Info
                </h3>
                <div className="">
                  <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                    <AdminAddItemList
                      Formik={Formik}
                      itemList={adminAddOthersListItems}
                    />
                  </div>
                </div>
              </li>

              <li className="ml-6 ">
                <AdminFormDoneIcon
                  preDone={
                    Formik.values.title !== "" && genreCover ? true : false
                  }
                />
                <div className="flex justify-center ">
                  <div></div>
                </div>
              </li>
            </ol>
          </form>
          <div className="flex justify-center ">
            {loadingButton ? (
              <button
                type="button"
                class="inline-flex cursor-not-allowed items-center px-10 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow  bg-blue-800"
                disabled={true}
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
                  Formik.errors.title
                    ? "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                    : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                }
              >
                DONE !
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AddGenre);
