import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useSubmitOtpForForgotPasswordMutation } from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const CreatePasswordFrom = ({ Formik, email, history, otp }) => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState("");
  const [submitOtpForForgotPasswordMutation] =
    useSubmitOtpForForgotPasswordMutation();
  const submitOtpForForgotPasswordHandler = () => {
    setLoadingButton(true);
    submitOtpForForgotPasswordMutation({
      email,
      password: Formik.values.newPassword,
      confirmPassword: Formik.values.confirmPassword,
      otp,
    })
      .unwrap()
      .then((res) => {
        setLoadingButton(false);
        if (res.isSuccessFull) {
          toast.success(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
          history.push("/");
        }
      });
  };
  return (
    <div className="w-full z-[5] flex justify-center xl:justify-start  ">
      <form className="item-center self-center ">
        <h1 className="font-extrabold text-[39px] ">Create New Password</h1>
        <p className="text- opacity-70  mt-3">
          Your New Password Must Be Differnt
        </p>
        <p className="text- opacity-70  ">form Previously Used Passord.</p>

        {/*  form */}
        <div>
          <div className="flex justify-center">
            <input
              disabled={loadingButton}
              {...Formik.getFieldProps("newPassword")}
              type={showPassword === "password" ? "text" : "password"}
              placeholder="Enter your password"
              className={`${
                loadingButton && "cursor-not-allowed"
              } flex  px-5 flex-col w-[90vw] md:w-[440px] outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px]  `}
            />
            <div className=" flex  relative h-[58px] inset-y-[20px] -inset-x-[35px]">
              {showPassword === "password" ? (
                <MdRemoveRedEye
                  onClick={() => setShowPassword("")}
                  className="text-[20px] self-center  cursor-pointer"
                />
              ) : (
                <RiEyeCloseLine
                  onClick={() => setShowPassword("password")}
                  className="text-[18px] self-center cursor-pointer"
                />
              )}
            </div>
          </div>
          {Formik.errors.newPassword && Formik.touched.newPassword && (
            <div className="text-red-600 text-sm font-bold mx-4 ">
              {Formik.errors.newPassword}
            </div>
          )}
        </div>
        <div>
          <div className="flex">
            <input
              disabled={loadingButton}
              {...Formik.getFieldProps("confirmPassword")}
              type={showPassword === "confirm" ? "text" : "password"}
              placeholder="Enter your confirm password"
              className={`${
                loadingButton && "cursor-not-allowed"
              } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px] w-[90vw] md:w-[440px] `}
            />
            <div className=" flex  relative h-[58px] inset-y-[20px] -inset-x-[35px]">
              {showPassword === "confirm" ? (
                <MdRemoveRedEye
                  onClick={() => setShowPassword("")}
                  className="text-[20px] self-center  cursor-pointer"
                />
              ) : (
                <RiEyeCloseLine
                  onClick={() => setShowPassword("confirm")}
                  className="text-[18px] self-center cursor-pointer"
                />
              )}
            </div>
          </div>
          {Formik.errors.confirmPassword && Formik.touched.confirmPassword && (
            <div className="text-red-600 text-sm font-bold mx-4 ">
              {Formik.errors.confirmPassword}
            </div>
          )}
        </div>
        {/* send code button */}
        <div className="text-center flex ">
          {loadingButton ? (
            <button
              className={` outline-none w-[90vw] md:w-[440px] cursor-not-allowed text-white px-5  duration-300 justify-center bg-btn font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] `}
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
            <input
              disabled={
                Formik.errors.newPassword || Formik.errors.confirmPassword
                  ? true
                  : false
              }
              onClick={submitOtpForForgotPasswordHandler}
              className={`${
                Formik.errors.newPassword || Formik.errors.confirmPassword
                  ? "bg-gray-500 cursor-not-allowed opacity-80 "
                  : "hover:bg-blue-800 bg-btn cursor-pointer"
              }  outline-none text-white px-5  duration-300 justify-center  font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] w-[90vw] md:w-[440px] `}
              type="submit"
              value={"Save"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default withRouter(CreatePasswordFrom);
