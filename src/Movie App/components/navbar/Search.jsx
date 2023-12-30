import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { styles } from "../../styles/styles";
import SearchItem from "./SearchItem";

const Search = ({ isSearch, setIsSearch }) => {
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const data = [];

  useEffect(() => {
    if (isSearch === false) return setSearch("");
  }, [isSearch]);
  return (
    <div className="relative flex  flex-col pt-4 md:-pt-4 focus:outline-none focus:ring focus:ring-violet-300  z-50 ">
      <div className="flex z-50 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={`${
            styles.searchInput
          }  placeholder:text-sm origin-right w-[250px] ${
            !activeSearch
              ? "scale-x-0 y9:scale-100 duration-300"
              : "duration-500"
          }    `}
          type="text"
          placeholder="Type to search . . ."
          value={search}
        />
        <RiSearch2Line
          onClick={() => setIsSearch(!isSearch)}
          className={`${styles.searchIcn}`}
        />
        <RiSearch2Line
          onClick={() => setActiveSearch(!activeSearch)}
          className={`${styles.searchIcn2} ${
            activeSearch ? "rounded-l-[0] border-l-0 " : "duration-1000"
          } `}
        />
      </div>
      <div
        className={`origin-top ${
          (!isSearch || search === "" || search === " " || search === null) &&
          "scale-y-0"
        } duration-500 absolute  top-12  w-full z-50 `}
      ></div>
      <div className="dark:bg-[#29263b] bg-white mx-3  mt-1 rounded-b-lg ">
        {data?.results?.slice(0, 4).map((result, index) => (
          <SearchItem
            result={result}
            key={index}
            search={isSearch}
            setSearch={setIsSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
