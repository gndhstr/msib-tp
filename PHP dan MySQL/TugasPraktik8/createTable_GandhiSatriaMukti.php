<?php
$server = "localhost";
$user = "root";
$password = "";
$database = "perpustakaan";

$conn = mysqli_connect($server, $user, $password, $database);

if (!$conn) {
    die("Koneksi Gagal :". mysqli_connect_error());
}

$query = "CREATE TABLE PengunjungPerpustakaan (
    ID_Pengunjung INT PRIMARY KEY,
    Nama VARCHAR(50) NOT NULL,
    Alamat VARCHAR(100),
    No_Telepon VARCHAR(15),
    Tanggal_Kunjungan DATE,
    Jam_Masuk TIME,
    Jam_Keluar TIME
);
";

$result = mysqli_query($conn, $query);

if ($result) {
    echo "Tabel pengunjung berhasil dibuat";
} else {
    echo "Tabel gagal dibuat : ". mysqli_error($conn);
}

mysqli_close($conn);
?>