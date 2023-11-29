import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const AdminSideBarItem = ({subSelected}) => {
    const [state, setState] = useState(false);

  return (
    <div onClick={() => setSelectedSideBarItem()}>
            <li
              onMouseEnter={() => setHovered(item[0].title.toLowerCase())}
              onMouseLeave={() => setHovered()}
              onClick={(e) => {
                e.preventDefault();
                setState(!state);
              }}
              className={`
          ${!menu && "pl-2 mx-0"}
          ${styles.adminSideBarItem} 
          
          ${
            selectedSideBarItem === item[0].title.toLowerCase() &&
            "border-l-[3px] "
          }
          ${rtl ? "ml-1" : "mr-1"}
          
          `}
            >
              <div className="w-full flex justify-between">
                <div className="flex">
                  <span
                    className={`
      ${
        (hovered === item[0].title.toLowerCase() ||
          selectedSideBarItem === item[0].title.toLowerCase()) &&
        "text-btn  "
      }
        self-center px-2 ${
          rtl ? "ml-2 lg:ml-1" : "mr-2 lg:mr-1"
        } mr-2 text-[24px] lg:text-[19px] lg:text-btn `}
                  >
                    {item[0].icon}
                  </span>
                  <p
                    className={`origin-left lg:text-btn ${
                      selectedSideBarItem === item[0].title.toLowerCase() &&
                      "text-btn"
                    } `}
                  >
                    {item[0].title}
                  </p>
                </div>
                <div
                  className={`text-[15px] mx-4 self-center text-btn
                   ${
                    !state ? "rotate-0" : "-rotate-90"
                  } 
                  duration-300`}
                >
                  <FaChevronDown />{" "}
                </div>
              </div>
            </li>
            <ul className={`origin-top`}>
              {item[1]?.map((subItem, index) => (
                <Link
                  key={index}
                  to={`/admin/${subItem.title
                    .replace(/\s+/g, "")
                    .toLowerCase()}`}
                >
                  <li
                    className={`origin-left flex  hover:text-btn border-btn  pl-8  ${
                      !state ? " py-3 duration-300" : "scale-x-0  h-0 text-0"
                    }
                   ${
                     subSelected === subItem.main &&
                     "border-l-[3px] dark:lg:bg-[#29263b] lg:bg-zinc-300  mr-1 rounded-r-lg duration-100 text-btn"
                   } `}
                  >
                    <div className="self-center mx-2 ">
                      {subSelected === subItem.main
                        ? subItem.icon2
                        : subItem.icon1}
                    </div>
                    <div className="">{subItem.title}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
  )
}
