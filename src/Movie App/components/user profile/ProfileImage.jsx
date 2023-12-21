import React from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useLoginOutMutation } from "../../redux/services/movieDatabase";

const ProfileImage = ({
  setProfilePicture,
  profilePicture,
  setShowCropImg,
  inputs,
  editHandler,
  changeInput,
}) => {
  return (
    <div className="flex sm:flex-col justify-between sm:justify-center sm:w-auto  w-full  sm:pr-10 mt-1  ">
      {/* avtar picture */}
      {inputs.image ? (
        <div className="self-center  items-center ">
          {inputs.loading && inputs.loadingFor === "image" && profilePicture ? (
            <div className="relative self-center items-center ">
              <img
                className=" ring-2 ring-btn opacity-70  blur-sm h-[80px]   w-[80px]    sm:h-[100px]  sm:w-[100px] md:h-[120px] md:w-[120px] duration-300   bg-red-500 rounded-[50%]"
                src={profilePicture}
                alt="profile picture"
              />
              <div className="absolute top-6 left-7  sm:top-8 sm:left-9 md:top-11 md:left-11   ">
                <svg
                  className="w-9 h-9 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <img
              className="ring-2 ring-btn  h-[80px]   w-[80px]    sm:h-[100px]  sm:w-[100px] md:h-[120px] md:w-[120px] duration-300   rounded-[50%]"
              src={"https://localhost:7175/images/" + inputs.image}
              alt="profile picture"
            />
          )}
        </div>
      ) : (
        <div className="self-center items-center ">
          {inputs.loading && inputs.loadingFor === "image" && profilePicture ? (
            <div className="relative self-center items-center ">
              <img
                className=" ring-2 ring-btn opacity-70  blur-sm h-[80px]   w-[80px]    sm:h-[100px]  sm:w-[100px] md:h-[120px] md:w-[120px] duration-300   bg-red-500 rounded-[50%]"
                src={profilePicture}
                alt="profile picture"
              />
              <div className="absolute top-6 left-7  sm:top-8 sm:left-9 md:top-11 md:left-11   ">
                <svg
                  className="w-9 h-9 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <img
              className=" ring-2  ring-btn  h-[80px]   w-[80px]    sm:h-[100px]  sm:w-[100px] md:h-[120px] md:w-[120px] duration-300   bg-red-500 rounded-[50%]"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKSo2ZUSLlAHjb6-DiCknAURt7kSAtty30zP5N59ogAtNGe-xyToWkP0SbLalpAPNq5U&usqp=CAU"
              }
              alt="profile picture"
            />
          )}
        </div>
      )}

      {/* edit profile picture buttons */}
      <div className="flex mx-5 se:mx-0 self-center md:self-start md:mt-3  sm:flex-col-reverse t">
        <div className="mx-2">
          <button
            onClick={() => {
              setShowCropImg(false);
              setProfilePicture(null);
              changeInput((values) => ({
                ...values,
                loadingFor: "image",
                loading: true,
              }));
              editHandler(8);
            }}
            className="h-[40px] my-3 sm:my-0  text-sm min-w-[80px] w-full border-2  border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white duration-300 self-center rounded-3xl flex flex-col justify-center items-center "
          >
            remove
          </button>
        </div>
        <div>
          <div className="">
            <button
              onClick={() => setShowCropImg(true)}
              className=" h-[40px] my-3  min-w-[165px] w-full   self-center rounded-3xl flex flex-col justify-center items-center 
            text-sm font-medium
            bg-btn text-white ring-2 ring-btn hover:ring-blue-900
             hover:bg-blue-900 duration-200
            hover:text-screenLight "
            >
              {profilePicture ? (
                "Change Profile Picture"
              ) : (
                <p className="flex justify-center self-center ">
                  <MdOutlineAddAPhoto className="inline mr-1 self-center text-[20px]" />
                  <span className="self-center">Set Profile Picture</span>
                </p>
              )}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
