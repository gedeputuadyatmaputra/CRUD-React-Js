import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Notification from "./Notification";

function FormEdiit() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenis_kel, setKel] = useState("Laki - Laki");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/ujian_pweb/backend/read_by_id.php/${id}`
        );

        // Inisialisasi nilai input dengan nilai dari server
        setNama(response.data.data.nama);
        setUmur(response.data.data.umur);
        setAlamat(response.data.data.alamat);
        setKel(response.data.data.jenis_kel);
      } catch (error) {
        console.error("Error: " + error);
      }
    };
    getData();
  }, [id]);

  const updateWarga = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost/ujian_pweb/backend/update.php/${id}`, {
        nama: nama,
        umur: umur,
        alamat: alamat,
        jenis_kel: jenis_kel
      });
      setMsg("Data Berhasil Edit");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Berhasil Edit");
        setIsError(true);
      }
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="p-4 lg:w-1/2">
        <form
          onSubmit={updateWarga}
          className="bg-neutral-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              NAMA
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="Nama"
              value={nama || ""} // Menambahkan nilai awal
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="umur"
            >
              Umur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="umur"
              type="text"
              placeholder="Umur"
              value={umur || ""} // Menambahkan nilai awal
              onChange={(e) => setUmur(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamat"
              type="text"
              placeholder="Alamat"
              value={alamat || ""} // Menambahkan nilai awal
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jenis_kel"
            >
              Jenis Kelamin
            </label>
            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id ="jenis_kel"
              value={jenis_kel}
              onChange={(e) => setKel(e.target.value)}
              >
                <option>--- Pilih Jenis Kelamin ---</option>
                <option value="Laki - Laki">Laki - Laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEdiit;
