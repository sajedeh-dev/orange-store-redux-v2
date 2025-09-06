import { categories } from "../constants/list";
import { Link } from "react-router-dom";


import electronicsImg from "../assets/elec.jpg";
import jeweleryImg from "../assets/jer.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";


const categoryImages = {
  "electronics": electronicsImg,
  "jewelery": jeweleryImg,
  "men's clothing": menImg,
  "women's clothing": womenImg,
  
};

function Categories() {
  return (
    <section className=" mt-20">
      <h2  className=" text-4xl text-orange-500 font-bold text-center mb-12">✨Shop by Category✨</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
        {categories
          .filter(cat => cat.type !== "all") 
          .map((cat) => (
            <div key={cat.id} className="border-3 border-dashed rounded-xl border-orange-500 flex flex-col gap-4 items-center py-8 ">
              <img className="h-[160px] w-[160px] rounded-xl" src={categoryImages[cat.type]} alt={cat.type} />
              <h3 className=" text-2xl text-orange-500 font-bold">{cat.type}</h3>
              <Link
                to={`/products?category=${encodeURIComponent(cat.type)}`}
                className=" border-3 rounded-xl border-dashed border-orange-500 hover:bg-orange-200 transition-all px-4 py-3"
              >
                View Products
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Categories;
