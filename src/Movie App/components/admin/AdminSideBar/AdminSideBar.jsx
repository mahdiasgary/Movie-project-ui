// import { adminSidbarItem } from "../../../constans";
import { styles } from "../../../styles/styles";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import logoImage from "../../../assets/logoImage.png";
import logoImageDark from "../../../assets/logoImageDark.png";
import AdminSideBarList from "./AdminSideBarList";
import { adminSidbarItem } from "../../../constans";
const AdminSideBar = ({ openMenu, setOpenMenu, mode, setMode }) => {
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
