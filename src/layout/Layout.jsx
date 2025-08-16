import { Link, NavLink } from "react-router-dom";

export default function Layout({ children, cartAside }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-gray-800">
      {/* Sidebar kiri */}
      <aside className="w-full lg:w-64 bg-white p-4 shadow-2xl">
        <h1 className="text-xl font-bold mb-8 text-green-500">
          POS Admin System
        </h1>
        <nav className="space-y-2 font-bold">
          <a
            href="#"
            className="block py-2 px-3 rounded bg-green-100 text-green-700 font-medium"
          >
            Dashboard
          </a>

          <NavLink
            to={"/report"}
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Report
          </NavLink>
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Konten utama */}
      <main className="flex-1 p-4 order-last lg:order-none">{children}</main>

      {/* Cart aside kanan */}
      <aside className="w-full lg:w-80 p-4 shadow-2xl rounded-lg bg-white">
        {cartAside}
      </aside>
    </div>
  );
}
