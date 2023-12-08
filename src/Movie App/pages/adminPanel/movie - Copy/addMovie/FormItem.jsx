import React from "react";

const FormItem = ({ Formik, title, error, touched, styles }) => {
  return (
    <div className={` ${styles}`}>
      <fieldset
        className={`border border-[#787f98] my-1 px-3 rounded-lg  h-[69px] ${
          title === "imdb" && "text-yellow-400"
        } `}
      >
        <legend
          className={`px-1 text-sm y9:text-[16px] text-btn  ${
            title === "imdb" && "text-yellow-400"
          }  text-[17px]`}
        >
          {title === "createdDate" ? (
            <p className="w-[105px]">Created Date</p>
          ) : title === "releasedDate" ? (
            <p className="w-[110px]">Released Date</p>
          ) : (
            title
          )}
        </legend>
        <input
          type="text"
          className="fa rounded-sm h-10  
                outline-none w-full
                bg-transparent  text-lg px-2
                "
          name="text"
          {...Formik.getFieldProps(
            title === "createdDate"
              ? "createdDate"
              : title === "releasedDate"
              ? "releasedDate"
              : title.toLowerCase()
          )}
        />
      </fieldset>
      {error && touched && <div className="text-red-600 text-sm ">{error}</div>}
    </div>
  );
};

export default FormItem;
