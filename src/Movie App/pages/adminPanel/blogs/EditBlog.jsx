import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import React, { useEffect, useState } from "react";
import AddGenreCover from "./AddBlogCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useEditGenreAdminPanelMutation,
  useGetBlogForEditInAdminPanelQuery,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import AdminFromBodyInfo from "../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../common/adminPanel/AdminAddItemList";
import { adminAddOthersListItems } from "../../../constans";
import { toast } from "react-hot-toast";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";

const EditBlog = ({ history }) => {
  let { setqw } = useStateContext();

  const [value, setValue] = useState("");
  const { data } = useGetBlogForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const [switchPreview, setswitchPreview] = useState(true);

  const [blogCover, setBlogCover] = useState(null);
  const initialValues = {
    title: "",
    timeforread: "",
  };
  const [inputs, setInputes] = useState({
    Title: "",
    autor: "",
    TimeForRead: "",
    createdAt: "",
    labels: "",
  });
  useEffect(() => {
    data &&
      setInputes({
        Title: data.data.tittle,
        autor: data.data.autor,
        TimeForRead: data.data.readingTime,
        createdAt: data.data.createdAt,
        labels: data.data.labels,
      });
    setValue(data?.data.description);
    setBlogCover(data?.data.image);
  }, [data]);
  const [loadingButton, setLoadingButton] = useState(false);
  const [editBlog] = useEditGenreAdminPanelMutation();
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
    formData.append("Id", data.data.id);
    formData.append("Tittle", inputs.Title);
    formData.append("Image", blogCover);
    formData.append("Description", value);
    formData.append("Labels", "mahdi asgary");
    formData.append("ReadingTime", inputs.TimeForRead);

    editBlog(formData)
      .unwrap()
      .then((r) => {
        setqw(Math.random());
        setLoadingButton(false);
        toast.success(`Edit successfully`, {
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
    <div>
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[
          { path: "/admin/bloglist", value: "Blogs" },
          { path: "#", value: "Edit" },
        ]}
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
                          inputs={inputs}
                          changeInput={setInputes}
                          Formik={Formik}
                          itemList={adminAddOthersListItems}
                          from={"edit"}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center pt-8 mx-3">
                      <div className=" min-w-[200px] w-full  dark:bg-[#1c1d21] dark:bg-opacity-50 bg-white border-0 rounded-2xl">
                        <ReactQuill
                          style={{ border: "none" }}
                          className="border-0 "
                          theme="snow"
                          modules={{
                            toolbar: [
                              [{ header: "1" }, { header: "2" }, { font: [] }],
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
              <p onClick={SubmitHandler}>5555555</p>
            </div>
          </section>
        ) : (
          <div className="mt-20">
            <div>
              <img
                alt="not found"
                src={
                  typeof blogCover === "string"
                    ? "https://localhost:7175/images/" + blogCover
                    : blogCover
                    ? URL.createObjectURL(blogCover)
                    : ""
                }
                className="w-full rounded-xl "
              />
              <div className="flex justify-between mt-8">
                <p className="text-gray-500 flex self-center  text-sm">
                  {/* <RiTimerFill className="text-[18px]   self-center" />{" "} */}
                  {inputs.createdAt?.split("T")[0]}
                </p>
                <p className="text-gray-500 flex self-center  text-sm">
                  <RiTimerFill className="text-[18px]   self-center" />{" "}
                  {inputs.TimeForRead} min
                </p>
              </div>
            </div>
            <p className="text-[23px]  mt-4 font-semibold">{inputs?.Title}</p>
            <div className="font-">
              <div
                className="mt-10"
                dangerouslySetInnerHTML={{
                  __html:
                    value &&
                    value
                      .replace("ql-font-monospace", "font-mono")
                      .replace("ql-size-large", "text-[18px]")
                      .replace("ql-size-huge", "text-[25px]")
                      .replace("<ul>", " <ul class='list-disc pl-8'	/>")
                      .replace("<ol>", " <ul class='list-decimal pl-8'	/>")
                      .replace("</ol>", "</ul>")
                      .replace("ql-align-center", "text-center")
                      .replace("ql-align-right", "text-end"),
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(EditBlog);
