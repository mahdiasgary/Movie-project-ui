import React, { useRef, useState } from "react";
import a from "../login/Screenshot (168).png";
import b from "../login/Most-Expensive-Movies-Ever-Made.png";
import SingupForm from "../../../components/singup login/singup/SingupForm";
import VerifyEmail from "../../../components/singup login/verify email/VerifyEmail";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "../../../redux/services/movieDatabase";
import * as Yup from "yup";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { withRouter } from "react-router-dom";
import toast from "react-hot-toast";

const SingupPage = ({ history }) => {
  const [useRegisterUser] = useRegisterUserMutation();
  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { loginStatus } = useStateContext();
  if (loginStatus?.isSuccessFull) history.push("/profile");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("user@example.com").required("Email is required"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum"),
    confirmPassword: Yup.string("Please retype your password.")
      .required("Please retype your password.")
      .oneOf([Yup.ref("password")], "Your passwords do not match."),
    mobile: Yup.string()
      .required("Please retype your mobile")
      .min(11, "Mobile number should be 11 numbers"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const userRegister = () => {
    setLoadingButton(true);
    setUserEmail(Formik.values.email);
    const formData = new FormData();
    formData.append(
      "Username",
      `${Formik.values.firstName} ${Formik.values.lastName}`
    );
    formData.append("Email", Formik.values.email);
    formData.append("Password", Formik.values.password);
    formData.append("ConfirmPassword", Formik.values.confirmPassword);
    formData.append("Mobile", Formik.values.mobile);
    useRegisterUser(formData)
      .unwrap()
      .then((res) => {
        setLoadingButton(false);
        console.log(res);

        if (res.isSuccessFull && res.status === "EmailSend") {
          setSwichBetweenFormAndVerify(true);
          toast.success(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
        if (!res.isSuccessFull && res.status === "UserExist") {
          toast.error(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
      });
  };
  return (
    <div className="w-full min-h-[1000px]  bg-[#f9f9f9] dark:bg-[#282a37] text-white">
      <div className=" z-[5] absolute py-20 xl:px-32 flex xl:justify-start justify-center w-full text-textLight dark:text-white">
        {swichBetweenFormAndVerify ? (
          <VerifyEmail
            from={"singUp"}
            userEmail={userEmail}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            action={userRegister}
          />
        ) : (
          <SingupForm
            Formik={Formik}
            loadingButton={loadingButton}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            userRegister={userRegister}
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

export default withRouter(SingupPage);
