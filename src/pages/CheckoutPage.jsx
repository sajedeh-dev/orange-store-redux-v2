import BasketCard from "../components/BasketCard";
import BasketSidbar from "../components/BasketSidbar";
import styles from './Checkout.module.css'
import image from "../assets/emptycard.png"
import { useDispatch, useSelector } from "react-redux";


function CheckoutPage() {
  const state = useSelector(store => store.cart);

 
  if (!state.itemsCounter) {
    return (
      <div className={styles.emptycart}>
        <p>select your products</p>
        <img src={image} alt="emptycart" />
      </div>
    );
  }
  return (
    <div className={styles.cotainer}>
      <BasketSidbar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
