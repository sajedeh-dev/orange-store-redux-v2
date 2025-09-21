import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helpers";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="mx-[10px] mb-[50px]">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="border-2 border-dashed border-[#fe5d42] p-2.5 w-[250px] text-sm text-[#fe5d42] rounded-lg mr-2 focus:outline-none"
      />
      <button
        onClick={searchHandler}
        className="p-2.5 text-base bg-[#fe5d42] text-white rounded-lg cursor-pointer"
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
