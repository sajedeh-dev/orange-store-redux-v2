
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotfound from "./pages/404";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
    </Layout>
  );
}

export default App;

