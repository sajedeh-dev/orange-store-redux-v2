import styles from "./Banner.module.css";
import image from "../assets/banner.png";

const Banner = () => {
  return (
    
    <section className={styles.container}>
      <h2 className={styles.title}>✨On Sale✨</h2>
      <div className={styles.sale}>
        <h1>on sale 50%</h1>
      </div>
      <div className={styles.banner}>
      <div className={styles.left}>
        <h2>🛍️ Special Discount Just for You!</h2>
        <p>
          Enjoy exclusive deals and save up to 50% on your favorite products.
          Offer valid while supplies last.
        </p>
        <button className={styles.button}>SHOP NOW</button>
      </div>
      <div className={styles.right}>
        <img src={image} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Banner;
