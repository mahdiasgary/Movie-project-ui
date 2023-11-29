
import ComingSoonItem from "./ComingSoonItem";
const ComingSoon = () => {
  let data = [
    "16419074",
    "12311866",
    "26675252",
    "11820950",
    "15538570",
    "26593762",
  ];

  return (
    <div className=" lg:w-[300px] dark:bg-border opacity-75 bg-white   rounded-3xl ">
      <div className="mx-3 pt-3 ">
        {data?.slice(0, 5)?.map((item, index) => (
          <ComingSoonItem movieId={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
