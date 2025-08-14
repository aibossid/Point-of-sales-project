import { Link, NavLink } from "react-router-dom";

export default function Layout({ children, cartAside }) {
  return (
    <div className="flex min-h-screen text-gray-800 ">
      {/* Sidebar kiri */}
      <aside className="w-64 bg-white p-4 shadow-2xl">
        <h1 className="text-xl font-bold mb-8 text-green-500 ">
          POS Admin System
        </h1>
        <nav className="space-y-2 font-bold rounded-4xl">
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Dashboard
          </a>
          <NavLink
            to={"/cart"}
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Cart
          </NavLink>
          <a
            href="#"
            className="block py-2 px-3 rounded bg-green-100 text-green-700 font-medium"
          >
            Cashier
          </a>

          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Sales
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded hover:bg-green-100 transition"
          >
            Inventory
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
      <main className="flex-1 p-6">{children}</main>

      {/* Cart aside kanan */}
      <aside className="w-80 p-4 shadow-2xl ml-2 rounded-lg bg-white">
        {cartAside}
      </aside>
    </div>
  );
}
