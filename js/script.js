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

  // 햄버거
$(function(){
    $('.hamburger_button').click(function(){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible')
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

//  swiper 배너 js
var swiper = new Swiper(".bannerSwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });


// 
$(function () {
  $(".dessert_banner ul li").hide();
  $(".dessert_banner ul li:nth-child(1)").show();
  setInterval(function () {
    $(".dessert_banner ul li:nth-child(1)").fadeOut(1600).next().fadeIn(1600).end().appendTo(".dessert_banner ul")
  }, 3200);

});

//머핀 슬라이드 
var swiper = new Swiper(".slide_container", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grabCursor: "true",
  fade: "true",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    420:{
      slidesPerView: 2,
    },
    610:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 4,
    },
  }
});
// 요거트 슬라이드
var swiper = new Swiper(".yo_slide_container", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grabCursor: "true",
  fade: "true",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    420:{
      slidesPerView: 2,
    },
    610:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 4,
    },
  }
});

// 요거트배너
$(function () {
  $(".yogurt_banner ul li").hide();
  $(".yogurt_banner ul li:nth-child(1)").show();
  setInterval(function () {
    $(".yogurt_banner ul li:nth-child(1)").fadeOut(1600).next().fadeIn(1600).end().appendTo(".yogurt_banner ul")
  }, 3200);

});

// sub_menu 공지사항 tap 기능
$(function () {
  $(".tap>li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

});

// 클릭후 이벤트 그림 나오는것
$(function(){
  $("#show500>img").hide();
  $(".img1_rig>img").click(function(){
    $("#show500 img").hide();
    $(".show500img1>img").show();
  });
  $(".img2_rig>img").click(function(){
    $("#show500 img").hide();
    $(".show500img2>img").show();
  });
  $(".img3_rig>img").click(function(){
    $("#show500 img").hide();
    $(".show500img3>img").show();
  });
  $(".img4_rig>img").click(function(){
    $("#show500 img").hide();
    $(".show500img4>img").show();
  });
});

// event 모바일
$(function () {
  $(".mobile_s4 ul li").hide();
  $(".mobile_s4 ul li:nth-child(1)").show();
  setInterval(function () {
    $(".mobile_s4 ul li:nth-child(1)").fadeOut(2000).next().fadeIn(2000).end().appendTo(".mobile_s4 ul")
  }, 4000);

});