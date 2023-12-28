import { Button, Modal, Spinner } from "flowbite-react";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AlertModal = ({
  openModal,
  data,
  loading,
  setLoading,
  setOpenModal,
  functionHandler,
  input,
  functionHandler2,
  text,
  from,
}) => {
  // console.log(loading);
  const props = { openModal, setOpenModal };
  return (
    
    <Modal
      // dismissible
      show={props.openModal === "pop-up"}
      size="md"
      popup
      onClose={() => {
       from ==='user' && functionHandler2(input);
        props.setOpenModal(undefined);
      }}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {text}{" "}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              disabled={loading ? true : false}
              onClick={() => functionHandler(from)}
              className="en bg-btn text-white  duration-150"
              color="red-500"
              // onClick={() => props.setOpenModal(undefined)}
            >
              {loading ? (
                <button disabled={loading ? true : false} className="flex">
                  <svg
                    class="w-4 h-4 mr-1 mt-[2px] self-center text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading
                </button>
              ) : (
                " Yes, I'm sure"
              )}
            </Button>
            <Button
              color="gray"
              onClick={() => {
                from ==='user' &&   functionHandler2(input);
                props.setOpenModal(undefined);
              }}
              className="en"
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AlertModal;
