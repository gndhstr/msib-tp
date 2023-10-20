$(document).ready(function() {

    // ADD n REMOVE Class
    $('.add-class').click(function() {
        $('.txt').addClass('text-red');
        $('img').removeClass('hide');
    })

    // HAS Class
    $('.has-class').click(function() {
        alert($('.txt').hasClass('text-red'));
    })

    // Remove Elements
    $('.remove').click(function() {
        $('img').remove();
    })
    $('.append').click(function() {
        $('.img').append("<img src='https://www.pngkit.com/png/full/279-2794230_black-mighty-morphin-power-ranger-red-mighty-morphin.png' width='150px' alt='black ranger'>");
    })

    //text()
    $('.edit-text').click(function() {
        $('h2.txt').text('Aku akan menyelamatkan dunia');
    })
});