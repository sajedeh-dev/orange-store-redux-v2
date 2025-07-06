
import styles from './Hero.module.css';
import image from "../assets/hero.svg"

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1>Spread Your Charming <br />With Your Fation </h1>
        <p>Lets Create your own style</p>
        <a href="/products" className={styles.heroBtn}> Start buy </a>
      </div>
      <div className={styles.heroo}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;

