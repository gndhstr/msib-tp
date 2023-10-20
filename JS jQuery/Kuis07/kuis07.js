$(document).ready(function () {
    $('#element1').click(function() {
        alert("Tombol 1 diklik");
    });
    
    $('.element2').mouseenter(function() {
        alert("Tombol 2 dihover");
    });

    $('.element3').dblclick(function() {
        alert("Tombol 3 di double click");
    });
    $('#keydown').keydown(function() {
        alert("hayo mau ngetik apaa");
    });
    $('#change').change(function() {
        alert("Pilihan diganti");
    });
});

