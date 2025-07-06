import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h2>SUPER SALE</h2>
        <p>SPECIAL OFFER</p>
        <button className={styles.button}>SHOP NOW</button>
        
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Banner;

