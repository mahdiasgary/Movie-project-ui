import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const SingupForm = ({
  Formik,
  setSwichBetweenFormAndVerify,
  userRegister,
  loadingButton,
}) => {
  const [showPassword, setShowPassword] = useState("");
  return (
    <div className="w-full  flex justify-center xl:justify-start ">
      <div className="item-center self-center ">
        {/* sing up form */}
        <div className="mx-12 y9:mx-0 ">
          <p className="text-sm opacity-70">Welcome to world of movies !</p>
          <h1 className="font-extrabold text-[30px]  y9:text-[36px] mt-3 ">
            Create new account
          </h1>
          <p className=" mx-1">
            Already A Member ?
            <span className="text-btn font-semibold m-1 text-[18px] ">
              <Link to={"/login"}>Log In</Link>
            </span>
          </p>

          {/* sing up form */}
          {/* <div className="flex justify-center w-full"> */}

          <div className="flex flex-col  md:flex-row md:max-w-[450px] md:gap-2">
            <div>
              <input
                {...Formik.getFieldProps("firstName")}
                type="text"
                disabled={loadingButton && true}
                placeholder="Enter your first name"
                className={` ${
                  loadingButton && "cursor-not-allowed"
                } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px] w-[90vw] md:w-[212px]  `}
              />
              {Formik.errors.firstName && Formik.touched.firstName && (
                <div className="text-red-600 text-sm font-bold mx-4 ">
                  {Formik.errors.firstName}
                </div>
              )}
            </div>
            <div>
              <input
                {...Formik.getFieldProps("lastName")}
                type="text"
                disabled={loadingButton && true}
                placeholder="Enter your last name"
                className={` ${
                  loadingButton && "cursor-not-allowed"
                } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px] w-[90vw] md:w-[220px]  `}
              />
              {Formik.errors.lastName && Formik.touched.lastName && (
                <div className="text-red-600 text-sm font-bold mx-4 ">
                  {Formik.errors.lastName}
                </div>
              )}
            </div>
          </div>
          <form>
            <div className="flex justify-center md:justify-start">
              <div>
                <input
                  {...Formik.getFieldProps("email")}
                  type="email"
                  disabled={loadingButton && true}
                  placeholder="Enter your email address"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px]  w-[90vw] md:w-[440px]  `}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <input
                  {...Formik.getFieldProps("mobile")}
                  type="phone"
                  disabled={loadingButton && true}
                  placeholder="Enter your phone number"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px]  w-[90vw] md:w-[440px]  `}
                />
                {Formik.errors.mobile && Formik.touched.mobile && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.mobile}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <div
                  disabled={loadingButton && true}
                  className="flex justify-between  focus-within:ring-2 ring-btn duration-150 my-1  mt-5 shadow-md rounded-2xl bg-white
           dark:bg-[#323645]  w-[90vw] md:w-[440px] "
                >
                  {" "}
                  <input
                    {...Formik.getFieldProps("password")}
                    type={showPassword === "password" ? "text" : "password"}
                    placeholder="Enter your password"
                    disabled={loadingButton && true}

                    className={` ${
                      loadingButton && "cursor-not-allowed"
                    } flex  px-5 flex-col outline-none  duration-150  justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  rounded-2xl h-[58px]  w-[90vw] md:w-[440px]  `}
                  />
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
            <div className="flex justify-center md:justify-start">
              <div>
                <div
                  className="flex justify-between  focus-within:ring-2 ring-btn duration-150 my-1  mt-5 shadow-md rounded-2xl bg-white
           dark:bg-[#323645]  w-[90vw] md:w-[440px] "
                >
                  {" "}
                  <input
                    {...Formik.getFieldProps("confirmPassword")}
                    type={showPassword === "confirm" ? "text" : "password"}
                    placeholder="Enter your confirm password"
                    disabled={loadingButton && true}

                    className={` ${
                      loadingButton && "cursor-not-allowed"
                    } flex  px-5 flex-col outline-none justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md rounded-2xl h-[58px] w-[440px] `}
                  />
                  <div className=" flex  pr-5  h-[58px] ">
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
                {Formik.errors.confirmPassword &&
                  Formik.touched.confirmPassword && (
                    <div className="text-red-600 text-sm font-bold mx-4 ">
                      {Formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>

            {/* sing up button */}
            <div className="text-center flex justify-center ">
              {loadingButton ? (
                <button
                disabled={true}
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
                  onClick={userRegister}
                  disabled={
                    Object.keys(Formik.errors).length !== 0 ? true : false
                  }
                  className={`${
                    Object.keys(Formik.errors).length !== 0
                      ? "bg-gray-500 cursor-not-allowed opacity-80 "
                      : "hover:bg-blue-800 bg-btn cursor-pointer"
                  }  outline-none text-white px-5  duration-300 justify-center  font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] w-[90vw] md:w-[440px] `}
                  type="submit"
                  value={"Sing Up"}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingupForm;
