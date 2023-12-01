import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { useRemoveUserMutation } from "../../../redux/services/movieDatabase";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { Toast, Tooltip } from "flowbite-react";
import AlertModal from "../../../common/AlertModal";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { HiCheck } from "react-icons/hi";
// import { BsInfoLg } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import toast from "react-hot-toast";

const UsersItem = ({ user, removeUserHandler, history }) => {
  const [removeUser] = useRemoveUserMutation();
  const [isActive, setIsActive] = useState(false);
  let { setqw } = useStateContext();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [loading, setLoading] = useState(false);
  const [from, setfrom] = useState("");
  const alertHandler = () => {
    setLoading(true);
    if (from === "delete") {
      removeUser({ id: user.id })
        .unwrap()
        .then((r) => {
          setqw(Math.random());
          console.log(r);
          if (r.isSuccessFull) {
            toast.custom(
              <div>
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Delete is successfully.
                  </div>
                  <Toast.Toggle onClick={(t) => toast.dismiss(t.id)} />
                </Toast>
              </div>,
              { duration: "200" }
            );
          }
          // history.push("/admin/users");
        })
        .then((error) => {
          // console.log(error);
        });
    }
    if (from === "info") {
      history.push(`/admin/user?id=${user.id}`);
    }
  };

  return (
    <tr className=" py-10 rounded-xl  hover:text-black dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <AlertModal
        loading={loading}
        functionHandler={alertHandler}
        text={
          from === "delete"
            ? `Are you sure you want to Delete ${user["username"]} `
            : `Are you sure you want to confirm`
        }
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <span className="self-center font-semibold text-btn  text-sm ">
            {user.id}
          </span>
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <img
            src={"https://localhost:7175/images/" + user.profileImage}
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[50%] "
          />
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.username}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.email}
        </div>
      </td>

      <td>
        {user.isAdmin ? (
          <div className="flex text-btn text-sm font-semibold px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
            Admin
          </div>
        ) : (
          <div className="flex px-2 text-sm font-semibold group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
            User
          </div>
        )}
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.isActive ? (
            <div className="bg-[#213242 font-semibold bg-btn bg-opacity-10 px-2 text-sm text-btn rounded-md py-[2px]">
              Active
            </div>
          ) : (
            <div className="bg-[#2d2f3b] dark:bg-opacity-80 bg-opacity-10  px-2 text-sm text-[#5e626e] rounded-md py-[2px]">
              Inactive
            </div>
          )}
        </div>
      </td>
      <td>
        <div className="flex px-2 min-w-[200px] group-hover:dark:bg-[#24272e] text-sm group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.createdDate?.split("+")[0]?.split(" ")[0]}
          <br />
          {user.createdDate?.split("+")[0]?.split(" ")[1]}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-r-xl group-hover:bg-gray-300 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <div className="flex justify-center  gap-3 text-[19px] ">
            <Tooltip content="info">
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setfrom("info");
                }}
                className=" text-btn cursor-pointer self-center hover:text-btn duration-200 "
              >
                <BsInfoCircle />
              </button>
            </Tooltip>
            {/* <Link to={"/admin/users"}> */}
            <Tooltip content="remove">
              <button
                onClick={() => {
                  props.setOpenModal("pop-up");
                  setfrom("delete");
                }}
                className="text-red-500 dark:group-hover:text-red-300 text-[20px] cursor-pointer"
              >
                <RxTrash />
                <p onClick={isActive && setIsActive(false)}></p>
              </button>
            </Tooltip>
            {/* </Link> */}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(UsersItem);
