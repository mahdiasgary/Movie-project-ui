import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import UserProfileGenral from "../../pages/profile/profile/UserProfileGenral";
import { useStateContext } from "../../contextProvider/ContextProvider";

const UserGeneral = ({
  inputs,
  changeInput,
  profilePicture,
  setShowCropImg,
  setProfilePicture,
  data,
  editHandler,modal
}) => {
  const poi = ["Genral", "Favorite"];
  const { setlogin, loginStatus } = useStateContext();

  let www = { name: data?.username, email: data?.email };
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");

  return (
    <fieldset className="flex w-full dark:bg-border bg-white dark:bg-opacity-40 p-4 rounded-3xl">
      <legend className="hidden md:flex text-btn  mx-2 text-[18px] font-bold">
        General
      </legend>
      <ProfileImage
        inputs={inputs}
        profilePicture={profilePicture}
        setShowCropImg={setShowCropImg}
        setProfilePicture={setProfilePicture}
      />
      <div className="hidden sm:flex">
        <UserProfileGenral
          editHandler={editHandler}
          changeInput={changeInput}
          modal={modal}
          inputs={inputs}
          selectedForChange={selectedForChange}
          setSelectedForChange={setSelectedForChange}
          www={www}
        />
      </div>
    </fieldset>
  );
};

export default UserGeneral;
