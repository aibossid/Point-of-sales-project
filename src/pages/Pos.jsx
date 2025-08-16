import { useDataStore } from "../store/useDataStore";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../layout/Layout";
import CartAside from "../components/CartAside";
import Search from "../components/Search";

export default function Pos() {
  const { getProduct, product } = useDataStore();
  const [cari, setCari] = useState("");

  const productFilterss = product.filter((item) =>
    item.title.toLowerCase().includes(cari.toLowerCase())
  );

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <Layout cartAside={<CartAside />}>
      <Search onSearch={setCari} />
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-shadow-lg/30 text-center bg-green-100 p-2 rounded-4xl shadow-xl shadow-green-200/50">
          POINT OF SALES
        </h1>

        {/* Grid produk responsif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productFilterss.map((data) => (
            <ProductCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
