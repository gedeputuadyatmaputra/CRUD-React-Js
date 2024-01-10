-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jan 2024 pada 01.31
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pweb_gedeputu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_warga`
--

CREATE TABLE `data_warga` (
  `id` int(11) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `umur` varchar(10) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `jenis_kel` enum('Laki - Laki','Perempuan') CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_warga`
--

INSERT INTO `data_warga` (`id`, `nama`, `umur`, `alamat`, `jenis_kel`) VALUES
(1, 'Gede Putu Adyatma Putra', '20 Tahun', 'Jln cempaka no 20 Kp Bulak, Jatiasih Bekasi', 'Laki - Laki'),
(5, 'Vonny Felisha', '25 Tahun', 'Jln Sadewa Raya no 30, Jatiasih', 'Perempuan'),
(6, 'Ade Firman', '20 Tahun', 'Jln pegangsaan timur no 70, Jakarta.', 'Laki - Laki');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_warga`
--
ALTER TABLE `data_warga`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_warga`
--
ALTER TABLE `data_warga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
