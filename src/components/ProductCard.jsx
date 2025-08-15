import { useDataStore } from "../store/useDataStore";
import { useState } from "react";

export default function ProductCard({ data }) {
  const { addToCart } = useDataStore();
  const [kuantitas, setKuantitas] = useState(1);

  return (
    <div className="rounded-2xl shadow-2xl p-4 flex flex-col items-center ring-0 shadow-gray-400/70 transition w-full sm:w-60 bg-white">
      <img
        src={data.image}
        alt={data.title}
        className="w-28 h-28 sm:w-32 sm:h-32 object-contain mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
      />
      <h3 className="text-sm sm:text-base font-semibold text-center mb-2 line-clamp-3">
        {data.title}
      </h3>
      <p className="text-base sm:text-lg font-bold text-green-600 mb-3">
        Rp {data.price.toLocaleString("id-ID")}
      </p>

      <input
        type="number"
        min="1"
        value={kuantitas}
        onChange={(e) => setKuantitas(Number(e.target.value))}
        className="p-1 w-16 text-center rounded-xl mb-3 shadow-lg shadow-gray-500/30 font-bold border border-gray-200"
      />

      <button
        onClick={() => addToCart(data, kuantitas)}
        className="w-full bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded-xl shadow-xl shadow-indigo-500/50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
      >
        Add to Cart
      </button>
    </div>
  );
}
