import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetLoginStatusQuery } from "../redux/services/movieDatabase";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [IsDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);
  const [rtl, setRtl] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("dashboard");
  const [iconRotate, setIconRotate] = useState(["", false]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { data } = useGetLoginStatusQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  console.log(data)
  // let loginStatus=data
  const [loginStatus, setloginStatus] = useState();
  const [login, setlogin] = useState(0);

  const [qw, setqw] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:7175/Account/Authenticate",
      withCredentials: true,
    }).then((r) => {setloginStatus(r.data)});
  }, [login]);
  
  // console.log(loginStatus);
  // useEffect(()=>{
  //   setloginStatus(data)
  //   },[data])

  // console.log(loginStatus)
  // useEffect(() => {
  //   const handleResize = () => setWindowSize(window.innerWidth);

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    const screenMode = localStorage.getItem("DarkMode");
    setIsDarkMode();
    if (screenMode === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!IsDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("DarkMode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("DarkMode", "dark");
    }
  }, [IsDarkMode]);

  const setMode = (prob) => {
    setIsDarkMode(prob);
  };
  return (
    <StateContext.Provider
      value={{
        setqw,
        loginStatus,
        windowSize,
        selectedSideBarItem,
        setSelectedSideBarItem,
        rtl,
        IsDarkMode,
        activeMenu,
        screenSize,
        setScreenSize,
        userProfile,
        notification,
        setUserProfile,
        setNotification,
        setActiveMenu,
        setMode,
        iconRotate,
        setIconRotate,
        setlogin,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
