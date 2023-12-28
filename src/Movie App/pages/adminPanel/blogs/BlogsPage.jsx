import ReactQuill from "react-quill";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
import React, { useState } from "react";
import AddGenreCover from "./AddBlogCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddGenreAdminPanelMutation } from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import AdminFromBodyInfo from "../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../common/adminPanel/AdminAddItemList";
import { adminAddBlogListItems } from "../../../constans";
import { toast } from "react-hot-toast";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const BlogsPage = ({ history }) => {
  const [value, setValue] = useState("");

  const [switchPreview, setswitchPreview] = useState(false);

  const [blogCover, setBlogCover] = useState(null);
  const initialValues = {
    title: "",
    timeforread: "",
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [addNewBlog] = useAddGenreAdminPanelMutation();
  const validationSchema = Yup.object({
    title: Yup.string().required("title is requried"),
    timeforread: Yup.string().required("time is requried"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const SubmitHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("Tittle", Formik.values.title);
    formData.append("Image", blogCover);
    formData.append("Description", value);
    formData.append("Labels", "mahdi asgary");
    formData.append("ReadingTime", Formik.values.timeforread);

    addNewBlog(formData)
      .unwrap()
      .then((r) => {
        console.log(r);
        setLoadingButton(false);
        setTimeout(() => history.push("bloglist"), 300);

        toast.success(`${Formik.values.title} add to Blogs `, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fa ">
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/addblog", value: "Add blog" }]}
      />
      <div className=" my-10  mx-6 sm:mx-10 min-h-screen pb-36 md:mx-28">
        <div className="text-[23px]  justify-between flex font-bold mt-10 mb-6 ">
          <p>Add New Blog</p>
          <div>
            <button
              onClick={() => setswitchPreview((w) => !w)}
              className="text-base flex duration-200 text-white bg-btn rounded-xl hover:bg-blue-800 py-2 px-3"
            >
              {switchPreview ? (
                <div className="flex">
                  editor <FiEdit className="self-center ml-1" />
                </div>
              ) : (
                <div className="flex">
                  preview <FaEye className="self-center ml-1" />
                </div>
              )}
            </button>
          </div>
        </div>
        {!switchPreview ? (
          <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
            <div className="">
              <form className="" onSubmit={SubmitHandler}>
                <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
                  <AddGenreCover
                    BlogCover={blogCover}
                    setBlogCover={setBlogCover}
                  />
                  <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                    <AdminFromBodyInfo
                      preInfo={blogCover}
                      thirdPreInfo={
                        Formik.values.title === "" || Formik.values.time === ""
                          ? false
                          : true
                      }
                    />
                    <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                      Blog Info
                    </h3>
                    <div className="">
                      <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                        <AdminAddItemList
                          Formik={Formik}
                          itemList={adminAddBlogListItems}
                        />
                      </div>
                    </div>
                    <div className=" flex justify-center pt-8 mx-3">
                      <div className="fa min-w-[200px]  w-full   dark:bg-[#1c1d21] dark:bg-opacity-50 bg-white border-0 rounded-2xl">
                        <ReactQuill
                          style={{ border: "none", "font-family": "Vazirmatn" }}
                          className="border-0 "
                          theme="snow"
                          modules={{
                            toolbar: [
                              [{ header: "1" }, { header: "2" }, { font: [] }],
                              [{ direction: "rtl" }],
                              [
                                { align: "" },
                                { align: "center" },
                                { align: "right" },
                              ],
                              [{ size: [] }],
                              [{ color: ["blue", "red"] }],
                              ["bold", "italic", "underline", "strike"],
                              [{ list: "ordered" }, { list: "bullet" }],
                              ["link", "image", "video"],
                            ],
                            clipboard: {
                              matchVisual: false,
                            },
                          }}
                          value={value}
                          onChange={setValue}
                        ></ReactQuill>
                       
                      </div>
                    </div>
                  </li>

                  <li className="ml-6 ">
                    <AdminFormDoneIcon
                      preDone={
                        Formik.values.title !== "" && blogCover ? true : false
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
        ) : (
          <div className="fa mt-20">
            <div>
              <img
                alt="not found"
                src={blogCover && URL.createObjectURL(blogCover)}
                className="w-full rounded-xl "
              />
              <div className="flex justify-between mt-8">
                <p className="text-[23px] font-semibold">
                  {Formik.values.title}
                </p>
                <p className="self-center">
                  {" "}
                  {Formik.values.timeforread} minites
                </p>
              </div>
            </div>
            <div className="font- ">
              <div
                className="mt-10 fa"
                dangerouslySetInnerHTML={{
                  __html: value
                    .replace("ql-font-monospace", " font-mono")
                    .replace("ql-size-large", "text-[18px]")
                    .replace("ql-size-huge", "text-[25px]")
                    .replace("<ul>", " <ul class='list-disc'	/>")
                    .replace("<ol>", " <ul class='list-decimal'	/>")
                    .replace("</ol>", "</ul>")
                    .replace("ql-align-center", "fa text-center")
                    .replace("ql-align-right", "text-end"),
                  // .replace("ql-align-center", "text-center"),
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(BlogsPage);
