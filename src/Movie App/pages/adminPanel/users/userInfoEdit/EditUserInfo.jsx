import React, { useEffect, useState } from "react";
import AvatarCrop from "../../../profile/profile/AvatarCrop";
import UserProfileGenral from "../../../profile/profile/UserProfileGenral";
import { Link } from "react-router-dom";
import UserGeneral from "../../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Modal, Button, Toast, Dropdown } from "flowbite-react";
import { withRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useStateContext } from "../../../../contextProvider/ContextProvider";
import {
  useAdminEditUserMutation,
  useGetUserForEditInAdminPanelQuery,
  useGetUserWatchListUserSideQuery,
} from "../../../../redux/services/movieDatabase";
import AlertModal from "../../../../common/AlertModal";
import { IdontKnowName } from "../../../../components/admin/IdontKnowName";
import {
  AccordionBody,
  AccordionHeader,
  Accordion,
} from "@material-tailwind/react";

const EditUserInfo = () => {
  let { setqw } = useStateContext();

  const { data } = useGetUserForEditInAdminPanelQuery(
    { id: window.location.search.split("=")[1] },
    { refetchOnMountOrArgChange: true }
  );
  const watchListQuery = useGetUserWatchListUserSideQuery({
    refetchOnMountOrArgChange: true,
  });

  // console.log(watchListQuery?.data?.data);
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
    return new File([u8arr], filename, { type: "image/png" });
  }

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

  const editHandler = (type, photo) => {
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
  };
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return data && watchListQuery.data ? (
    <div className="flex flex-col w-full min-h-screen pb-20">
      <button onClick={editHandler}>555555</button>
      {/* <img
        className="ring-2 ring-btn  h-[80px]  y9:h-[85px] w-[80px]  y9:w-[85px]  sm:h-[100px]  sm:w-[100px] md:h-[120px] md:w-[120px] duration-300   rounded-[50%]"
        src={URL.createObjectURL(file)}
        alt="profile picture"
      /> */}
      {/* <input type="file" onChange={(e) => console.log(e.target.files[0])} /> */}

      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[
          { path: "/admin/users", value: "Users" },
          { path: "/admin/users", value: input.name },
        ]}
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
      <div className="md:flex w-full px-4  xl:px-16">
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
              {watchListQuery["data"].data.map((movie, index) => (
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

                              {/* <div className="flex flex-wrap mt-1 mx-2 text-sm font-semibold">
                  {data?.genres.slice(0, 2).map((genre, index) => (
                    <Link
                      key={index}
                      to={{
                        pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                        state: { genre },
                      }}
                    >
                      <p className="mr-2 backdrop-blur-sm  bg-gray-200 bg-opacity-10 py-1 px-3 mt-2 rounded-sm hover:bg-screenDark ">
                        {genre}
                      </p>
                    </Link>
                  ))}
                </div> */}
                            </div>
                            <div className="text-center pb-6  w-[169px] px-3 ">
                              <button className=" btn py-2 w-full rounded-md  backdrop-blur-sm  font-bold hover:rounded-xl  ">
                                Watch Movie
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
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex h-screen justify-center">
      <div className="flex mt-20 text-[19px]">
        <svg
          class="w-5 h-5 mt-2 mr-2 -ml-1 text-btn animate-spin"
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
        please be patient
      </div>
    </div>
  );
};

export default withRouter(EditUserInfo);
