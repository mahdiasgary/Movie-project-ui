// import logoImage from "../assets/logoImage.png";
// import d from "../assets/d.png";
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
const Foter = () => {
  return (
    <div className=" rounded-t-3xl relative dark:bg-opacity-80 dark:bg-border dark:text-white bg-[#e5e7eb] text-black md:px-16 pt-10 pb-10 mt-72 ">
      <div className="flex flex-col lg:flex-row lg:justify-between ">
        <div className="  flex justify-center md:w-[470px] text-sm leading-5 md:leading-7">
          <div className="px-5 lg:py-0 lg:px-0 " id="about">
            <p className="text-[17px] font-bold mb-2 ">About KEYSER SöZE</p>
            <p className="text-[#6a6c87] dark:text-textPlight text-center md:text-start ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              dicta consequuntur at, explicabo dolore quia repudiandae voluptas
              quibusdam voluptatibus consectetur optio laborum officiis dolor
              soluta tenetur eum fugiat ipsum debitis.
            </p>
          </div>
        </div>
        {/* <div >
        <p className="text-[17px] font-bold ">نحوه رزرو مشتریان</p>
        <div className="pt-3 flex flex-col gap-4 text-center">
          <p> راهنمای رزرو اقامتگاه </p>
          <p>شیوه پرداخت</p>
        </div>
      </div> */}
        <div className="px-8 py-8 lg:py-0 lg:px-0 self-center">
          <p className=" text-[17px] font-bold text-center"> Contact Us </p>
          <div className=" faNumber pt-3 flex flex-col gap-2 text-center">
            <p>KEYSERSöZE@gmail.com </p>
          </div>
        </div>

        <div className="px-8 py-8 lg:py-0  text-center lg:px-0 lg:ml-10 self-center ">
          <div className="flex flex-col">
            {/* <img
              className="self-center  "
              src={logoImage}
              alt="img"
       
            /> */}
            <p className="font-bold ">KEYSER SöZE</p>
          </div>
          <div className="mt-3">
            <p>Follow us in Social Media</p>{" "}
            <div className="flex justify-center gap-2 mt-3">
              <div className="text-[#6a6c87]">
                {/* <a href="#">
                  <div>
                    <FaLinkedin className="text-[30px] text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-blue-700 dark:hover:text-blue-600 " />
                  </div>
                </a> */}
              </div>
              <a href="https://instagram.com/lakoode?igshid=ZGUzMzM3NWJiOQ==">
                <div>
                  <FaInstagram className="text-[30px] ml-5 text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-red-500 dark:hover:text-red-500" />
                </div>
              </a>{" "}
              <a href="https://t.me/villa_lakoode">
                <div>
                  <FaTelegram className="text-[30px] text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-blue-400 dark:hover:text-blue-400" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div>
        <p>نحوه رزرو مشتریان</p>
        <div>
          <p> راهنمای رزرو اقامتگاه </p>
          <p>شیوه پرداخت</p>
        </div>
      </div> */}
      </div>

      {/* <div
      id="test2"
      className="bg-white rounded-3xl shadow-xl w-72 p-8 flex flex-col justify-center items-center"
    >
      <div className="faNumber">55</div>
    </div>
    <div className="text-xl m-9 grid place-items-center">
      <hr className="p-2 w-96" />
      Copyright-© {new Date().getFullYear()}
    </div> */}
      {/* <div className="text-center mt-10">تمامی حقوق برای لاکوده محفوظ است</div> */}
    </div>
  );
};
export default Foter;
