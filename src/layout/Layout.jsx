import { Link,  } from "react-router-dom";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import styles from "./Layout.module.css";
import Header from "./Header";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const cart = useSelector((store) => store.cart);
  

  return (
    <>
    <Header  cart={cart}/>
      

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.about}>
            <h3>Orange Store</h3>
            <p>
              Experience the best selection with us. Variety, quality, and fair
              prices.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.icons}>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Telegram">
                <FaTelegram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Orange Store - Developed by Sajedeh.
        </div>
      </footer>
    </>
  );
}

export default Layout;
