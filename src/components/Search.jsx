import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState();

  function handleClick() {
    onSearch(query);
    setQuery("");
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch m-5 gap-2 sm:gap-1">
      {" "}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className="px-4 py-2 sm:px-5 sm:py-4 flex-1 bg-gray-100 rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none text-indigo-700 font-bold shadow-2xl shadow-indigo-500/60"
      />{" "}
      <button
        className="px-4 py-2 sm:px-5 sm:py-4 bg-indigo-500 text-white font-bold rounded-b-2xl sm:rounded-r-2xl sm:rounded-b-none shadow-2xl shadow-indigo-500/60"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
