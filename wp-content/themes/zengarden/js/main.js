function bt_plus(input) {
  input.value = parseInt(input.value) + 1;
}

function bt_minus(input) {
  input.value = parseInt(input.value) - 1;
}




$('.hamburger').on('click', function() {
  $('.menu').toggle();
});

$('.search').on('click', function() {
  $('.search-button').toggle();
});


$('.product-menu__button-clothes').on('click', function() {
  $('.product-menu__content-clothes').toggle();
});

$('.product-menu__button-designers').on('click', function() {
  $('.product-menu__content-designers').toggle();
});

$('.btn-ghost-shop-size').on('click', function() {
  $('.size, .size__btn, .menu-buttons__things').toggle();
});


$('.product-menu__card-materials').on('click', function() {
  $('.product-menu__content-materials').toggle();
});

$('.product-menu__card-brand').on('click', function() {
  $('.product-menu__content-brand').toggle();
});

$('.product-menu__card-description').on('click', function() {
  $('.product-menu__content-description').toggle();
});


$('.product-menu__card-size').on('click', function() {
  $('.product-menu__content-size').toggle();
});

/* Slick slider */

$('.woocommerce').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 319,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});





$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow: $('.prev'),
nextArrow: $('.next'),
responsive: [
  {
    breakpoint: 991,
    settings: {
      arrows: false
    }
  }
]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows : true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: true
      }
    }
  ]
});



$('.multiple-items').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: $('.prev-1'),
nextArrow: $('.next-1')
});


