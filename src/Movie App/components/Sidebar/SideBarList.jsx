import { useEffect } from "react";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { styles } from "../../styles/styles";
import { useStateContext } from "../../contextProvider/ContextProvider";

const SideBarList = ({ subTitle, items, history, menu }) => {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState("explore");
  const [hovered, setHovered] = useState();
  const pathname = history.location.pathname.split("/")[1];
  useEffect(() => {
    if (pathname === "") return setSelected("explore");
    setSelected(pathname);
  }, [pathname]);
  const { rtl } = useStateContext();

  return (
    <div>
      <div
        className={` flex flex-col mt-2 h-[500px]  `}
      >
        <p
          className={`${
            !menu && "hidden"
          } hidden lg:flex mx-5 mb-2 text-[16px] text-textPDark font-bold `}
        >
          {subTitle}
        </p>
        <ul
          className={`w-full
`}
        >
          {items.map((item, index) => (
            <div>
              {item.title === "Theme" ? (
                <div>
                  <li
                    className={`
${!menu && "pl-2 mx-0"}
${styles.sideBarItem} 
${selected === item.title.toLowerCase() && "border-l-[3px]"}
${rtl ? "ml-1" : "mr-1"}

`}
                    onMouseEnter={() => setHovered(item.title.toLowerCase())}
                    onMouseLeave={() => setHovered()}
                  >
                    <span
                      className={`${
                        (hovered === item.title.toLowerCase() ||
                          selected === item.title.toLowerCase()) &&
                        "text-btn "
                      }
self-center px-2 ${rtl ? "ml-2" : "mr-2"} mr-2 text-[24px]  `}
                    >
                      {item.icon}
                    </span>
                    <p className={`origin-left `}>{item.title}</p>
                    <span
                      onClick={() => setState(!state)}
                      className="self-center mt-1 ml-20 text-[21px]"
                    >
                      {" "}
                      {item.arrow}{" "}
                    </span>
                    <div></div>
                  </li>
                  <div
                    className={`origin-top ${
                      !state && "scale-y-0 duration-100 h-0"
                    } duration-500 `}
                  >
                    <li>fddgdg</li>
                    <li>dfglsndlsd</li>
                    <li>fddgdg</li>
                    <li>dfglsndlsd</li>
                    <li>fddgdg</li>
                    <li>dfglsndlsd</li>
                    <li>fddgdg</li>
                    <li>dfglsndlsd</li>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={`/${
                    item.title === "Explore" ? "" : item.title.toLowerCase()
                  }`}
                >
                  <li
                    className={`
                ${!menu && "pl-2 mx-0"}
                ${styles.sideBarItem} 
            ${selected === item.title.toLowerCase() && "border-l-[3px]"}
            ${rtl ? "ml-1" : "mr-1"}

            `}
                    onMouseEnter={() => setHovered(item.title.toLowerCase())}
                    onMouseLeave={() => setHovered()}
                  >
                    <span
                      className={`
                ${
                  (hovered === item.title.toLowerCase() ||
                    selected === item.title.toLowerCase()) &&
                  "text-btn "
                }
                self-center px-2 ${rtl ? "ml-2" : "mr-2"} mr-2 text-[24px]  `}
                    >
                      {item.icon}
                    </span>
                    <p className={`origin-left `}>{item.title}</p>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(SideBarList);
