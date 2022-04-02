// //Slider chạy bằng Jquery
$(document).ready(function(){
  $('.slidershow-container').slick({
    dots: false,
     infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay:true, // slide tu dong chay
    autoplaySpeed:5000, // toc do tu dong chay cua slide(2s)
    arrows:false,
  });
  $('.box-test--grid').slick({
    dots: false,
     infinite: true,
    speed: 200,
    slidesToShow: 2,
    autoplay:true, // slide tu dong chay

    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-left"></i></button>',
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-right"></i></i></button>'
    
  });
  $('.show_menu').click(function () {
      $(this).toggleClass('open');
    $('.overlay-background').css({
      'right': 0
    });
    $('.menu_mobile').css({
      'left': 0
    });
  });
  $('.overlay-background').click(function () {
    $(this).css({
      'right': 'unset'
    });
    $('.menu_mobile').css({
      'left': '-100%'
    });
  });
});



//Slider chạy bằng JS Thuần

//count number using jquery
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//Count JS Thuần




//textarea 
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}