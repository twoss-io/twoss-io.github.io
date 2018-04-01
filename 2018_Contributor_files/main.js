$(function() {
    var $window = $(window),
        $navbarHeight = $('.menu').height();
    $window.scroll(function() {
        if ($window.scrollTop() > $navbarHeight) {
            $('.menu').addClass('menu--small');
        } else {
            $('.menu').removeClass('menu--small');
        }
    }).scroll();

    $('.menu__burger').click(function() {
        event.preventDefault();
        var $mask = $('.menu__mask');
        $(this).toggleClass('active');
        $mask.toggleClass('menu__mask--active');
    });

    $('.menu a,#info a').click(function() {
        var id = '#' + $(this).attr('href').split('#')[1];
        goScroll(id);
        return false;
    });

    $('.speakerbox__dropdown').click(function() {
        $(this).next('.speakerbox__desc').slideToggle();
    });

    function goScroll(target) {
        var target_top = $(target).offset().top;
        var header_height = $('.menu').height();
        var sTop = target_top - header_height;
        $("html, body").stop().animate({
            scrollTop: sTop
        }, 500, function() {});
    }
});
$('.loadmore').on('click', function() {
    $(this).find('.fa').toggleClass('fa-plus-square fa-minus-square');
    var text = $(this).next('.loadmore-text');
    text.slideToggle(300);
});