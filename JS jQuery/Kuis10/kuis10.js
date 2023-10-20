$(document).ready(function() {
    $("#searchForm").submit(function(e) {
        e.preventDefault();

        var keyword = $("#keyword").val();
        if (keyword.trim() === "") {
            return swal('', 'Masukkan keyword terlebih dahulu', 'warning');
        }

        function formatAngkaRibuan(angka) {
            if (angka >= 1000) {
                return (angka / 1000).toFixed(1) + 'K';
            } else {
                return angka.toString();
            }
        }

        swal ({
            title:"",
            text:"Searching...",
            button: false,
        })
        $.ajax({
            url: 'http://ws.audioscrobbler.com/2.0/',
            method: 'GET',
            data: {
                method: 'track.search',
                api_key: '7c1c20f857372eeb65fb9d27ee8f38a9',
                format: 'json',
                track: keyword
            },
            success: function(data) {
                swal.close()
                if (data.results.trackmatches.track.length > 0) {

                    var dat = data.results.trackmatches.track[0]
                    var imageUrl = dat.image[2]['#text'];
                    var listener = formatAngkaRibuan(parseInt(dat.listeners));

                    $('.title-msc').text(dat.name);
                    $('.artist').text(dat.artist);
                    $('.listener').text(listener);
                    $('.url').attr("href", dat.url);
                    $('.images-a').attr("src", imageUrl);

                    $('.card-statistik').show();
                } else {
                    return swal('', 'Data tidak ditemukan', 'warning');
                }
            },
            error: function(error) {
                return swal("Terjadi kesalahan: " + error.statusText , "warning");
            }
        });
    });
});