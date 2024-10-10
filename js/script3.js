AOS.init();
			
$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });

$(document).ready(function() {
    $("#fullpage").fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        onLeave: function(){
            $('.section [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        onSlideLeave: function(){
            $('.slide [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        afterSlideLoad: function(){
            $('.slide.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        },
        afterLoad: function(){
            $('.section.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        }
    });
});

// 고정해더 시작
$( document ).ready( function() {
    var jbOffset = $( '#heaer_wrap' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#heaer_wrap' ).addClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#heaer_wrap' ).removeClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });
//   sub 스르르
$(function(){
    $(".sub").hide();
    $(".nav>li").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".sub_wrap").stop().slideDown();
    });
    $(".nav>li").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".sub_wrap").stop().slideUp();
    });
});


// 호버시 커지는 배너
$(function () {
    const banners = $('.banner');

    banners.on("mouseenter", function () {
        const backgroundImage = $(this).data('image');
        $(this).css({
            'background-image': `url(${backgroundImage})`,
            'background-size': 'cover',
            'background-position': 'center'
        });
    });

    banners.on("mouseleave", function () {
        $(this).css({
            'background-image': 'none'
        });
    });
});

$(function () {

    var winW = $(".mainviewcont").outerWidth(),
      target = $('.main_visual .visual'),
      target2 = $('.main_visual .visual_view'),
      textBox = target.find('.text_wrap'),
      length = 3,//박스 갯수
      idx = 0,
      css = [],
      ease = "easeInOutQuint",
      time = 1000;
  
    target2.find('.viewbg_wrap').each(function (e) {
      css.push({ 'width': 100 / length + '%', 'left': e * (100 / length) + '%', 'left2': -e * 100 + '%' });
      $(this).css({ 'width': css[e].width, 'left': css[e].left })
        .find('.viewbg').css({ 'width': winW, 'left': css[e].left2 });
    });
  
    target.find('>a').on("mouseenter", function () {
      idx = $(this).index();
      $(this).addClass('on').siblings().addClass('off');
      $('.main_visual .visual_view .viewbg_wrap').eq(idx).addClass('hover')
        .stop().animate({ 'left': '0', 'width': '100%' }, time, ease)
        .find('.viewbg').stop().animate({ 'left': 0 }, time, ease);
    });
  
    target.find('>a').on("mouseleave", function () {
      idx = $(this).index();
      $(this).removeClass('on').siblings().removeClass('off');
      $('.main_visual .visual_view .viewbg_wrap').eq(idx).removeClass('hover').stop().css({ 'width': css[idx].width, 'left': css[idx].left })
        .find('.viewbg').stop().css({ 'left': css[idx].left2 });
    });
  
  });