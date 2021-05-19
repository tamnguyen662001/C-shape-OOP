$(document).ready(function () {
    pos = $('#main-menu').position();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > parseInt(pos.top)) {
            $('#main-menu').addClass('fixed-top');
        } else {
            $('#main-menu').removeClass('fixed-top');
        }
    });

});