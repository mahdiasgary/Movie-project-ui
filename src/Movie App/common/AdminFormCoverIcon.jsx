import React from 'react'
import { BsImageFill } from "react-icons/bs";

const AdminFormCoverIcon = ({image ,secondeImage=true}) => { 
  return (
    <div>

        {image && secondeImage ? (
            <span className="absolute flex items-center justify-center w-10 h-10 bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-screenLight"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          ) : (
            <span className="absolute flex items-center justify-center w-10 h-10 text-screenLight bg-btn rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-btn">
              <BsImageFill />
            </span>
          )} 
    </div>
       )
}

export default AdminFormCoverIcon