import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#161616] rounded-lg px-4 py-8 md:px-8 mt-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        {/* about */}
        <div className="flex-1 min-w-[200px] mb-6">
          <h3 className="text-[#fca311] text-lg font-semibold mb-2">
            Orange Store
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Experience the best selection with us. Variety, quality, and fair
            prices.
          </p>
        </div>

        {/* links */}
        <div className="flex-1 min-w-[200px] mb-6">
          <h4 className="text-[#fca311] text-base font-semibold mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* social */}
        <div className="flex-1 min-w-[200px] mb-6">
          <h4 className="text-[#fca311] text-base font-semibold mb-2">
            Follow Us
          </h4>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#fca311] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="text-gray-400 hover:text-[#fca311] transition-colors"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-[#fca311] transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* copy */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-6 pt-4">
        © {new Date().getFullYear()} Orange Store - Developed by Sajedeh.
      </div>
    </footer>
  );
}
