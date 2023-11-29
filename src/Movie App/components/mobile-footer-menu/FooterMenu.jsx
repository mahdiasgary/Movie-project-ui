import React, { useEffect, useState } from "react";
import { footerMenu } from "../../constans";
import { Link, withRouter } from "react-router-dom";
import { color } from "framer-motion";
const FooterMenu = ({ history ,setOpenMenu,openMenu}) => {
  const [selected, setSelected] = useState("explore");
  const pathname = history.location.pathname.split("/")[1];
  useEffect(() => {
    if (pathname === "") return setSelected("explore");
    setSelected(pathname);
  }, [pathname]);
  return (
    <div className="md:hidden fixed w-screen h-[67px] z-[30] bottom-0 flex flex-col justify-center dark:bg-[#07070a] bg-white">
      <ul className="flex justify-between mx-5 y7:mx-8 y9:mx-16">
        {footerMenu.map((item, index) => (
          <li
            key={index}
            className={`flex ${
              item.title.toLowerCase() === selected && "text-btn"
            } justify-center cursor-pointer hover:text-btn duration-200`}
          >
            {item.title === "Menu" ? (
              <div className="flex flex-col"
              onClick={()=>setOpenMenu(!openMenu)}>
                <div className="self-center text-[23px] ">{item.icon} </div>
                <div className="font-semibold"> {item.title} </div>
              </div>
            ) : (
              <Link
                to={`/${
                  item.title === "Explore" ? "" : item.title.toLowerCase()
                }`}
              >
                <div className="flex flex-col">
                  <div className="self-center text-[23px] ">{item.icon} </div>
                  <div className="font-semibold"> {item.title} </div>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(FooterMenu);
