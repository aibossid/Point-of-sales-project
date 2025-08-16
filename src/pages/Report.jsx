import { useState } from "react";
import { useDataStore } from "../store/useDataStore";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function Report() {
  const { report, deleteReport } = useDataStore();
  const [selectDate, setSelectDate] = useState(1);

  const filterReport = report.filter(
    (data) => data.tanggal === format(selectDate, "yyyy-MM-dd")
  );

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-bold mb-4">Laporan Transaksi</h1>
      <Link
        className="block text-lg font-bold mb-5 text-blue-600 hover:underline"
        to={"/"}
      >
        ← Back to Cashier
      </Link>

      <div className="mb-6">
        {" "}
        <DatePicker
          selected={selectDate}
          onChange={(date) => setSelectDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Pilih tanggal"
          className="border p-2 rounded-lg"
        />{" "}
      </div>

      <div className="space-y-8">
        {filterReport.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-lg p-4 border w-full"
          >
            {/* Info transaksi */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4 border-b pb-2">
              <div>
                <p className="text-gray-600 text-sm">Tanggal</p>
                <p className="font-semibold">{data.tanggal}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">ID Transaksi</p>
                <p className="font-semibold">{data.id}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total</p>
                <p className="font-bold text-green-600">
                  Rp {data.total.toLocaleString("id-ID")}
                </p>
              </div>
              <button
                onClick={() => deleteReport(data.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full sm:w-auto"
              >
                Hapus
              </button>
            </div>

            {/* Tabel Produk */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-700">
                      Gambar
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">
                      Produk
                    </th>
                    <th className="px-4 py-2 text-center text-gray-700">Qty</th>
                    <th className="px-4 py-2 text-right text-gray-700">
                      Harga
                    </th>
                    <th className="px-4 py-2 text-right text-gray-700">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.item.map((product, i) => (
                    <tr
                      key={i}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-2">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-10 w-10 object-contain"
                        />
                      </td>
                      <td className="px-4 py-2">{product.title}</td>
                      <td className="px-4 py-2 text-center">{product.qty}</td>
                      <td className="px-4 py-2 text-right">
                        Rp {product.price.toLocaleString("id-ID")}
                      </td>
                      <td className="px-4 py-2 text-right font-semibold">
                        Rp{" "}
                        {(product.qty * product.price).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
