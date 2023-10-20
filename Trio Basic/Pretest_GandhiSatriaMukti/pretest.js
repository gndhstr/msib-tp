var patients = [
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },
    {
        id: "P10223",
        name: "Ariyani Mutahiroh",
        address: "Semarang",
        disease: "Gejala Tipes",
        roomNumber: "102",
        bpjs: "Kelas II",
        dateIn: "12-04-2023",
        dateOut: "-",
    },

];

function fillTable() {
    var table = document.getElementById("tabel_pasien");

    patients.forEach(function(patient) {
        var row = table.insertRow();
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellAddress = row.insertCell(2);
        var cellDisease = row.insertCell(3);
        var cellRoomNumber = row.insertCell(4);
        var cellBPJS = row.insertCell(5);
        var celldateIn = row.insertCell(6);
        var celldateOut = row.insertCell(7);
        var cellAction = row.insertCell(8);


        cellId.innerHTML = patient.id;
        cellName.innerHTML = patient.name;
        cellAddress.innerHTML = patient.address;
        cellDisease.innerHTML = patient.disease;
        cellRoomNumber.innerHTML = patient.roomNumber;
        cellBPJS.innerHTML = patient.bpjs;
        celldateIn.innerHTML = patient.dateIn;
        celldateOut.innerHTML = patient.dateOut;
        cellAction.innerHTML = '<a href="ubah.html" class="btn btn__primary">Ubah</a> <a href="" class="btn btn__danger">Hapus</a>';

        cellId.classList.add("table_js");
    });


}

window.onload = function() {
    fillTable();
};