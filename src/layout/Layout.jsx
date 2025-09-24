import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function Layout({ children }) {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50" cart={cart} />

      <main className="flex-grow relative z-0">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
