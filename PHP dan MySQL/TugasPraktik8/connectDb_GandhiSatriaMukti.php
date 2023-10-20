<?php
$server = "localhost";
$user = "root";
$password = "";

$conn = mysqli_connect($server, $user, $password);

if ($conn -> connect_error) {
    die("Koneksi Gagal :". mysqli_connect_error());
}

echo "Koneksi Berhasil";
$conn -> close();
?>