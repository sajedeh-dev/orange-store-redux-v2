import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );
  if (!productDetails) return <Loader />;

  return (
    <div className="mt-20 grid grid-cols-1 gap-4 ml-8 md:ml-0 md:flex md:items-start md:justify-between md:gap-6 ">
      <img
        className=" bg-white border-2 border-dashed border-orange-600  rounded-2xl px-16 py-8 w-96"
        src={productDetails.image}
        alt="productDetails.title"
      />
      <div className="w-full p-8  bg-white border-2 border-dashed border-orange-600 rounded-2xl ">
        <h3 className="text-orange-600 font-medium text-2xl mb-10">
          {productDetails.title}
        </h3>
        <p className="text-gray-600  text-xl mb-10">
          {productDetails.description}
        </p>
        <p className="mb-5 flex items-center gap-4 text-lg font-medium">
          <SiOpenproject className="mb-3" />
          {productDetails.category}
        </p>
        <div className=" flex flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between ">
          <span className=" flex items-center gap-4 text-lg font-medium">
            <IoMdPricetag />
            {productDetails.price}$
          </span>
          <div className="flex items-center gap-2 bg-orange-400 rounded-xl justify-center py-3 px-4  ">
            <FaArrowLeft className="text-white size-5 " />
            <Link
              to="/products"
              
            >
              <span className="text-white ">back to shop</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
