import React, { useState } from "react";
import FormItem from "../FormItem";
import MultipleSelect from "../MultipleSelect";
import DatePiker from "../DatePiker";
import SelectMulti from "../SelectMulti";
import EditItemField from "../../pages/adminPanel/artist/add artist/EditItemFild";
import AlertModal from "../AlertModal";
// import DataPiker from ""
const AdminAddItemList = ({
  datePiker,
  itemList,
  Formik,
  dataQuery,
  selectHandler,
  selectedValue,
  selectedOptions,
  setSelectedOptions,
  inputs,
  changeInput,
  from,
}) => {
  // console.log(dataQuery)
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <div>
      <AlertModal
        // loading={inputs.loading}
        // input={input}
        // functionHandler={editHandler}
        // functionHandler2={changeInput}
        text={"Are you sure you want to Confirm"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        from={"user"}
      />
      {itemList.map((items, index) => (
        <div
          key={index}
          className={`flex ${
            items.find((item) => item === "Released Date")
              ? "md:flex-row"
              : "sm:flex-row"
          } flex-col  justify-center  sm:gap-6 `}
        >
          {items.map((item, index) =>
            item === "Language" ||
            item === "Artist" ||
            item === "Genre" ||
            item === "Country" ||
            item === "Career" ? (
              // <MultipleSelect
              //   key={index}
              //   selectedValue={selectedValue}
              //   options={dataQuery[item.toLowerCase() + "Query"].data}
              //   handleChange={selectHandler[item]}
              //   lable={item}
              // />
              <SelectMulti
                selectedOptions={selectedOptions[item.toLowerCase()]}
                options={dataQuery[item.toLowerCase() + "Query"]?.data?.data}
                key={index}
                setSelectedOptions={setSelectedOptions}
                title={item}
              />
            ) : // ''
            item === "Summary" ? (
              <div className=" w-full ">
                <fieldset className="border  border-[#787f98] focus-within:border-btn focus-within:border-2 my-1 px-3 rounded-lg w-full">
                  <legend className="px-1 text-btn text-[17px]">Summary</legend>
                  {from === "edit" ? (
                    <textarea
                      type="text"
                      className="fa rounded-sm border-transparent focus:border-transparent focus:ring-0 border-0 h-12 dark:outline-none outline-none outline-dashed bg-transparent w-full text-lg"
                      name="text"
                      value={inputs["summary"]}
                      onChange={(e) => {
                        changeInput((v) => ({ ...v, summary: e.target.value }));
                      }}
                    />
                  ) : (
                    <textarea
                      type="text"
                      className="fa rounded-sm border-transparent focus:border-transparent focus:ring-0 border-0 h-12 dark:outline-none outline-none outline-dashed bg-transparent w-full text-lg"
                      name="text"
                      {...Formik?.getFieldProps("summary")}
                    />
                  )}
                </fieldset>
                {Formik.errors.summary && Formik.touched.summary && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.summary}
                  </div>
                )}
              </div>
            ) : item === "Released Date" ||
              item === "Created Date" ||
              item === "Date Birth" ? (
              <DatePiker datePiker={datePiker} title={item} />
            ) : from === "edit" ? (
              <EditItemField
                inputs={inputs}
                changeInput={changeInput}
                selectedForChange={selectedForChange}
                setSelectedForChange={setSelectedForChange}
                modal={props}
                item={item}
              />
            ) : (
              <FormItem
                key={index}
                type={
                  item === "Released Date" ||
                  item === "Created Date" ||
                  item === "Date Birth"
                    ? "date"
                    : "text"
                }
                Formik={Formik}
                title={item}
                error={
                  Formik.errors[
                    item === "Created Date" || item === "Released Date"
                      ? item.replace(/\s/g, "")
                      : item.toLowerCase()
                  ]
                }
                touched={
                  Formik.touched[
                    [
                      item === "Created Date" || item === "Released Date"
                        ? item.replace(/\s/g, "")
                        : item.toLowerCase(),
                    ]
                  ]
                }
                styles={
                  item === "Imdb" || item === "Time" || item === "Year"
                    ? "min-w-[100px]"
                    : "w-full"
                }
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminAddItemList;
