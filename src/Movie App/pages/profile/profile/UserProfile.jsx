import React, { useState } from "react";
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
import { useLoginOutMutation } from "../../../redux/services/movieDatabase";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { Modal, Button, Toast } from "flowbite-react";
import { HiCheck, HiOutlineExclamationCircle } from "react-icons/hi";
import { withRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UserProfile = ({ history }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const { setlogin, loginStatus } = useStateContext();
  // <button
  //         onClick={() => props.setOpenModal("pop-up")}
  //         className="px-6 text-red-500 hover:text-white   py-2 border-red-500 border-2 hover:bg-red-500 duration-200 rounded-3xl"
  //       >
  //         log out
  //       </button>

  const poi = ["Genral", "Favorite"];
  let qqq = ["name", "email", "phone"];
  let www = {
    name: loginStatus?.data?.userName,
    email: "brerfee@kwb.cn",
    phone: "09268557406",
  };
  const input = {
    name: "",
    email: "",
    IsAdmin: "in",
    IsActive: "ive",
    loading: false,
    loadingFor: "",
    image: "",
    from: "",
  };
  const [inputs, changeInput] = useState(input);
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const [showCropImg, setShowCropImg] = useState(false);
  const [avatarCrop, setAvatarCrop] = useState({ preview: null });
  const [profilePicture, setProfilePicture] = useState(null);
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [loginOutMutation] = useLoginOutMutation();
  const loginOutMutationHand = () => {
    loginOutMutation()
      .unwrap()
      .then((r) => {
        console.log(r);
        if (r.isSuccessFull) {
          toast.custom(
            <div>
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Your log out is successfully.
                </div>
                <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
              </Toast>
            </div>,
            {}
          );
          setlogin(99);
          setTimeout(() => history.push("/"), 800);
        }
      })
      .then((error) => {});
  };
  const editHandler = (from) => {
    // inputs.loading = true;
    // const formDate = new FormData();
    // formDate.append("Id", data?.data?.id);
    // formDate.append("Username", inputs.name);
    // formDate.append("Email", inputs.email);
    // formDate.append("IsAdmin", inputs.IsAdmin);
    // formDate.append("IsAdmin", inputs.IsActive);
    // profilePicture !== null
    //   ? formDate.append("Image", file)
    //   : formDate.append("ImageName", inputs.image);
    // editUser(formDate)
    //   .unwrap()
    //   .then((r) => {
    //     setqw(Math.random());
    //     if (r.isSuccessFull) {
    //       changeInput((values) => ({
    //         ...values,
    //         loadingFor: "",
    //         loading: false,
    //       }));
    //       toast.success("Successfully Edited!", {
    //         position: "top-center",
    //         style: {
    //           borderRadius: "10px",
    //           background: "#333",
    //           color: "#fff",
    //         },
    //       });
    //     }
    //   })
    //   .then((error) => {});
  };
  return (
    <div className="flex flex-col w-full ">
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to log out this account?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                onClick={loginOutMutationHand}
                className="bg-red-500 text-white hover:px-1 duration-150"
                color="red-500"
                // onClick={() => props.setOpenModal(undefined)}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* avatarCrop */}
      {showCropImg && (
        <AvatarCrop
          setAvatarCrop={setAvatarCrop}
          setShowCropImg={setShowCropImg}
          avatarCrop={avatarCrop}
          setProfilePicture={setProfilePicture}
        />
      )}
      <div className="flex justify-between font-bold mx-5 mt-8 mb-10 md:mb-8">
        <h1 className="text-2xl self-center ">Account</h1>
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
  );
};

export default withRouter(UserProfile);

// <div className="md:flex w-full px-5 y7:px-10 xl:px-16">
//   <UserGeneral
//     profilePicture={profilePicture}
//     setShowCropImg={setShowCropImg}
//     setProfilePicture={setProfilePicture}
//   />
// </div>

// <div className=" w-full px-5 y7:px-10 xl:px-16 sm:hidden">
//   <ul className="flex gap-5 text-sm pb-2 overflow-x-auto scrollbar:!w-1.5 scrollbar:!h-1.5 md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]">
//     {poi.map((item, index) => (
//       <Link
//         to={{ pathname: "/user", search: item.toLocaleLowerCase() }}
//         key={index}
//       >
//         <li
//           className={`px-4 py-2   ${
//             query === item
//               ? "bg-[length:100%_2px] font-semibold text-btn"
//               : "bg-[length:0%_2px]"
//           }  origin-right bg-left-bottom bg-gradient-to-r from-btn to-btn  bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
//           onClick={() => setQuery(item)}
//         >
//           {item}
//         </li>
//       </Link>
//     ))}
//   </ul>{" "}
// </div>

// <div className=" w-full px-5 y7:px-10 xl:px-16 sm:hidden">
//   {/* User Genral information */}
//   {query === "Genral" && (
//     <UserProfileGenral
//       qqq={qqq}
//       selectedForChange={selectedForChange}
//       setSelectedForChange={setSelectedForChange}
//       www={www}
//     />
//   )}

//   {/* User Favorite Movies */}
//   {query === "Favorite" && (
//     <UserProfileGenral
//       qqq={qqq}
//       selectedForChange={selectedForChange}
//       setSelectedForChange={setSelectedForChange}
//       www={www}
//     />
//   )}
// </div>

// <div className="mt-8 md:self-center w-full px-5 y7:px-10 xl:px-16 ">
//   <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
//     <div className="flex justify-between mb-3 ">
//       <p className="text-[20px] font-semibold mx-3 ">My Favorite </p>
//       <Link to={"/movies"}>
//         <p className="text-btn font-semibold text-sm self-center mt-1 ">
//           View All
//         </p>
//       </Link>
//     </div>
//     <div className="flex justify-center">
//       <Swiper
//         breakpoints={{
//           320: { slidesPerView: 3, spaceBetween: 6 },
//           570: { slidesPerView: 3, spaceBetween: 10 },
//           770: { slidesPerView: 4, spaceBetween: 10 },

//           1527: { slidesPerView: 5, spaceBetween: 9 },
//           2027: { slidesPerView: 6, spaceBetween: 9 },
//           2827: { slidesPerView: 7, spaceBetween: 9 },
//         }}
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-navigation-size": "30px",
//           "--swiper-pagination-color": "#fff",
//         }}
//         // slidesPerView={3}
//         // spaceBetween={10}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation, Autoplay]}
//         className={`relative h-[200px] md:h-[270px] x:h- xl:max-w-[65vw] flex  `}
//       >
//         {data.map((movieId, index) => (
//           <SwiperSlide key={index}>
//             <ExploreItemCard movieId={movieId} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </div>
// </div>
