import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginForm = ({ Formik, loginUserHandler, loadingButton }) => {
  const [showPassword, setShowPassword] = useState("");

  return (
    <div className="w-full  flex justify-center xl:justify-start  ">
      <div className="item-center self-center ">
        <p className="text-sm opacity-70">Welcome back !</p>
        <h1 className="font-extrabold text-[39px] ">Login</h1>
        <p className="text- opacity-70  mt-3">Please enter your details.</p>

        <form>
          <div className="flex justify-center">
            <div>
              <input
                {...Formik.getFieldProps("email")}
                type="text"
                disabled={loadingButton && true}
                placeholder="Enter your email or mobile"
                className={`flex  px-5 flex-col outline-none
         focus:ring-2 duration-150 focus:ring-btn justify-center
          text-textLight dark:text-textDark bg-white
           dark:bg-[#323645] shadow-md  my-1 rounded-2xl 
           mt-5  h-[58px] w-[90vw] md:w-[440px] ${
             loadingButton && "cursor-not-allowed"
           } `}
              />
              {Formik.errors.email && Formik.touched.email && (
                <div className="text-red-600 text-sm font-bold mx-4 ">
                  {Formik.errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <div
                className="flex justify-between  focus-within:ring-2 ring-btn duration-150 my-1  mt-2 shadow-md rounded-2xl bg-white
           dark:bg-[#323645]  w-[90vw] md:w-[440px] "
              >
                <div className={` w-full`}>
                  <div>
                    <input
                      disabled={loadingButton && true}
                      {...Formik.getFieldProps("password")}
                      type={showPassword === "password" ? "text" : "password"}
                      placeholder="Enter your  password"
                      className={` ${
                        loadingButton && "cursor-not-allowed"
                      } flex  w-full px-5 flex-col outline-none bg-transparent rounded-2xl justify-center text-textLight dark:text-textDark     h-[58px]`}
                    />
                  </div>
                </div>
                <div className=" flex  pr-5  h-[58px] ">
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
              {Formik.errors.password && Formik.touched.password && (
                <div className="text-red-600 text-sm font-bold mx-4 ">
                  {Formik.errors.password}
                </div>
              )}
            </div>
          </div>

          {/* login button */}
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
                type="submit"
                disabled={
                  Formik.errors.email || Formik.errors.password ? true : false
                }
                onClick={loginUserHandler}
                className={`${
                  Formik.errors.email || Formik.errors.password
                    ? "bg-gray-500 cursor-not-allowed opacity-80 "
                    : "hover:bg-blue-800 bg-btn cursor-pointer"
                }  outline-none text-white px-5  duration-300 justify-center  font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] w-[90vw] md:w-[440px] `}
                value={"Login"}
              />
            )}
          </div>
        </form>

        {/* forget password button */}
        <Link to={"/login/forgotpassword"}>
          <p className="text-btn mt-3 font-semibold cursor-pointer text-[16px] ">
            Forgot Password ?
          </p>
        </Link>

        {/* singup button */}
        <p className=" mx-1 text-[16px]">
          Not registered yet ?
          <span className="text-btn m-1 font-semibold  text-[18px] ">
            <Link to={"/singup"}>Sing up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
