import React, { useState } from "react";
import { BsImageFill, BsJournalText } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormItem from "../../../../common/FormItem";
import { useAddLanguageMutation } from "../../../../redux/services/movieDatabase";
import { Link, withRouter } from "react-router-dom";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddOthersListItems } from "../../../../constans";
import toast from "react-hot-toast";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";

const AddLanguage = ({ history }) => {
  const initialValues = {
    title: "",
  };
  const [addNewLanguage] = useAddLanguageMutation();
  const [loadingButton, setLoadingButton] = useState(false);

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
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("title", Formik.values.title);
    addNewLanguage(formData)
      .unwrap()
      .then((r) => {
        toast.success(`${Formik.values.title} add to Language `, {
          autoClose: 1100,
          position: "top-right",
        });

        setTimeout(() => history.push("languageslist"), 800);
      })
      .then((error) => {
        console.log(error);
        setLoadingButton(false);
      });
  };
  return (
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addnewlanguage", value: "New Language" }]}
      />
      <div className=" my-10 h-screen  mx-6 sm:mx-10 md:mx-28">
        <div className="text-[23px] font-bold mt-10 mb-6 ">
          Add New Language{" "}
        </div>
        <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
          <div className="">
            <form className="" onSubmit={SubmitHandler}>
              <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                  <div className="absolute flex text-screenLight items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 ">
                    <BsJournalText className="font-bold text-[20px] " />
                  </div>

                  <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                    Language Info
                  </h3>
                  <div className="">
                    <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                      <div className="flex  flex-col sm:flex-row justify-center  sm:gap-6 ">
                        <AdminAddItemList
                          Formik={Formik}
                          itemList={adminAddOthersListItems}
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li className="ml-6 ">
                  <AdminFormDoneIcon
                    preDone={Formik.values.title === "" ? false : true}
                  />{" "}
                  <div className="flex justify-center ">
                    <div></div>
                  </div>
                </li>
              </ol>
            </form>
            <div className="flex sm:pl-10 justify-center ">
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
                    Formik.errors.title
                      ? "bg-[#787f98] cursor-not-allowed text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                      : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                  }
                  type="submit"
                  disabled={Formik.errors.title ? true : false}
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

export default withRouter(AddLanguage);
