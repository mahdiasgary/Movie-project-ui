import React from "react";
import { AiFillEdit } from "react-icons/ai";

const UserProfileGenral = ({
  selectedForChange,
  setSelectedForChange,
  www,
  changeInput,
  inputs,
  editHandler,modal
}) => {
  let userListItem = ["name", "email"];
  // console.log(inputs[userListItem[1]]);
  return (
    <div className="flex w-full flex-col self-center   ">
      {/* <h1 className="text-xl font-semibold md:hidden">General</h1> */}
      <div className="flex flex-wrap gap-4 ">
        {userListItem.map((userInfo, index) => (
          <fieldset
            key={index}
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl ${
              selectedForChange !== userInfo
                ? "border-[#787f98] border-opacity-40 "
                : "border-btn"
            } duration-150 shadow-md  my-1 px-1  h-[73px] sm:w-[300px] w-full `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              {userInfo}
            </legend>
            {selectedForChange !== userInfo ? (
              // show User Info
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{inputs[userInfo]}</p>

                {/* Edit Button User Info */}
                <button
                  className="h-[45px] w-[45px] rounded-3xl border-2 dark:border-border hover:bg-gray-400 text-btn  dark:hover:bg-btn hover:text-white duration-200 flex flex-col justify-center items-center "
                  onClick={() => setSelectedForChange(userInfo)}
                >
                  <AiFillEdit className="" />{" "}
                </button>
              </div>
            ) : (
              // Edit Handler User Info
              <div className="flex justify-between  pt-[2px]">
                <input
                  onChange={(e) =>
                    changeInput((values) => ({
                      ...values,
                      [userInfo]: e.target.value,
                    }))
                  }
                  autoFocus
                  value={inputs[userInfo]}
                  type="text"
                  className="fa px-3 self-center rounded-sm h-10 outline-none w-full  bg-transparent  text-lg "
                  name="text"
                />

                {/* Save Button User Info */}
                <div className="flex gap-1">
                  <button
                    className="h-[40px] text-sm px-2 border-2 dark:border-border border-gray-300 text-gray-500 dark:hover:bg-border hover:bg-gray-400 hover:text-gray-50 self-center rounded-3xl flex flex-col justify-center items-center "
                    onClick={() => {
                      setSelectedForChange(""),
                        changeInput((values) => ({
                          ...values,
                          [userInfo]: www[userInfo],
                        }));
                    }}
                  >
                    cancel{" "}
                  </button>
                  <button
                    disabled={www[userInfo] === inputs[userInfo] && true}
                    className={`${
                      www[userInfo] === inputs[userInfo] &&
                      "bg-gray-500 hover:bg-gray-500 "
                    } h-[40px] px-4 self-center rounded-3xl text-white  bg-btn hover:bg-blue-900 duration-200 flex flex-col justify-center items-center `}
                    onClick={() => {
                      setSelectedForChange(userInfo);

                      changeInput((values) => ({
                        ...values,
                        loadingFor: "input",
                      }));
                      modal.setOpenModal("pop-up");
                    }}
                  >
                    save{" "}
                  </button>
                </div>
              </div>
            )}
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default UserProfileGenral;
