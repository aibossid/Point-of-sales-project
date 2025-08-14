import { useDataStore } from "../store/useDataStore";

export default function Search() {
  const { searchKeyword, getSearchKeyword } = useDataStore();

  return (
    <div className="flex items-center m-5 gap-1">
      <input
        type="text"
        placeholder="Search"
        value={searchKeyword}
        onChange={(e) => getSearchKeyword(e.target.value)}
        className="p-5 flex-1 bg-gray-100 rounded-l-2xl text-indigo-700 font-bold shadow-2xl shadow-indigo-500/60"
      />
      <button className="rounded-r-2xl p-5 bg-indigo-500 text-white font-bold shadow-2xl shadow-indigo-500/60">
        Search
      </button>
    </div>
  );
}
