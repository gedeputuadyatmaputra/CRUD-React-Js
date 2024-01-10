import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import Notification from "../components/Notification";

const DataWargaPage = () => {
  const [wargaData, setWargaData] = useState([]);
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost/ujian_pweb/backend/read.php");
      if (response.data.data.length >= 0) {
        setWargaData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  };
  const deleteWrg = async (wrgId) => {
    try {
      await axios.delete(`http://localhost/ujian_pweb/backend/deleted.php/${wrgId}`);
      setMsg("Data Delete Success");
      setIsError(false);
    } catch (error) {
      setMsg("Data Gagal Edit");
      setIsError(false);
    }
    // Memperbarui updateMemoryList
  };

  return (
    <Layout>
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="mt-5 container mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center mx-2">
          Data Warga RW 04
        </h1>

        <div className="mt-5 mb-5">
          <a
            className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg m-4 mx-2"
            href="/tambah_data"
          >
            Tambah Data
          </a>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-stone-200">
              <th className="border border-black p-2">No</th>
              <th className="border border-black p-2">Nama</th>
              <th className="border border-black p-2">Umur</th>
              <th className="border border-black p-2">Alamat</th>
              <th className="border border-black p-2">Jenis Kelamin</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {wargaData.length > 0 ? (
              wargaData.map((item, index) => (
                <tr key={item.id} className="bg-white">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{item.nama}</td>
                  <td className="border border-gray-300 p-2">{item.umur}</td>
                  <td className="border border-gray-300 p-2">{item.alamat}</td>
                  <td className="border border-gray-300 p-2">{item.jenis_kel}</td>
                  <td className="border border-gray-300 p-2">
                    <div className="grid grid-cols-2 text-center gap-2 px-2">
                      <a
                        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg"
                        href={`/edit_data/${item.id}`}
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Apakah Anda yakin ingin menghapus Warga ini?"
                            )
                          ) {
                            deleteWrg(item.id);
                          }
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
                        href="/"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border p-2 text-center">
                  Data Warga tidak ada yang tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default DataWargaPage;
