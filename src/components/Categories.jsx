import { categories } from "../constants/list";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

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
    <section className={styles.section}>
      <h2 className={styles.title}>✨Shop by Category✨</h2>
      <div className={styles.grid}>
        {categories
          .filter(cat => cat.type !== "all") 
          .map((cat) => (
            <div key={cat.id} className={styles.card}>
              <img src={categoryImages[cat.type]} alt={cat.type} />
              <h3>{cat.type}</h3>
              <Link
                to={`/products?category=${encodeURIComponent(cat.type)}`}
                className={styles.btn}
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
