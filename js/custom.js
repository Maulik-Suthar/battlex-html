$(document).ready(function () {

  setTimeout(function(){
    $('body').addClass('loadDone');
    $("html, body").animate({ scrollTop: 0 }, 0);

    setTimeout(function(){
      $('.loader').hide();
       $('.wrapper > section').removeClass('active');
    },1500)
  },3500);

  Splitting({
    target: "[data-splitting]",
    by: "words",
    // key: null
  });

  /* Mobile menu */

  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-close");

    $(".header-nav").toggleClass("slideMenu");

    $("body").addClass("bodyFixed");
  });

  $(".sidebar-overlay, .close-menu,.header-nav ul li a").click(function () {
    $(".menu-icon").removeClass("menu-close");

    $(".header-nav").removeClass("slideMenu");

    $("body").removeClass("bodyFixed");
  });
  $(".news-box ").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".scrollTop").fadeIn();
      $(".header").addClass("has_sticky");
      $("body").addClass("sticky_header");
    } else {
      $(".scrollTop").fadeOut();

      $(".header").removeClass("has_sticky");
      $("body").removeClass("sticky_header");
    }
  });


  $(document).on('mouseover', '.startup-box', function (e) {
    $('.startup-box').removeClass('active');
    $(this).addClass("active");
  });


  // Top Button
  var toggleHeight = $(window).outerHeight() * 1;

  $(window).scroll(function () {
    if ($(window).scrollTop() > toggleHeight) {
      $(".m-backtotop").addClass("active");
    } else {
      $(".m-backtotop").removeClass("active");
    }
  });

  $(".m-backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $('.header-nav ul li').click(function () {
    $('.header-nav ul li').removeClass("active");
    $(this).addClass("active");
  });


 


  $('.marquee-top-main').marquee({
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    duration: 28000,
    gap: 20,
    startVisible: true,
    hoverSlow: false
  });


if($(window).width() > 767){
  $('.marquee-bottom-wrap').marquee({
    allowCss3Support: false,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    duration: 15000,
    gap: 20,
    startVisible: true,
    hoverSlow: true
  });


  $(document).on('mouseover', '.marquee-bottom-wrap .marquee-con', function (e) {
    var dataId = $(this).data('tab');
    $('.marquee-bottom-wrap .marquee-con').removeClass('active');
    $(this).addClass('active');
    $('.marquee-top-desc').removeClass('active')
    $('.marquee-top-desc[data-id="' + dataId + '"]').addClass('active');
    e.preventDefault();
  });
}else{
   $('.marquee-top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    fade: true,
    asNavFor: '.marquee-bottom-wrap'
  });

  $('.marquee-bottom-wrap').slick({
    asNavFor: '.marquee-top-slider',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    // variableWidth: true,
    // focusOnSelect: true,
    infinite: true,
  });
}

  let sec = document.querySelectorAll('section');
  let links = document.querySelectorAll('nav a');

  window.onscroll = () => {
    sec.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 500;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        links.forEach(link => {
          link.classList.remove('active');
          let targetLink = document.querySelector('nav a[href*=' + id + ']');
          if (targetLink) {
            targetLink.classList.add('active');
          }
        });
      }
    });
  };

 

});