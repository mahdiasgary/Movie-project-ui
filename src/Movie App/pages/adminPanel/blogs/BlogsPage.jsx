import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IdontKnowName } from "../../../components/admin/IdontKnowName";
const BlogsPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full min-h-screen pb-20">
      <IdontKnowName
        root={{ path: "/admin", value: "Dashboard" }}
        prob={[{ path: "/admin/blogs", value: "Blog" }]}
      />
      <div className="flex justify-center pt-10">
        <div className="w-[80vw] md:w-[65vw]   dark:bg-[#1c1d21] dark:bg-opacity-50 bg-white border-0 rounded-2xl">
          <ReactQuill
            style={{ border: "none" }}
            className=" bg- rounded-[60px] h-full  border-0 "
            theme="snow"
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [
                  { align: "" },
                  { align: "center" },
                  { align: "right" },
                  { align: "justify" },
                ],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"],
              ],
              clipboard: {
                matchVisual: false,
              },
            }}
            value={value}
            onChange={setValue}
          ></ReactQuill>
        </div>
        {/* {value} */}
      </div>
    </div>
  );
};

export default BlogsPage;
