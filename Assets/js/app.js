
$(function(){

  // if(window.pageYOffset > 1000){
  //     alert('not!')
      
  // }

  //search show or hide start
  $('#search_show_btn').on('click', function(){
    $('#search').addClass("show");
  });
  $('#search_hide_btn').on('click', function(){
    $('#search').removeClass("show");
  });
  //search show or hide End
  //cart show or hide start
  $('.bag_show_btn').on("click", function(){
    $('#shopping').addClass('show');
  });
  $('.bag_hide_btn').on("click", function(){
    $('#shopping').removeClass('show');
  });
  //cart show or hide End
   //popup js section start 
   $('.popup_hide_btn').on("click", function(){
    $('#popup_section').fadeOut();
  });
    //popup js section End 
    //responsive menu js section start 
    $('.menu_hamberger').on("click", function(){
      $('#responsive_menu').addClass('open')
    });
   $('.responsive_menu_hide').on("click", function(){
    $('#responsive_menu').removeClass('open');
  });
    //responsive menu js section End 
    //slick js start
    $('.banner_slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.banner_slider_dots_container'),
      dotsClass:'banner_slider_dots',
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      speed:2000,
      pauseOnHover:false
    });
    //slick js End
    //product slider
    $('.product_slider').slick({
      slidesToShow:4,
      prevArrow:'<i class="fa-solid fa-long-arrow-left product_slider_arrow"></i>',
      nextArrow:'<i class="fa-solid fa-long-arrow-right product_slider_arrow"></i>',
      autoplay:true,
      autoplaySpeed:5000,
      speed:1000,
      slidesToScroll:1,
      pauseOnHover:false,
      responsive:[
        {
          breakpoint:1200,
          settings:{
            slidesToShow:3,
          }
        },
        {
          breakpoint:992,
          settings:{
            slidesToShow:2,
          }
        },
        {
          breakpoint:576,
          settings:{
            slidesToShow:1,
          }
        }
      ]
    });
      //mackup slider
    $('.mackup_slider').slick({
      slidesToShow:2,
      arrows: false,
      // autoplay:true,
      dots:true,
      appendDots:$('.mackup_slider_dots_container'),
      dotsClass:'mackup_slider_dots',
      autoplaySpeed:4000,
      speed:1000,
      pauseOnHover:false,
      responsive:[
        {
          breakpoint:992,
          settings:{
            slidesToShow:1,
          }
        },
      ]
    });
    //deals countdown js
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $(this).html(event.strftime(''
        + '<li><h3>%D</h3> <small>Days</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%H</h3> <small>Hour</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%M</h3> <small>Minute</small></li> '
        + '<li><h2>:</h2></li> '
        + '<li><h3>%S</h3> <small>Sec</small></li>'
        + '<li><h2>:</h2></li> '
        ));
      });
    });
    //news_slider start
    $('.news_slider').slick({
      slidesToShow:3,
      arrows: false,
      autoplay:true,
      autoplaySpeed:4000,
      speed:1000,
      pauseOnHover:false,
      dots: true,
      appendDots: $('.news_slider_dots_container'),
      dotsClass:'news_slider_dots',
      responsive:[
        {
          breakpoint:992,
          settings:{
            slidesToShow:2,
          }
        },
        {
          breakpoint:768,
          settings:{
            slidesToShow:1,
          }
        },
      ]
    });

    // nav animation js start
    // let mainmenu = $('.main_menu').offset().top;
    $(window).scroll(function(){
      let scrollwin = $(window).scrollTop();
      if(scrollwin > 1000){
        $('.main_menu').addClass('menu_class')
      }else{
        $('.main_menu').removeClass('menu_class')
      }
    })
    //nav animation js end
    // BACK TO TOP
    $(window).scroll(function(){
      let scrollTop = $(window).scrollTop();
      let navbarTopValue = $('#nav').offset().top
      
      if(scrollTop > 1500){
        $('#scroll_btn').addClass('active')
        
      } else{
        
        $('#scroll_btn').removeClass('active')
      }
    })

    $('#scroll_btn').click(function(){
      $('html,body').animate({
        scrollTop: 0
      },400)
    })

    // BACK TO TOP END


    //news_slider End
    // *****************************************About pages*****************************************
// team_slider
$('.team_slider').slick({
  slidesToShow:4,
  arrows: false,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  pauseOnHover:false,
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:2
      }
    },
    {
      breakpoint:576,
      settings:{
        slidesToShow:1
      }
    },
  ]
});
// animated slider 
$('.animate_main').slick({
  slidesToShow:1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:4000,
  speed:1000,
  pauseOnHover:false,
  fade:true,
  dots: true,
  appendDots: $('.about_animate_dots_container'),
  dotsClass:'about_animate_dots',
});
// instagram slider
$('.instagram_box').slick({
  slidesToShow:6,
  arrows: false,
  autoplay:true,
  autoplaySpeed:4000,
  speed:1000,
  pauseOnHover:false,
  dots: true,
  appendDots: $('.about_instagram_dots_container'),
  dotsClass:'about_instagram_dots',
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow:5
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:4
      }
    },
    {
      breakpoint:768,
      settings:{
        slidesToShow:3
      }
    },
    {
      breakpoint:576,
      settings:{
        slidesToShow:2
      }
    },
  ]
});

// *******************************shop_details page********************************
// big img slide
$('.big_img').slick({
  slidesToShow:1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:4000,
  speed:1000,
  pauseOnHover:false,
  fade:true,
  asNavFor:'.small_img'
});
// small_img slider
$('.small_img').slick({
  slidesToShow:5,
  arrows: false,
  autoplay:true,
  autoplaySpeed:4000,
  speed:1000,
  pauseOnHover:false,
  asNavFor:'.big_img',
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true,
  responsive:[
    {
      breakpoint:768,
      settings:{
        slidesToShow:3
      }
    },
  ]
});
//shop details incement and decrement
$('.decrement').on('click', function(){
  let cart_value = $(this).siblings('input').val()
  if(cart_value >1){
    $(this).siblings('input').val(cart_value - 1);
  }
})
$('.increment').on('click', function(){
  let cart_value = $(this).siblings('input').val()
    $(this).siblings('input').val(Number(cart_value) + 1);
  
})
//Related_product_slider
$('.Related_product_slider').slick({
  slidesToShow:4,
  arrows: false,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  pauseOnHover:false,
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:2
      }
    },
    {
      breakpoint:575,
      settings:{
        slidesToShow:1
      }
    },
  ]
});
// ***************************************** cart icrement decrement********************************
// ***************************************** blog page ********************************
// blog_slide_img
$('.blog_slide_img').slick({
  slidesToShow:1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  pauseOnHover:false,
});
})
//document.ready js End
//tooltips start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltips end
//veno box start
new VenoBox();
//veno box end




