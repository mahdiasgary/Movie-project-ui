import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "WEBP"];

function DragDropSeriesFile({}) {
  const handleChange = (file) => {
    // if (content === "cover") return setMovieCover(file);
    // else return setMovieBackground(file);
  };
  return (
    <div>
      <div>
        <FileUploader
          handleChange={handleChange}
          name="image"
          types={fileTypes}
        
        >
                 <div className="bg-btn relative px-4 py-2 rounded-xl hover:bg-screenDark duration-200 cursor-pointer ">choice file</div>

        </FileUploader>
      </div>
    </div>
  );
}

export default DragDropSeriesFile;
