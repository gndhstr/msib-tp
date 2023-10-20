function showForm() {
    document.getElementById("formulir").style.display = "block";
}

function hideForm() {
    document.getElementById("formulir").style.display = "none";
}

function submitForm() {
    function clearFormFields() {
        document.getElementById("nama").value = "";
        document.getElementById("alamat").value = "";
        document.getElementById("penyakit").value = "";
        document.getElementById("ruang").value = "";
        document.getElementById("bpjs").value = "";
        document.getElementById("masuk").value = "";
        document.getElementById("keluar").value = "";
    }

    if (typeof (Storage) !== "undefined") {
        var namaValue = document.getElementById("nama").value;
        var alamatValue = document.getElementById("alamat").value;
        var penyakitValue = document.getElementById("penyakit").value;
        var ruangValue = document.getElementById("ruang").value;
        var bpjsValue = document.getElementById("bpjs").value;
        var masukValue = document.getElementById("masuk").value;
        var keluarValue = document.getElementById("keluar").value;

        var pasiens = JSON.parse(localStorage.getItem("pasiens")) || [];
        var editId = document.getElementById("editId").value;

        if (editId) {
            var index = pasiens.findIndex(function (pasien) {
                return pasien.id == editId;
            });

            if (index !== -1) {
                pasiens[index] = {
                    id: parseInt(editId),
                    nama: namaValue,
                    alamat: alamatValue,
                    penyakit: penyakitValue,
                    ruang: ruangValue,
                    bpjs: bpjsValue,
                    masuk: masukValue,
                    keluar: keluarValue,
                };
                document.getElementById("editId").value = "";
            }
        } else {
            var autoIdValue = pasiens.length + 1;
            var pasien = {
                id: autoIdValue,
                nama: namaValue,
                alamat: alamatValue,
                penyakit: penyakitValue,
                ruang: ruangValue,
                bpjs: bpjsValue,
                masuk: masukValue,
                keluar: keluarValue,
            };
            pasiens.push(pasien);
        }

        localStorage.setItem("pasiens", JSON.stringify(pasiens));

        clearFormFields();

        var table = document.getElementById("tabel_pasien");
        table.querySelectorAll("tr:not(.first__row)").forEach(row => row.remove());

        pasiens.forEach(function (pasien) {
            var row = table.insertRow();
            for (var key in pasien) {
                var cell = row.insertCell();
                cell.innerHTML = pasien[key];
            }
            var cellAction = row.insertCell();
            cellAction.innerHTML = `<a class="btn btn__primary" onclick="editPasien(${pasien.id})">Ubah</a> <a onclick="deleteCell()" class="btn btn__danger">Hapus</a>`;
            cellAction.classList.add("table_js");
        });

        document.getElementById("formulir").style.display = "none";
    } else {
        alert("Local Storage tidak didukung di browser ini");
    }
}



function editPasien(id) {
    var pasiens = JSON.parse(localStorage.getItem("pasiens")) || [];
    var pasienEdit = pasiens.find(function (pasien) {
        return pasien.id === id;
    });

    if (pasienEdit) {

        document.getElementById("nama").value = pasienEdit.nama;
        document.getElementById("alamat").value = pasienEdit.alamat;
        document.getElementById("penyakit").value = pasienEdit.penyakit;
        document.getElementById("ruang").value = pasienEdit.ruang;
        document.getElementById("bpjs").value = pasienEdit.bpjs;
        document.getElementById("masuk").value = pasienEdit.masuk;
        document.getElementById("keluar").value = pasienEdit.keluar;

        document.getElementById("editId").value = pasienEdit.id;

        showForm();
    }
}

function deleteCell() {
    var row = event.target.parentElement.parentElement;

    var pasienId = row.cells[0].innerHTML;

    var pasiens = JSON.parse(localStorage.getItem("pasiens")) || [];

    var index = pasiens.findIndex(function (pasien) {
        return pasien.id == pasienId;
    });

    if (index !== -1) {
        pasiens.splice(index, 1);

        localStorage.setItem("pasiens", JSON.stringify(pasiens));

        row.remove();
    }
}

function loadpasiens() {
    if (typeof (Storage) !== "undefined") {
        var pasiens = JSON.parse(localStorage.getItem("pasiens")) || [];
        var table = document.getElementById("tabel_pasien");
        table.querySelectorAll("tr:not(.first__row)").forEach(row => row.remove());

        pasiens.forEach(function (pasien) {
            var row = table.insertRow();
            for (var key in pasien) {
                var cell = row.insertCell();
                cell.innerHTML = pasien[key];
            }
            var cellAction = row.insertCell();
            cellAction.innerHTML = `<a class="btn btn__primary" onclick="editPasien(${pasien.id})">Ubah</a> <a onclick="deleteCell()" class="btn btn__danger">Hapus</a>`;
            cellAction.classList.add("table_js");
        });
    } else {
        alert("Local Storage tidak didukung di browser ini");
    }
}

function searchpasiens() {
    var pencarianData = document.getElementById("searchInput").value;
    filterpasiens(pencarianData);
}

function filterpasiens(pencarianData) {
    var pasiens = JSON.parse(localStorage.getItem("pasiens")) || [];
    var table = document.getElementById("tabel_pasien");
    table.querySelectorAll("tr:not(.first__row)").forEach(row => row.remove());

    pasiens.forEach(function (pasien) {
        if (
            pasien.nama.toLowerCase().includes(pencarianData.toLowerCase()) ||
            pasien.alamat.toLowerCase().includes(pencarianData.toLowerCase()) ||
            pasien.penyakit.toLowerCase().includes(pencarianData.toLowerCase())
        ) {
            var row = table.insertRow();
            for (var key in pasien) {
                var cell = row.insertCell();
                cell.innerHTML = pasien[key];
            }
            var cellAction = row.insertCell();
            cellAction.innerHTML = '<a class="btn btn__primary" onclick="editPasien(' + pasien.id + ')">Ubah</a> <a onclick="deleteCell()" class="btn btn__danger">Hapus</a>';
            cellAction.classList.add("table_js");
        }
    });
}


window.addEventListener('load', loadpasiens);