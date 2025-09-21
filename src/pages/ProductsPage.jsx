import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";

import Card from "../components/Card";
import Loader from "../components/Loader";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helpers";
import { fetchProducts } from "../features/product/productSlice";



import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  
  const dispatch = useDispatch();
  const {products , loading} = useSelector(store => store.product);
  

  const [displyed, setDisplyed] = useState([]);
  const [search, setSearch] = useState("");
  //برای نگهداشتن فیلترها
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts())
  },[]);

  useEffect(() => {
    setDisplyed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplyed(finalProducts);
  }, [query]);

  return (
    <section className="mt-20 grid grid-cols-1">
      <SearchBox  search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:flex">
        <Sidebar query={query} setQuery={setQuery} />
        <div className="flex flex-wrap justify-around">
          {loading && <Loader />}
          {displyed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default ProductsPage;
