import React from "react";
import Avatar from "react-avatar-edit";
const AvatarCrop = ({
  setAvatarCrop,
  setShowCropImg,
  setProfilePicture,
  changeInput,
  avatarCrop,editHandler
}) => {
  const onClose = () => {
    setAvatarCrop({ preview: null });
    setShowCropImg(false);
  };

  const onCrop = (preview) => {
    setAvatarCrop({ preview });
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };
  return (
    <div className="fixed z-[5001] flex justify-center lg:inset-20 w-full items-center">
      <div
        className={`z-[5001]   w-[300px] h-[400px] flex flex-col items-center justify-between rounded-xl bg-border bg-opacity-80 backdrop-blur-sm top-[20%] left-[40%] `}
      >
        <div className="mt-5  pb-10 mb-8  rounded-md overflow-hidden">
          <Avatar
            labelStyle={{
              color: "white",
              fontSize: "17px",
              cursor: "pointer",
              padding: "120px 85px",
            }}
            width={280}
            height={280}
            onCrop={onCrop}
            onClose={onClose}
            // onBeforeFileLoad={onBeforeFileLoad}
          />
        </div>
        <div className="flex self-center mx-2 mb-5 text-white">
          {" "}
          <div>
            <button
              onClick={() => {
                setShowCropImg(false);
                setAvatarCrop({ preview: null });
              }}
              className="h-[40px] px-3 mr-1 self-center rounded-3xl  bg-border hover:bg-blue-900 duration-200 flex flex-col justify-center items-center "
            >
              cancel
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setShowCropImg(false);
                setProfilePicture(avatarCrop.preview);
                changeInput((values) => ({
                  ...values,
                  loadingFor: 'image',
                  loading:true
                }));
                editHandler()
              }}
              className={`h-[40px] ${
                avatarCrop.preview ? " " : "bg-gray-500"
              } px-3  self-center rounded-3xl  bg-btn hover:bg-blue-900 duration-300 flex flex-col justify-center items-center `}
            >
              Set new profile picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCrop;
