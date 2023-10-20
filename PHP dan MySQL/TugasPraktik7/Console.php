<?php
$daftarPengunjung = array();

function tambahPengunjung($nama, $noAnggota, $gender) {
    global $daftarPengunjung;
    $dataPengunjung = array(
        'nama' => $nama,
        'noAnggota' => $noAnggota,
        'gender' => $gender
    );
    array_push($daftarPengunjung, $dataPengunjung);
}

tambahPengunjung('Bimo', 1, 'Laki-Laki');
tambahPengunjung('Cintia', 2, 'Perempuan');
tambahPengunjung('Rani Ariani', 3, 'Perempuan');
tambahPengunjung('Budi Stoy', 4, 'Laki-Laki');
tambahPengunjung('Ahmad', 5, 'Laki-Laki');

echo "==================================";
echo "\nDAFTAR PENGUNJUNG PERPUSTAKAN";
echo "\n==================================";

foreach ($daftarPengunjung as $pengunjung) {
    echo "\nNama: " . $pengunjung['nama'] ;
    echo "\nNo. Pengunjung:" . $pengunjung['noAnggota'] ;
    echo "\nJenis Kelamin: " . $pengunjung['gender'] ;
    echo "\n-------------------------------------";
}
?>
