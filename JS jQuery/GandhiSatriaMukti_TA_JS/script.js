$(document).ready(function() {

    //Variabel yang digunakan untuk menampung API OMDB
    var apiUrl = 'https://www.omdbapi.com/?apikey=fe6bb9ab&type=movie&s=new';

    //FUngsi
    function tampilkanDaftarFilm(daftarFilm) {
        
        var daftarFilmElement = $('#daftarFilm');

        // jQuery kontrol & seleksi
        if (daftarFilm.Response === "True" && daftarFilm.Search) {
            var kartuHTML = '';
            daftarFilm.Search.forEach(function(film) {
                kartuHTML += '<div class="film-card">';
                kartuHTML += '<img class="film-poster" src="' + film.Poster + '" alt="' + film.Title + '">';
                kartuHTML += '<h3 class="film-title">' + film.Title + '</h3>';
                kartuHTML += '<p class="film-description">Tahun: ' + film.Year + '</p>';
                kartuHTML += '<p class="film-description">Tipe: ' + film.Type + '</p>';
                kartuHTML += '</div>';
            });

            // jQuery DOM html
            daftarFilmElement.html(kartuHTML);
        } else {
            daftarFilmElement.html('<h2>Tidak ada data film yang ditemukan.</h2>');
        }
    }

    function cariFilm(judulFilm) {
        // jQuery AJAX
        swal ({
            title:"",
            text:"Searching...",
            button: false,
        })
        $.ajax({
            url: 'https://www.omdbapi.com/',
            method: 'GET',
            dataType: 'json',
            data: {
                apikey: 'fe6bb9ab',
                s: judulFilm
            },
            success: function(data) {
                swal.close()
                tampilkanDaftarFilm(data);
            },
            error: function(error) {
                return swal('', 'Terjadi kesalahan :', error, 'warning');
            }
        });
    }


    // jQuery Submit Event
    $("#searchForm").submit(function(e) {
        e.preventDefault(); 

        var movieTitle = $("#movieTitle").val();
        if (movieTitle.trim() === "") {
            alert("Masukkan judul film terlebih dahulu.");
            return;
        }

        cariFilm(movieTitle);
    });

    swal ({
        title:"",
        text:"Searching...",
        button: false,
    })
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            tampilkanDaftarFilm(data);
            swal.close();
        },
        error: function(error) {
            return swal('', 'Terjadi kesalahan :', error, 'warning');
        }
    });

});
