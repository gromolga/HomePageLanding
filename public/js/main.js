$(function() {
    $('#burger-menu').click(function () {
        $('#burger-navigation').addClass('show');
        $('.container').addClass('margin-left');
        $('body').addClass('no-scroll');
        $('.overlay').fadeIn();
    });
    $('#burger-close, .overlay').click(function () {
        $('#burger-navigation').removeClass('show');
        $('.container').removeClass('margin-left');
        $('body').removeClass('no-scroll');
        $('.overlay').fadeOut();
    });
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
});