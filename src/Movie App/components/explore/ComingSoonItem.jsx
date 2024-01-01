import { Link } from "react-router-dom";

const ComingSoonItem = ({ movieId }) => {
  const data=[]

  return (
    <div className="flex py-2">
      {/* <img
        src={data?.title?.image.url}
        alt=""
        className="w-[120px] h-[176px] rounded-lg "
      /> */}
      <div className="ml-3 flex flex-col justify-between ">
        <div>
          <div className="mt-1">
            <p className="text-[19px] ">{data?.title?.title} </p>
          </div>

          <div>
            <div>
              {data?.genres?.slice(0, 1).map((genre, index) => (
                <Link
                  key={index}
                  to={{
                    pathname: `/genres/${genre?.toLocaleLowerCase()}`,
                    state: { genre },
                  }}
                >
                  <p className="mr-2 backdrop-blur-sm duration-300 text-center bg-gray-200 dark:bg-opacity-10 py-1 px-2 mt-2 rounded-sm hover:bg-screenDark ">
                    {genre}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-1 text-btn font-semibold pb-3   ">
          <span className="font-semibold text-textPDark "> Release Date :</span>{" "}
          {data?.releaseDate}{" "}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonItem;
