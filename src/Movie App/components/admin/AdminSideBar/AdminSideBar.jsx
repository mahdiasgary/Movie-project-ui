// import { adminSidbarItem } from "../../../constans";
import { styles } from "../../../styles/styles";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import logoImage from "../../../assets/logoImage.png";
import logoImageDark from "../../../assets/logoImageDark.png";
import AdminSideBarList from "./AdminSideBarList";
import { adminSidbarItem } from "../../../constans";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { FaPowerOff } from "react-icons/fa6";
import { Tooltip } from "flowbite-react";
import AlertModal from "../../../common/AlertModal";
import { useLoginOutMutation } from "../../../redux/services/movieDatabase";

const AdminSideBar = ({ openMenu, setOpenMenu, mode, setMode }) => {
  const { loginStatus } = useStateContext();
  const [state, setState] = useState({
    alertTitle: "",
    readyForUploadFile: false,
    loading: false,
    file: "",
    newFile: "",
  });
  const [openModal, setOpenModal] = useState();
  const [logout] = useLoginOutMutation();
  const editHandler = () => {
    logout()
      .unwrap()
      .then((r) => {
        console.log(r);
      });
  };
  return (
    <div
      className={`${
        styles.sideBar
      } overflow-y-auto origin-left  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md ${
        !openMenu && " left-[-300px] fixed"
      } ${
        openMenu &&
        "fixed lg:relative left-0   dark:bg-[#07070a] lg:dark:bg-transparent bg-screenLight"
      }  duration-500 z-[52] `}
    >
      <AlertModal
        loading={state.loading}
        functionHandler={editHandler}
        functionHandler2={setState}
        text={"Are you sure you want to Log Out"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className=" lg:hidden " onClick={() => setOpenMenu(!openMenu)}>
        <MdMenuOpen className="text-[27px] mt-10 mx-10 cursor-pointer text-btn  " />
      </div>

      <div className=" font-extrabold hidden sm:mx-3 md:mx-5 lg:mx-8 mb-8  mt-10 lg:flex min-w-[145px] sm:min-w-[150px] ">
        <img
          src={mode !== "dark" ? logoImage : logoImageDark}
          alt="logoImage"
          className="w-[25px] h-[31.6px]  sm:w-[50px] sm:h-[50px] "
        />
        <p className="self-center text-[18px] sm:text-[21px]">
          KEYSER <span className="text-btn">SöZE</span>{" "}
        </p>
      </div>
      <div className="flex justify-between pb-4 pt-6 lg:pt-0 px-5 font-semibold text-btn">
        <div className="self-center">{loginStatus?.data?.userName}</div>
        <Tooltip content={"Log Out"}>
          <div
            onClick={(e) => {
              e.preventDefault();
              setOpenModal("pop-up");
            }}
            className="text-red-500 cursor-pointer hover:bg-opacity-100 hover:text-white duration-200 p-[10px] flex bg-red-500 bg-opacity-20  rounded-2xl text-sm font-semibold self-center"
          >
            {/* logout */}
            <FaPowerOff className="self-center text-[15px] " />
          </div>
        </Tooltip>
      </div>
      <div>
        <AdminSideBarList
          subTitle="MENU"
          items={adminSidbarItem}
          menu={openMenu}
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
