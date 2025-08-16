import { useDataStore } from "../store/useDataStore";
import Search from "../components/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Inventory() {
  const { product } = useDataStore();
  const [stok, setStok] = useState(0);
  const [keywords, setKeywords] = useState("");

  const dataInventory = product.filter((item) =>
    item.title.toLowerCase().includes(keywords.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Bagian Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <Link
          className="text-lg font-bold text-blue-600 hover:underline"
          to={"/"}
        >
          ← Back to Dashboard
        </Link>
        <Search onSearch={setKeywords} />
      </div>

      {/* Header */}
      <h2 className="col-span-full text-center font-extrabold text-2xl text-gray-800 uppercase bg-gradient-to-r from-green-100 via-white to-green-100 rounded-full py-3 shadow-md mb-6">
        STOCK MANAJEMEN
      </h2>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataInventory.map((data) => (
          <div
            key={data.id}
            className="rounded-4xl shadow-2xl p-4 flex flex-col items-center ring-0 shadow-gray-400/70 transition hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-28 h-28 object-contain mb-4"
            />
            <h2 className="text-sm font-semibold text-center mb-2 line-clamp-3">
              {data.title}
            </h2>
            <h2 className="text-sm font-semibold text-center mb-2 line-clamp-3">
              Category : {data.category}
            </h2>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              className="p-1 w-20 text-center rounded-4xl mb-3 shadow-lg shadow-gray-500/30 font-bold"
            />
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-4 rounded-4xl shadow-xl shadow-indigo-500/50 transition delay-100 duration-300 ease-in-out">
              Update Stock
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
