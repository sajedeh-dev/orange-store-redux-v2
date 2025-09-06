import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function Header({ cart }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* لوگو */}
        <div className="text-xl font-bold text-orange-500">
          <Link to="/">OrangeStore🍊</Link>
        </div>

        {/* دکمه منو موبایل */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* ناوبری */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 py-4 md:p-0 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                className={`hover:text-orange-500 ${
                  currentPath === "/" ? "text-orange-500 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:text-orange-500 ${
                  currentPath === "/products"
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-orange-500 ${
                  currentPath === "/about"
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-orange-500 ${
                  currentPath === "/contact"
                    ? "text-orange-500 font-semibold"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* آیکون‌های کاربر */}
        <div className="flex items-center gap-4">
          <Link to="/checkout" className="relative text-gray-700 hover:text-orange-500">
            <HiOutlineShoppingCart size={24} />
            {!!cart.itemsCounter && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.itemsCounter}
              </span>
            )}
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-orange-500">
            <CgProfile size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
