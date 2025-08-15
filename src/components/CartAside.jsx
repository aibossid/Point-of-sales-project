import { useState } from "react";
import { useDataStore } from "../store/useDataStore";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CartAside() {
  const {
    decQty,
    removeFromCart,
    clearCart,
    cart,
    addToCart,
    updateQty,
    sendReport,
  } = useDataStore();
  const [uangKembali, setUangKembali] = useState(0);

  const subTotal = cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  const ppn = subTotal * 0.11;
  const total = subTotal + ppn;
  const test = uangKembali - total;
  const finals = isNaN(test) ? 0 : test;

  const handlePayment = () => {
    if (uangKembali < total) {
      alert("UANG YANG DIBAYARKAN TIDAK CUKUP");
      return;
    }
    const transaksi = {
      id: Date.now(),
      item: cart,
      total: total,
      tanggal: new Date().toLocaleString("id-ID"),
    };

    sendReport(transaksi);
    clearCart();

    alert("transaksi berhasil di simpan");
  };

  return (
    <aside className="w-full sm:w-80 p-4 flex flex-col gap-4">
      {/* Box Keranjang */}
      <div className="bg-white shadow-2xl rounded-xl p-4 flex flex-col h-[55vh] sm:h-[55%] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
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
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-100"
            >
              {/* Info Produk */}
              <div className="flex flex-col items-start sm:items-start">
                <img
                  src={product.image}
                  className="w-16 h-16 rounded-lg shadow-md object-cover"
                />
                <h4 className="font-medium text-green-500">{product.title}</h4>
                <p className="text-sm text-gray-500 font-bold">
                  Rp {product.price.toLocaleString("id-ID")} × {product.qty}
                </p>

                {/* Qty Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decQty(product.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <input
                    className="w-12 h-8 text-center bg-gray-100 rounded"
                    type="number"
                    value={product.qty}
                    onChange={(e) =>
                      updateQty(product.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Harga + Tombol Hapus */}
              <div className="text-right mt-2 sm:mt-0">
                <p className="font-semibold text-gray-800">
                  Rp {(product.qty * product.price).toLocaleString("id-ID")}
                </p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-white text-xs mt-1 px-2 py-1 rounded bg-red-500 hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Box Total */}
      <div className="bg-white shadow-2xl rounded-xl p-4 space-y-3">
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

        {/* Bayar + Kembalian */}
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
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 bg-cyan-500 text-white shadow-lg hover:opacity-90">
              Digital
            </button>
            <button className="flex-1 border border-gray-300 rounded-lg py-2 bg-indigo-500 text-white shadow-lg hover:opacity-90">
              Cash
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Proses Pembayaran */}
      <button
        className="w-full bg-green-400 hover:bg-green-500 text-white py-3 rounded-xl font-medium shadow-lg shadow-green-500/60"
        onClick={handlePayment}
      >
        PAYMENT
      </button>
    </aside>
  );
}
