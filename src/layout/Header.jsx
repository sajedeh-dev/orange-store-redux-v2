

import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function Header({ cart }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  // آیتم‌های منو
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  // کلاس لینک‌ها
  const linkClass = (path) =>
    `transition-colors duration-200 ${
      currentPath === path
        ? "text-orange-500 font-semibold"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* لوگو */}
        <div className="text-xl font-bold text-orange-500">
          <Link to="/">OrangeStore🍊</Link>
        </div>

        {/* دکمه موبایل */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* ناوبری دسکتاپ */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={linkClass(item.path)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* آیکون‌های کاربر */}
        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className="relative text-gray-700 hover:text-orange-500 transition-colors duration-200"
          >
            <HiOutlineShoppingCart size={24} />
            {!!cart.itemsCounter && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.itemsCounter}
              </span>
            )}
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
          >
            <CgProfile size={24} />
          </Link>
        </div>
      </div>

      {/* ناوبری موبایل */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={linkClass(item.path)}
                  onClick={() => setIsOpen(false)} // بستن منو بعد از کلیک
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

