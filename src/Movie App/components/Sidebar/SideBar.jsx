import { sidbarItem } from "../../constans";
import SideBarList from "./SideBarList";
import { styles } from "../../styles/styles";
import {MdMenuOpen } from "react-icons/md";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import logoImage from "../../assets/logoImage.png";
import logoImageDark from "../../assets/logoImageDark.png";
const SideBar = ({ openMenu, setOpenMenu, mode, setMode }) => {
  return (
    <div
      className={`${styles.sideBar} origin-left  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-black dark:scrollbar-thumb-border scrollbar-thumb-black scrollbar-track-rounded-md   scrollbar-thumb-rounded-md  ${
        !openMenu && " left-[-300px] fixed"
      } ${
        openMenu &&
        "fixed lg:relative left-0 overflow-auto dark:bg-[#07070a] lg:dark:bg-transparent bg-screenLight"
      }  duration-500 z-[52]`}
    >
      <div className=" lg:hidden " onClick={() => setOpenMenu(!openMenu)}>
        <MdMenuOpen className="text-[27px] mt-10 mx-10 cursor-pointer text-btn  " />
      </div>
      <div className={` lg:hidden flex  flex-col `}>
        <button className={`${styles.loginBtn2} mx-5 my-5 `}>LOG IN</button>
        <div className="mx-2  ">
          {/* <DarkModeToggle
            mode={mode}
            dark="dark"
            light="light"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              setMode(mode);
            }}
          /> */}
        </div>
      </div>
      <div className=" font-extrabold hidden sm:mx-3 md:mx-5 lg:mx-8 mb-8  mt-10 lg:flex min-w-[145px] sm:min-w-[150px] ">
        <img
          src={mode === "dark" ? logoImage : logoImageDark}
          alt="logoImage"
          className="w-[25px] h-[31.6px]  sm:w-[30px] sm:h-[38px] mx-1"
        />
        <p className="self-center text-[18px] sm:text-[21px]">
          MOVIE <span className="text-btn">MAN</span>{" "}
        </p>
      </div>
      <div className="overflow-y-scroll max-h-screen  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md">
        <SideBarList subTitle="MENU" items={sidbarItem} menu={openMenu} />
      </div>
    </div>
  );
};

export default SideBar;
