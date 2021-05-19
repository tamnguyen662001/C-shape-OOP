$(document).ready(function () {
    // Nếu có lỗi khi chưa kéo đến main menu mà nó đã thực hiện function này, mong thầy reload lại trang và kiểm tra giúp em ạ!!
    // Scroll chuột đến main menu, vượt quá sẽ gắn thêm class fixed-top để hiển thị main menu
    pos = $('#main-menu').position();
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > parseInt(pos.top)) {
            $('#main-menu').addClass('fixed-top');
        } else {
            $('#main-menu').removeClass('fixed-top');
        }
    });
    // Đóng vùng navbar collapse sau khi click luân phiên 2 button toggler
    $('.float-left').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })

    $('.float-right').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })
});