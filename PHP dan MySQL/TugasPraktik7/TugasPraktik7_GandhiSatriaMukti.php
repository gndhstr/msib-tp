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
?>

<html>
<head>
    <title>Tugas 7</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h2>Daftar Pengunjung Perpustakaan</h2>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">No. Pengunjung</th>
                    <th scope="col">Jenis Kelamin</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($daftarPengunjung as $pengunjung) {
                    ?>
                    <tr>
                        <td><?php echo $pengunjung['nama']; ?></td>
                        <td><?php echo $pengunjung['noAnggota']; ?></td>
                        <td><?php echo $pengunjung['gender']; ?></td>
                    </tr>
                    <?php
                } ?>
            </tbody>
        </table>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>