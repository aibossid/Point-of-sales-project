import { useState } from "react";
import { useDataStore } from "../store/useDataStore";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CartAside() {
  const { decQty, removeFromCart, clearCart, cart, addToCart, updateQty } =
    useDataStore();
  const [uangKembali, setUangKembali] = useState(0);

  const subTotal = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const ppn = subTotal * 0.1;
  const total = subTotal + ppn;
  const test = uangKembali - total;
  const finals = isNaN(test) ? 0 : test;

  return (
    <aside className="w-80 p-4 pr-6 flex flex-col gap-4">
      {/* Box Keranjang */}
      <div className="bg-white shadow-2xl rounded-xl p-4 flex flex-col h-[55%] mr-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 mr-4">
          <h2 className="text-lg font-bold">Cart</h2>
          <button
            onClick={clearCart}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm"
          >
            <RiDeleteBin5Fill size={16} />
            <span className="font-bold">Reset Cart</span>
          </button>
        </div>

        {/* List Produk */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 border-gray-100">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center pb-3 border-b border-gray-100"
            >
              <div>
                <img
                  src={product.image}
                  className="w-15 h-15 rounded-4xl shadow-2xl border-gray-300"
                />
                <h4 className="font-medium text-green-500">{product.title}</h4>
                <p className="text-sm text-gray-500 font-bold">
                  Rp {product.price.toLocaleString("id-ID")} × {product.qty}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decQty(product.id)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">
                    <input
                      className="w-12.5 h-10 ring-0 bg-gray-100 p-1 rounded-xs size-"
                      type="number"
                      value={product.qty}
                      onChange={(e) =>
                        updateQty(product.id, parseInt(e.target.value))
                      }
                    />
                  </span>
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded ml-6"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  Rp {(product.qty * product.price).toLocaleString("id-ID")}
                </p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-white hover:text-blue-600 text-xs mt-1 border-1 p-1 rounded-2xl bg-red-500 shadow-xl shadow-red-400/50  "
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Box Total */}
      <div className="bg-white shadow-2xl rounded-xl p-4 space-y-3 mr-4 ">
        <div className="flex justify-between text-sm">
          <span className="font-bold">Subtotal:</span>
          <span>Rp {subTotal.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-bold">PPN (11%):</span>
          <span>Rp {ppn.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between font-bold text-lg text-green-600">
          <span>Total:</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </div>
        {/* bayar kembalian */}
        <div className="space-y-2">
          <label className="block text-green-600 font-bold text-lg">
            Bayar:
          </label>
          <input
            type="number"
            value={uangKembali}
            onChange={(e) => setUangKembali(parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Masukkan jumlah bayar"
          />
          <div className="bg-green-50 p-2 rounded-lg border border-green-200 text-green-700 font-semibold">
            Kembalian: Rp {finals?.toLocaleString("id-ID")}
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Metode Pembayaran</h3>
          <div className="flex gap-2">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 delay-150 ease-in transition hover:scale-100">
              Digital
            </button>
            <button className="flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 font-bold bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:scale-110 delay-300 transition ease-in">
              Cash
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Proses Pembayaran */}
      <button className="w-full bg-green-400 hover:bg-green-500 text-white py-3 rounded-xl font-medium shadow-lg shadow-green-500/60">
        PAYMENT
      </button>
    </aside>
  );
}
