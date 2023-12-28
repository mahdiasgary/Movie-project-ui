import React, { useState } from "react";
import a from "./Screenshot (168).png";
import b from "./Most-Expensive-Movies-Ever-Made.png";
import ForgetPasswordForm from "../../../components/singup login/login/ForgetPasswordForm";
import VerifyEmail from "../../../components/singup login/verify email/VerifyEmail";
import { useFormik } from "formik";
import CreatePasswordFrom from "../../../components/singup login/login/CreatePasswordFrom";
import {
  useSendEmailForForgotPasswordMutation,
  useSubmitOtpForForgotPasswordMutation,
} from "../../../redux/services/movieDatabase";
import * as Yup from "yup";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const initialValues = {
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  };
  const [OPT, setOTP] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email("user@example.com").required("Email is required"),
    newPassword: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "One Uppercase, One Lowercase, One Number"
      ),
    confirmPassword: Yup.string("Please retype your password.")
      .required("Please retype your password.")
      .oneOf([Yup.ref("newPassword")], "Your passwords do not match."),
  });

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const [loadingButton, setloadingButton] = useState(false);

  const [ForForgotPassword] = useSendEmailForForgotPasswordMutation();
  const sendEmailForForgotPasswordHandler = () => {
    const formData = new FormData();
    formData.append("Email", Formik.values.email);
    ForForgotPassword(formData)
      .unwrap()
      .then((res) => {
        setloadingButton(false);
        if (res.isSuccessFull && res.status === "EmailSend") {
          setSwichBetweenFormAndVerify(true);
          toast.success(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
        if (!res.isSuccessFull && res.status === "UserNotfound") {
          toast.error(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
      });
  };

  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(false);
  const [swichBetweenCreateAndVerify, setSwichBetweenCreateAndVerify] =
    useState(false);
  return (
    <div className="w-full h-screen bg-[#f9f9f9] dark:bg-[#282a37] text-white">
      <div className=" z-[5] absolute py-20 xl:px-32 flex xl:justify-start justify-center w-full text-textLight dark:text-white">
        {swichBetweenFormAndVerify ? (
          swichBetweenCreateAndVerify ? (
            <CreatePasswordFrom
              otp={OPT}
              Formik={Formik}
              email={Formik.values.email}
            />
          ) : (
            <VerifyEmail
              setOPT={setOTP}
              userEmail={Formik.values.email}
              setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
              setSwichBetweenCreateAndVerify={setSwichBetweenCreateAndVerify}
              from={"forgotPasswordForm"}
              action={sendEmailForForgotPasswordHandler}
            />
          )
        ) : (
          <ForgetPasswordForm
            setloadingButton={setloadingButton}
            loadingButton={loadingButton}
            Formik={Formik}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            sendEmailForForgotPasswordHandler={
              sendEmailForForgotPasswordHandler
            }
          />
        )}

        {/* log in image background */}
        {localStorage.getItem("DarkMode") === "dark" ? (
          <img
            className="opacity-60  h-screen  hidden  md:flex fixed right-0 top-0 z-[0] "
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
    </div>
  );
};

export default ForgotPasswordPage;
