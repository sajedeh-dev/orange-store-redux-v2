import BasketCard from "../components/BasketCard";
import BasketSidbar from "../components/BasketSidbar";

import image from "../assets/emptycard.png"
import {  useSelector } from "react-redux";


function CheckoutPage() {
  const state = useSelector(store => store.cart);

 
  if (!state.itemsCounter) {
    return (
      <div className=" mt-20 flex flex-col justify-center  ">
        <p className=" text-2xl font-medium text-gray-700 text-center mt-8">select your products</p>
        <img className="px-36" src={image} alt="emptycart" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:flex md:items-start md:gap-4 mt-20 ">
     
      <div className="w-full">
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            
          />
        ))}
      </div>
       <BasketSidbar  state={state} />
    </div>
  );
}

export default CheckoutPage;
