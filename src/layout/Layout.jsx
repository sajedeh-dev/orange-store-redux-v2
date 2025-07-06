import { Link , useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const cart = useSelector((store) => store.cart);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link to="/">OrangeStore🍊</Link>
          </div>

          <nav className={styles.nav}>
            <Link to="/" className={currentPath === "/" ? styles.active : ""}>
              Home
            </Link>
            <Link
              to="/products"
              className={currentPath === "/products" ? styles.active : ""}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={currentPath === "/about" ? styles.active : ""}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={currentPath === "/contact" ? styles.active : ""}
            >
              Contact Us
            </Link>
          </nav>

          <div className={styles.userActions}>
            <Link to="/checkout" className={styles.cart}>
              <HiOutlineShoppingCart size={24} />
              {!!cart.itemsCounter && (
                <span className={styles.badge}>{cart.itemsCounter}</span>
              )}
            </Link>
            <Link to="/profile" className={styles.profile}>
              <CgProfile size={24} />
            </Link>
          </div>
        </div>
      </header>

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
