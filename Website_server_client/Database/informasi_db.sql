-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Des 2021 pada 13.03
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `informasi_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `title`, `foto`, `deskripsi`, `createdAt`, `updatedAt`) VALUES
(15, 'Channa Argus Platinum', 'C:\\fakepath\\wa.PNG', '(Channa argus) adalah spesies ikan gabus yang berasal dari Tiongkok, Rusia, Korea Utara, dan Korea Selatan. Habitatnya terbentang dari Sungai Amur hingga Pulau Hainan.[1] Spesies ini telah diperkenalkan ke kawasan lain dan dianggap sebagai spesies invasif', '2021-12-06', '2021-12-06'),
(17, 'channa karel', 'C:\\fakepath\\logo.png', ' (Channa argus) adalah spesies ikan gabus yang berasal dari Tiongkok, Rusia, Korea Utara, dan Korea Selatan. Habitatnya terbentang dari Sungai Amur hingga Pulau Hainan.[1] Spesies ini telah diperkenalkan ke kawasan lain dan dianggap sebagai spesies invasi', '2021-12-06', '2021-12-06'),
(18, 'channa mas fyan', 'C:\\fakepath\\carousel_3.jpg', ' (Channa argus) adalah spesies ikan gabus yang berasal dari Tiongkok, Rusia, Korea Utara, dan Korea Selatan. Habitatnya terbentang dari Sungai Amur hingga Pulau Hainan.[1] Spesies ini telah diperkenalkan ke kawasan lain dan dianggap sebagai spesies invasi', '2021-12-06', '2021-12-06'),
(19, 'channa rian', '', ' (Channa argus) adalah spesies ikan gabus yang berasal dari Tiongkok, Rusia, Korea Utara, dan Korea Selatan. Habitatnya terbentang dari Sungai Amur hingga Pulau Hainan.[1] Spesies ini telah diperkenalkan ke kawasan lain dan dianggap sebagai spesies invasi', '2021-12-06', '2021-12-06'),
(20, 'sas', '', ' (Channa argus) adalah spesies ikan gabus yang berasal dari Tiongkok, Rusia, Korea Utara, dan Korea Selatan. Habitatnya terbentang dari Sungai Amur hingga Pulau Hainan.[1] Spesies ini telah diperkenalkan ke kawasan lain dan dianggap sebagai spesies invasi', '2021-12-06', '2021-12-06'),
(21, 'awdw', '', 'dwwadwdw', '2021-12-06', '2021-12-06'),
(22, 'adwdwd', '', 'wadwadwdw', '2021-12-06', '2021-12-06');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
