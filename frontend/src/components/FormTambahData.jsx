import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

function FormTambahData() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenis_kel, setKel] = useState("Laki - Laki");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  const saveWarga = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("umur", umur);
    formData.append("alamat", alamat);
    formData.append("jenis_kel", jenis_kel);

    try {
      await axios.post("http://localhost/ujian_pweb/backend/create.php", formData);
      setMsg("Data Berhasil Ditambah");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Gagal Ditambah");
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
          onSubmit={saveWarga}
          className="bg-neutral-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="Nama"
              value={nama}
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
              value={umur}
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
              value={alamat}
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
                <placeholder>--- Pilih Jenis Kelamin ---</placeholder>
                <option value="Laki - Laki">Laki - Laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTambahData;
