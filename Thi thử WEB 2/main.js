$(document).ready(function () {

    pos = $('#x').position();
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > parseInt(pos.top)) {
            $('#x').addClass('fixed-top');
        } else {
            $('#x').removeClass('fixed-top');
        }
    });
    $('.float-left').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })

    $('.float-right').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })

    $('#submitt').on('click', function () {
        let Name = $('#username1').val();
        let Pass = $('#password1').val();
        if (Name == 'abc' && Pass == 'xyz') {
            $('#navbarResponsive1').text('Hi abc');
        }
    })
});

// JS
// function check() {
//     var Name = document.getElementById('username1').value;
//     var Pass = document.getElementById('password1').value;
//     // console.log(Name);
//     if (Name == 'abc' && Pass == 'xyz') {
//         document.getElementById('navbarResponsive1').innerText = 'Hi abc';
//     }
// }