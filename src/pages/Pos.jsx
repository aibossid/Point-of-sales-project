import { useDataStore } from "../store/useDataStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../layout/Layout";
import CartAside from "../components/CartAside";
import Search from "../components/Search";

export default function Pos() {
  const { product, getProduct, searchKeyword } = useDataStore();

  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <Layout cartAside={<CartAside />}>
      <Search />
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-shadow-lg/30 text-center  bg-green-100 p-2 rounded-4xl shadow-xl shadow-green-200/50">
          POINT OF SALES
        </h1>

        {/* Grid produk */}
        <div className="grid grid-cols-3 gap-4 ">
          {filteredProduct.map((data) => (
            <ProductCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
