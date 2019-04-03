/*global $,AOS*/
$(function () {
    'user strict';
    $('.panel-heading').click(function () {
        $(this).addClass('active').parent().siblings().find('.panel-heading').removeClass('active')
    });
    AOS.init({
        disabled: window.innerWidth<767,
        duration: 1500
    })
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });
})