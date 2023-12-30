import React, { useState } from "react";
import a from "./Screenshot (168).png";
import b from "./Most-Expensive-Movies-Ever-Made.png";
import LoginForm from "../../../components/singup login/login/LoginForm";
import { useFormik } from "formik";
import {
  useGetLoginStatusQuery,
  useLoginUserMutation,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";

import VerifyEmail from "../../../components/singup login/verify email/VerifyEmail";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import toast from "react-hot-toast";

const LogInPage = ({ history }) => {
  const [LoginUser] = useLoginUserMutation();
  const { loginStatus, setlogin } = useStateContext();
  if (loginStatus?.isSuccessFull) history.push("/profile");

  const [userEmail, setUserEmail] = useState("");
  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("user@example.com").required("Email is required"),
    password: Yup.string().required("No password provided"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const loginUserHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("Input", Formik.values.email);
    formData.append("Password", Formik.values.password);
    LoginUser(formData)
      .unwrap()
      .then((res) => {
        setLoadingButton(false);

        if (!res.isSuccessFull && res.status === "NotFound") {
          setLoadingButton(false);
          toast.error(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
        if (res.isSuccessFull && res.status === "Success") {
          setlogin(8);
          history.push("/");
          toast.success(res.data + res.message, {
            autoClose: 2100,
            position: "top-right", style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
        if (!res.isSuccessFull && res.status === "UserAccountIsNotActive") {
          toast.info(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
          setUserEmail(res.data);
          setSwichBetweenFormAndVerify(true);
        }
        if (!res.isSuccessFull && res.status === "UserORPasswrodIsWrong") {
          setLoadingButton(false);
          toast.error(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
      });
  };
  return (
    <div className="w-full h-screen bg-[#f9f9f9] dark:bg-[#282a37] text-white">
      <div className=" z-[5] absolute py-20 xl:px-32 flex xl:justify-start justify-center w-full text-textLight dark:text-white">
        {/* log in form and verify email */}
        {!swichBetweenFormAndVerify ? (
          <LoginForm
            Formik={Formik}
            loginUserHandler={loginUserHandler}
            setLoadingButton={setLoadingButton}
            loadingButton={loadingButton}
          />
        ) : (
          <VerifyEmail
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            userEmail={userEmail}
            from={"login"}
            action={loginUserHandler}
          />
        )}
      </div>

      {/* log in image background */}
      {localStorage.getItem("DarkMode") === "dark" ? (
        <img
          className="opacity-60  h-screen hidden  md:flex   fixed right-0 top-0 z-[0] "
          src={a}
          alt=""
        />
      ) : (
        <img
          className="opacity-60  h-screen dark:hidden hidden  md:flex fixed right-0 top-0 z-[0] "
          src={b}
          alt="q"
        />
      )}
    </div>
  );
};

export default withRouter(LogInPage);
