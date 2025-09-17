import Header from "./Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function Layout({ children }) {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex flex-col min-h-screen">
      <Header cart={cart} />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
