import { createQueryObject } from "../helpers/helpers";
import { FaListUl } from "react-icons/fa";
import { categories } from "../constants/list";

function Sidebar({ setQuery, query }) {
  const categoryHandler = (event) => {
    const li = event.target.closest("li");
    if (!li) return;

    const category = li.innerText.trim().toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="w-[200px] h-fit m-2 ml-[30px] p-5 bg-white border-2 border-dashed border-[#e2e2e2]">
      <div className="w-[200px] flex items-center mb-2 text-[#fe5d42] font-medium">
        <FaListUl />
        <p className="ml-2">Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={`list-none p-1 cursor-pointer hover:text-[#fe5d42] ${
              item.type.toLowerCase() === query.category
                ? "bg-[#f7753d49] text-[#fe5d42] rounded-lg"
                : ""
            }`}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

