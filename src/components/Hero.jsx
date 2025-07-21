import styles from "./Hero.module.css";
import image from "../assets/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Spread Your Charming <br />
          With Your Fation{" "}
        </h1>
        <p>Lets Create your own style</p>
        <Link to="/products" className={styles.heroBtn}>
          Start buy
        </Link>
      </div>
      <div className={styles.heroo}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
