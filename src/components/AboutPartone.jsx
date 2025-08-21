import treeImage from "../assets/tree.jpg";
import towImage from "../assets/two.jpg";
import fourImage from "../assets/four.jpg";
import oneImage from "../assets/one.jpg";

import styles from "./AboutPartone.module.css";

function AboutPartone() {
  return (
    <section className={styles.container}>
      <div className={styles.topPart}>
        <h1>About Us✨</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br/>
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.botemPart}>
        <img src={fourImage} alt="" />
        <img src={treeImage} alt="" />
        <img src={oneImage} alt="" />
        <img src={fourImage} alt="" />
        <img src={towImage} alt="" />
      </div>
    </section>
  );
}

export default AboutPartone;
