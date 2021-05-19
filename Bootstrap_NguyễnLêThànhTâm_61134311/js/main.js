$(document).ready(function () {
    pos = $('#x').position();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > parseInt(pos.top)) {
            $('#x').addClass('fixed-top');
        } else {
            $('#x').removeClass('fixed-top');
        }
    });

});