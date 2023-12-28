import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { withRouter } from "react-router-dom";
import {
  useActiveAccountMutation,
  useSubmitOtp2ForForgotPasswordMutation,
} from "../../../redux/services/movieDatabase";
import toast from "react-hot-toast";

const VerifyEmail = ({
  setSwichBetweenFormAndVerify,
  userEmail,
  history,
  action,
  from,
  setSwichBetweenCreateAndVerify,
  setOPT,
}) => {
  const [activeAccountMutation] = useActiveAccountMutation();
  const [useSubmitOtpPass] = useSubmitOtp2ForForgotPasswordMutation();
  const [loadingButton, setLoadingButton] = useState(false);
  const itemsRef = useRef([]);

  const initialValues = {
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
    digit5: "",
  };

  const [correctCode, setCorrectCode] = useState(0);
  const Formik = useFormik({
    initialValues,
    // validationSchema,
    // validateOnMount: true,
  });
  const codeChangeHandler = (event, item) => {
    if (correctCode === -1) setCorrectCode(0);

    const { value } = event.target;
    Formik.setFieldValue(item, value);
    const element = event.target;
    const nextSibling = element.nextElementSibling;
    const backSibling = element.previousElementSibling;

    if (item !== "digit5" && value !== "") {
      nextSibling ? nextSibling.focus() : element.blur();
    }
    if (value === "" && item !== "digit1") {
      backSibling ? backSibling.focus() : element.blur();
    }
  };

  const verifyEmailHandler = () => {
    // setLoadingButton(true);
    let opt =
      Formik.values.digit1 +
      Formik.values.digit2 +
      Formik.values.digit3 +
      Formik.values.digit4 +
      Formik.values.digit5;
    const formData = new FormData();
    formData.append("Otp", opt.toString());
    formData.append("Email", userEmail);
    if (from === "forgotPasswordForm") {
      useSubmitOtpPass(formData)
        .unwrap()
        .then((res) => {
          if (!res.isSuccessFull) {
            setCorrectCode(-1);
            toast.error(res.message, {
              autoClose: 2100,
              position: "top-right",
            });
          }
          if (res.isSuccessFull) {
            setCorrectCode(1);
            toast.success(res.message, {
              autoClose: 2100,
              position: "top-right",
            });

            setOPT(
              Formik.values.digit1 +
                Formik.values.digit2 +
                Formik.values.digit3 +
                Formik.values.digit4 +
                Formik.values.digit5
            );
            setTimeout(() => setSwichBetweenCreateAndVerify(true), 300);
          }
        });
    }
    if (from !== "forgotPasswordForm") {
      activeAccountMutation(formData)
        .unwrap()
        .then((res) => {
          if (!res.isSuccessFull) {
            setCorrectCode(-1);
            toast.error(res.message, {
              autoClose: 2100,
              position: "top-right",
            });
          }
          if (res.isSuccessFull) {
            setCorrectCode(1);
            toast.success(res.message, {
              autoClose: 2100,
              position: "top-right",
            });
            if (from === "login") {
              // setlogin(9);
              setTimeout(() => history.push("/"), 300);
            }
            if (from === "singUp") {
              // setlogin(78)
              setTimeout(() => history.push("/"), 300);
            }
          }
        });
    }
  };
  const [counter, setCounter] = React.useState(120);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="w-full z-[5] flex justify-center xl:justify-start  ">
      <div className="item-center self-center ">
        {/*  verify by email form */}
        <div className="flex">
          <button
            onClick={() => setSwichBetweenFormAndVerify(false)}
            className="font-extrabold text-[30px] p-[5px] mt-3 self-center mx-2 border-2 opacity-40 rounded-xl "
          >
            <HiArrowNarrowLeft />
          </button>
          <h1 className="font-extrabold text-[30px] md:text-[36px] mt-3  ">
            Verify your email
          </h1>
        </div>
        <div className="text-center w-[350px] justify-center flex  mt-2 opacity-75 ">
          <p className=" mx-1">
            Please enter the 4 digit code sent{" "}
            <p className="text-btn font-semibold  text-[16px] ">
              <span className="text-textDark font-normal opacity-75">to </span>
              {userEmail}
            </p>
          </p>
        </div>

        <div>
          <div>
            <div className="flex justify-center w-[350px] gap-2">
              {Object.keys(Formik.initialValues).map((item, index) => (
                <input
                  key={index}
                  ref={(ref) => itemsRef.current.push(ref)}
                  onChange={(event) => codeChangeHandler(event, item)}
                  autoFocus={index === 0 && true}
                  type="tel"
                  placeholder="-"
                  className={`flex ${
                    correctCode === 1
                      ? "ring-2 ring-green-500"
                      : correctCode === -1
                      ? "ring-2 ring-red-500 focus:ring-[3px] focus:ring-red-500 "
                      : ""
                  }  h-[80px] y9:h-[88px] w-[55px] ring y9:w-[69px] text-[35px] text-center px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  `}
                  maxLength={1}
                />
              ))}
            </div>
            {counter === 0 ? (
              <div className="flex m-3">
                <p className="text-[15px] opacity-75 self-center font-semibold">
                  {" "}
                  didnt recive code?
                </p>
                <button
                  disabled={counter !== 0}
                  onClick={() => {
                    action();
                    setCounter(120);
                  }}
                  className={` ${
                    counter === 0 ? "text-btn" : "cursor-not-allowed"
                  } block mx-1  opacity-90 font-semibold underline`}
                >
                  Resend Code
                </button>
              </div>
            ) : (
              <div className="flex justify-center m-3 text-center">
                <p className="opacity-75 self-center font-semibold">
                  {" "}
                  Resend the code in{" "}
                  <p className="text-btn font-extrabold mx-3 text-[19px]">
                    {counter} {counter <= 1 ? "second" : "seconds"}
                  </p>{" "}
                </p>
              </div>
            )}

            <div className="flex flex-col ">
              <div className="flex justify-center">
                {loadingButton ? (
                  <button
                    className={`h-[50px]  w-[350px] cursor-not-allowed outline-none px-5 text-white hover:bg-blue-800 duration-300 justify-center bg-btn font-bold text-lg shadow-md  my-1 rounded-2xl mt-5   `}
                  >
                    <div className="flex justify-center">
                      <div className="self-center">
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
                      </div>
                      <p>Loading...</p>
                    </div>
                  </button>
                ) : (
                  <button
                    disabled={
                      Formik.values.digit1 === "" ||
                      Formik.values.digit2 === "" ||
                      Formik.values.digit3 === "" ||
                      Formik.values.digit4 === "" ||
                      Formik.values.digit5 === ""
                        ? true
                        : false
                    }
                    onClick={() => verifyEmailHandler()}
                    className={`${
                      Formik.values.digit1 === "" ||
                      Formik.values.digit2 === "" ||
                      Formik.values.digit3 === "" ||
                      Formik.values.digit4 === "" ||
                      Formik.values.digit5 === ""
                        ? "bg-gray-500 cursor-not-allowed opacity-80 "
                        : "hover:bg-blue-800 bg-btn cursor-pointer"
                    }   h-[50px] w-[90vw] text-center se:w-[350px] outline-none px-5 text-white  duration-300 justify-center font-bold text-lg shadow-md  my-1 rounded-2xl mt-5   `}
                    // type="submit"
                    // value={"Confirm"}
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(VerifyEmail);
