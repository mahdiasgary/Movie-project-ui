import React, { useEffect, useState } from "react";
import AvatarCrop from "../../../profile/profile/AvatarCrop";
import UserProfileGenral from "../../../profile/profile/UserProfileGenral";
import { Link } from "react-router-dom";
import UserGeneral from "../../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import ExploreItemCard from "../../../../components/explore/ExploreItemCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Modal, Button, Toast, Dropdown } from "flowbite-react";
import { HiCheck, HiOutlineExclamationCircle } from "react-icons/hi";
import { withRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import {
  useAdminEditUserMutation,
  useGetUserForEditInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AlertModal from "../../../../common/AlertModal";

const EditUserInfo = () => {
  let { setqw } = useStateContext();

  const { data } = useGetUserForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const { setlogin, loginStatus } = useStateContext();

  const poi = ["Genral", "Favorite"];
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
    return new File([u8arr], filename, { type: mime });
  }
  var file = dataURLtoFile(
    profilePicture,
    data?.data.profileImage?.split(".")[0] + Math.random() + ".png"
  );
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
  }, [data]);
  const [editUser] = useAdminEditUserMutation();
  const editHandler = (from) => {
    inputs.loading = true;
    const formDate = new FormData();
    formDate.append("Id", data?.data?.id);
    formDate.append("Username", inputs.name);
    formDate.append("Email", inputs.email);
    formDate.append("IsAdmin", inputs.IsAdmin);
    formDate.append("IsAdmin", inputs.IsActive);
    profilePicture !== null
      ? formDate.append("Image", file)
      : formDate.append("ImageName", inputs.image);

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
  };

  return data ? (
    <div className="flex flex-col w-full min-h-screen pb-20">
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
        <div className="flex gap-4">
          <div className="px-4 text-btn text-sm hover:text-white   py-2 hover:bg-btn bg-btn bg-opacity-20 duration-200 rounded-xl">
            <Dropdown
              className="mr-8"
              label={data?.data?.isAdmin ? "Admin" : "User"}
              inline
            >
              <Dropdown.Item
                className={inputs.IsAdmin ? "" : "hidden"}
                onClick={(e) => {
                  changeInput((values) => ({
                    ...values,
                    IsAdmin: false,
                  }));
                  props.setOpenModal("pop-up");
                }}
              >
                {" "}
                to User
              </Dropdown.Item>
              <Dropdown.Item
                className={!inputs.IsAdmin ? "" : "hidden"}
                onClick={(e) => {
                  changeInput((values) => ({
                    ...values,
                    IsAdmin: true,
                  }));
                  props.setOpenModal("pop-up");
                }}
              >
                to Admin
              </Dropdown.Item>
            </Dropdown>{" "}
          </div>
          <div
            className={`px-4 ${
              !data?.data.isActive
                ? "text-gray-500 bg-gray-500 hover:bg-opacity-95"
                : " text-green-400 hover:bg-green-400 bg-green-400"
            } text-sm hover:text-white   py-2  bg-opacity-20 duration-200 rounded-xl`}
          >
            <Dropdown
              className="mr-8"
              label={data?.data.isActive ? "Active" : "inActive"}
              inline
            >
              <Dropdown.Item
                className={!inputs.IsActive ? "" : "hidden"}
                onClick={(e) => {
                  changeInput((values) => ({
                    ...values,
                    IsActive: true,
                  }));
                  props.setOpenModal("pop-up");
                }}
              >
                {" "}
                to Active
              </Dropdown.Item>
              <Dropdown.Item
                className={inputs.IsActive ? "" : "hidden"}
                onClick={(e) => {
                  changeInput((values) => ({
                    ...values,
                    IsActive: false,
                  }));
                  props.setOpenModal("pop-up");
                }}
              >
                to InActive
              </Dropdown.Item>
            </Dropdown>{" "}
          </div>
        </div>
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

        {/* User Favorite Movies */}
        {query === "Favorite" && (
          <div className="mt-3 md:self-center w-full  ">
            <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
              <div className="flex justify-between mb-3 ">
                <p className="text-[20px] font-semibold mx-3 ">Watch List </p>
                <Link to={"/movies"}>
                  <p className="text-btn font-semibold text-sm self-center mt-1 ">
                    View All
                  </p>
                </Link>
              </div>
              <div className="flex justify-center">
                <Swiper
                  breakpoints={{
                    320: { slidesPerView: 3, spaceBetween: 6 },
                    570: { slidesPerView: 3, spaceBetween: 10 },
                    770: { slidesPerView: 4, spaceBetween: 10 },

                    1527: { slidesPerView: 5, spaceBetween: 9 },
                    2027: { slidesPerView: 6, spaceBetween: 9 },
                    2827: { slidesPerView: 7, spaceBetween: 9 },
                  }}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "30px",
                    "--swiper-pagination-color": "#fff",
                  }}
                  // slidesPerView={3}
                  // spaceBetween={10}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  className={`relative h-[200px] md:h-[270px] x:h- xl:max-w-[65vw] flex  `}
                >
                  {/* {data.map((movieId, index) => (
                <SwiperSlide key={index}>
                  <ExploreItemCard movieId={movieId} />
                </SwiperSlide>
              ))} */}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:flex">
        <div className="mt-8  md:self-center w-full px-5 y7:px-10 xl:px-16 ">
          <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
            <div className="flex justify-between mb-3 ">
              <p className="text-[20px] font-semibold mx-3 ">My Favorite </p>
              <Link to={"/movies"}>
                <p className="text-btn font-semibold text-sm self-center mt-1 ">
                  View All
                </p>
              </Link>
            </div>
            <div className="flex justify-center">
              <Swiper
                breakpoints={{
                  320: { slidesPerView: 3, spaceBetween: 6 },
                  570: { slidesPerView: 3, spaceBetween: 10 },
                  770: { slidesPerView: 4, spaceBetween: 10 },

                  1527: { slidesPerView: 5, spaceBetween: 9 },
                  2027: { slidesPerView: 6, spaceBetween: 9 },
                  2827: { slidesPerView: 7, spaceBetween: 9 },
                }}
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-navigation-size": "30px",
                  "--swiper-pagination-color": "#fff",
                }}
                // slidesPerView={3}
                // spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={`relative h-[200px] md:h-[270px] x:h- xl:max-w-[65vw] flex  `}
              >
                {/* {data.map((movieId, index) => (
                <SwiperSlide key={index}>
                  <ExploreItemCard movieId={movieId} />
                </SwiperSlide>
              ))} */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "nooo"
  );
};

export default withRouter(EditUserInfo);
