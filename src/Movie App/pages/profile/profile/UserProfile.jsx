import React, { useEffect, useState } from "react";
import AvatarCrop from "./AvatarCrop";
import UserProfileGenral from "./UserProfileGenral";
import { Link } from "react-router-dom";
import UserGeneral from "../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import ExploreItemCard from "../../../components/explore/ExploreItemCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import {
  useAdminEditUserMutation,
  useGetUserForEditInAdminPanelQuery,
  useGetUserWatchListUserSideQuery,
  useLoginOutMutation,
} from "../../../redux/services/movieDatabase";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { Modal, Button, Toast, Dropdown } from "flowbite-react";
import { HiCheck, HiOutlineExclamationCircle } from "react-icons/hi";
import { withRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AlertModal from "../../../common/AlertModal";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
import { BeatLoader } from "react-spinners";

const UserProfile = ({ history }) => {
  let { setqw } = useStateContext();

  const { data } = useGetUserForEditInAdminPanelQuery(
    { id: 3 },
    { refetchOnMountOrArgChange: true }
  );

  const poi = ["Genral", "Watch List"];
  let qqq = ["name", "email"];
  let www = {
    name: data && data.data.username,
    email: data && data.data.email,
  };
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const [showCropImg, setShowCropImg] = useState(false);
  const [avatarCrop, setAvatarCrop] = useState({ preview: null });
  const [profilePicture, setProfilePicture] = useState(null);

  function dataURLtoFile(dataurl, filename) {
    if (dataurl)
      var arr = dataurl?.split(","),
        mime = arr[0]?.match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: "image/png" });
  }
  const watchListQuery = useGetUserWatchListUserSideQuery({
    refetchOnMountOrArgChange: true,
  });
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const input = {
    name: data?.data.username,
    email: data?.data.email,
    IsAdmin: data?.data.isAdmin,
    IsActive: data?.data.isActive,
    loading: false,
    loadingFor: "",
    image: data?.data.profileImage,
    from: "",
  };

  const [inputs, changeInput] = useState({
    name: data?.data.username,
    email: data?.data.email,
    IsAdmin: data?.data.isAdmin,
    IsActive: data?.data.isActive,
    loading: false,
    loadingFor: "",
    image: data?.data.profileImage,
    from: "",
  });
  useEffect(() => {
    changeInput({
      name: data?.data.username,
      email: data?.data.email,
      IsAdmin: data?.data.isAdmin,
      IsActive: data?.data.isActive,
      loading: false,
      image: data?.data.profileImage,
    });
    // setProfilePicture(data?.data.profileImage)
  }, [data]);

  const [editUser] = useAdminEditUserMutation();
  const [logout] = useLoginOutMutation();

  const editHandler = (type, photo) => {
    if (inputs.from === "logout") {
      logout()
        .unwrap()
        .then((r) => {
          console.log(r);
        });
    }
    if (inputs.from !== "logout") {
      let image0 = type === 1 && dataURLtoFile(photo, "qw.png");
      inputs.loading = true;
      const formDate = new FormData();
      formDate.append("Id", data?.data?.id);
      formDate.append("Username", inputs.name);
      formDate.append("Email", inputs.email);
      formDate.append("IsAdmin", inputs.IsAdmin);
      formDate.append("IsActive", inputs.IsActive);
      formDate.append("Image", type === 8 ? null : image0);

      editUser(formDate)
        .unwrap()
        .then((r) => {
          setqw(Math.random());
          if (r.isSuccessFull) {
            changeInput((values) => ({
              ...values,
              loadingFor: "",
              loading: false,
            }));
            toast.success("Successfully Edited!", {
              position: "top-center",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }
        })
        .then((error) => {});
    }
  };

  return data ? (
    <div className="flex flex-col w-full min-h-screen pb-20">
      {/* <button onClick={editHandler}>555555</button> */}

      <IdontKnowName
        root={{ path: "/", value: "Home" }}
        prob={[{ path: "/profile", value: input.name }]}
      />

      <AlertModal
        loading={inputs.loading}
        input={input}
        functionHandler={editHandler}
        functionHandler2={changeInput}
        text={"Are you sure you want to Confirm"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        from={"user"}
      />
      {showCropImg && (
        <div>
          <div
            onClick={() => setShowCropImg(false)}
            className="fixed w-full z-[5000] h-[130%] -top-20 pb-20 bg-gray-900 bg-opacity-60 backdrop-blur-sm  "
          />
        </div>
      )}
      {/* avatarCrop */}
      {showCropImg && (
        <AvatarCrop
          editHandler={editHandler}
          changeInput={changeInput}
          setAvatarCrop={setAvatarCrop}
          setShowCropImg={setShowCropImg}
          avatarCrop={avatarCrop}
          setProfilePicture={setProfilePicture}
        />
      )}
      <div className="flex justify-between font-bold mx-5 mt-8 mb-10 md:mb-8">
        <h1 className="text-2xl self-center ">Account</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            changeInput((v) => ({ ...v, from: "logout" }));
            setOpenModal("pop-up");
          }}
          className="flex self-center text-sm sm:text-base px-4 py-2 bg-btn text-btn rounded-2xl hover:bg-opacity-100 hover:text-white duration-200 bg-opacity-20"
        >
          Log Out
        </button>
        {/* </button> */}
      </div>
      <div className="md:flex w-full px-4 y7:px-6 xl:px-16">
        <UserGeneral
          editHandler={editHandler}
          inputs={inputs}
          changeInput={changeInput}
          data={data?.data}
          profilePicture={profilePicture}
          setShowCropImg={setShowCropImg}
          setProfilePicture={setProfilePicture}
          modal={props}
        />
      </div>
      <div className=" w-full px-4 y7:px-6 xl:px-16 sm:hidden">
        <ul className="flex gap-5 text-sm pb-2 overflow-x-auto scrollbar:!w-1.5 scrollbar:!h-1.5 md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]">
          {poi.map((item, index) => (
            <li
              className={`px-4 py-2 mt-5  ${
                query === item
                  ? "bg-[length:100%_2px] font-semibold text-btn"
                  : "bg-[length:0%_2px]"
              }  origin-right bg-left-bottom  cursor-pointer bg-gradient-to-r from-btn to-btn  bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              onClick={() => setQuery(item)}
            >
              {item}
            </li>
            // </Link>
          ))}
        </ul>{" "}
      </div>
      <div className=" w-full px-4 y7:px-6 xl:px-16 sm:hidden">
        {/* User Genral information */}
        {query === "Genral" && (
          <UserProfileGenral
            editHandler={editHandler}
            inputs={inputs}
            changeInput={changeInput}
            qqq={qqq}
            selectedForChange={selectedForChange}
            setSelectedForChange={setSelectedForChange}
            www={www}
            modal={props}
          />
        )}

        {/* User Watch List Movies */}
        {query === "Watch List" && (
          <div className="mt-3 md:self-center w-full  ">
            <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
              <div className="flex justify-between mb-3 ">
                <p className="text-[20px] font-semibold mx-3 ">Watch List </p>
                <p
                  onClick={() => handleOpen(1)}
                  className="text-btn cursor-pointer font-semibold text-sm self-center mt-1 "
                >
                  View All
                </p>
              </div>
              <div className={` flex justify-center  flex-wrap gap-3`}>
                {watchListQuery["data"].data.map((movie, index) => (
                  <div key={index}>
                    <Link>
                      <div className={`flex flex-col text-textDark `}>
                        <div className="relative group">
                          <img
                            src={"https://localhost:7175/images/" + movie.cover}
                            alt=""
                            className={`w-[130px] h-[191px] md:w-[170px] md:h-[250px] rounded-xl`}
                          />
                          <p className="text-center text-sm mb-2">
                            {movie.title}
                          </p>
                        </div>
                      </div>
                    </Link>{" "}
                  </div>
                ))}
              </div>
              {watchListQuery["data"].data.length === 0 && (
                <div className="text-center pb-7 pt-12">
                  The watch list is empty :(
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="hidden w-full sm:block">
        <div className="mt-8  md:self-center  w-full px-4  xl:px-16 ">
          <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
            <div className="flex justify-between mb-3 ">
              <p className="text-[20px] font-semibold mx-3 ">Watch List </p>
              <p
                onClick={() => handleOpen(1)}
                className="text-btn cursor-pointer font-semibold text-sm self-center mt-1 "
              >
                View All
              </p>
            </div>

            <div
              className={`${
                !open && "max-h-[200px] md:max-h-[250px] overflow-hidden"
              } flex justify-center w-full flex-wrap gap-3`}
            >
              {watchListQuery["data"]?.data?.map((movie, index) => (
                <div key={index}>
                  <Link>
                    <div className={`flex flex-col text-textDark `}>
                      <div className="relative group">
                        <img
                          // src={data?.title.image.url}
                          src={"https://localhost:7175/images/" + movie.cover}
                          alt=""
                          className={`w-[130px] h-[191px] md:w-[170px] md:h-[250px] rounded-xl`}
                        />
                        <div className=" z-20 hidden md:flex absolute md:w-[170px] md:h-[250px] inset-0  rounded-xl origin-bottom opacity-0 group-hover:opacity-100  group-hover:bg-opacity-80   group-hover:bg-screenDark  duration-200 cursor-pointer ">
                          <div className=" flex flex-col justify-between">
                            <div>
                              <p className="text-[17px] mt-2 mx-1 font-semibold ">
                                {movie.title}{" "}
                              </p>
                              <div className="flex mt-2 mx-3">
                                <img
                                  src="https://mobomoviez.fun/img/imdb.png"
                                  alt=""
                                  className="rounded-xl w-[27px] h-[27px] "
                                />
                                <span className="self-center mx-1 font-bold">
                                  {/* {data?.ratings.rating}{" "} */}8
                                </span>
                              </div>
                            </div>
                            <div className="text-center pb-6  w-[169px] px-3 ">
                              <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                                Watch List
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              ))}
            </div>
            {watchListQuery["data"]?.data?.length === 0 && (
              <div className="text-center pb-7 pt-12">
                The watch list is empty :(
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-screen justify-center">
      <div className="flex mt-20 text-[19px]">
        <div className="flex justify-center">
          <BeatLoader size={"20px"} color="#1e74f1" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserProfile);

