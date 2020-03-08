var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});


//reviews__list slider
$('.reviews__list').owlCarousel({
    loop:true,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        659:{
            items:1,
        },
        959:{
            items:3,
            loop:false
        }
    }
});

//price__list slider
$('.price__col-right').owlCarousel({
    loop:true,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        659:{
            items:1,
        },
        959:{
            items:3,
            loop:false
        }
    }
});


