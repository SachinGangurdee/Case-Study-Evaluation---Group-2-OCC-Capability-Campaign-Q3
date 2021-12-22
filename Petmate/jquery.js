function resize(){
    if ($(window).width() < 768) {
    $(".navbar-brand img").attr('src', 'https://www.google.com/images/srpr/chrome_ntp_white_logo2.png');
    } else {
    $(".navbar-brand img").attr('src', 'https://www.google.com/images/srpr/logo11w.png');
    }
    }
    resize();
    $(window).on('resize', resize);