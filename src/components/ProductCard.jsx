import { useDataStore } from "../store/useDataStore";
import { useState } from "react";

export default function ProductCard({ data }) {
  const { addToCart } = useDataStore();
  const [kuantitas, setKuantitas] = useState(null);

  return (
    <div className=" rounded-4xl shadow-2xl p-4 flex flex-col items-center ring-0 shadow-gray-400/70 transition">
      <img
        src={data.image}
        alt={data.title}
        className="w-30 h-30 object-contain mb-4 hover:ease-in-out transition delay-150 duration-1000 hover:-translate-y-1 hover:scale-120"
      />{" "}
      <h3 className="text-sm font-semibold text-center mb-2 line-clamp-3 flex-1/4">
        {data.title}
      </h3>
      <p className="text-lg font-bold text-green-600 mb-3">
        ${data.price.toLocaleString("id-ID")}{" "}
      </p>
      <input
        type="number"
        min="1"
        value={kuantitas}
        onChange={(e) => setKuantitas(Number(e.target.value))}
        className=" p-1 w-15 text-center rounded-4xl mb-3 shadow-lg shadow-gray-500/30 font-bold"
      />
      <button
        onClick={() => addToCart(data, kuantitas)}
        className="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-4 rounded-4xl shadow-xl shadow-indigo-500/50 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        Add to Cart
      </button>
    </div>
  );
}
