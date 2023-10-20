<?php
$server = "localhost";
$user = "root";
$password = "";

$conn = mysqli_connect($server, $user, $password);

if (!$conn) {
    die("Koneksi Gagal :". mysqli_connect_error());
}

$query = "CREATE DATABASE perpustakaan";

$result = mysqli_query($conn, $query);

if ($result) {
    echo "Database berhasil dibuat";
} else {
    echo "Gagal terhubung dengan database";
}

mysqli_close($conn);
?>