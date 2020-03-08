var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector(".page-header")

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove("page-header-full");

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        if (pageHeader.classList.contains("page-header--full")) {
            pageHeader.classList.remove("page-header--full");
        } else {
            pageHeader.classList.add("page-header--full")
        }
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        pageHeader.classList.remove("page-header--full")
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
            items:1,
            nav: true,
            dots: false,
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
            items:3,
            loop: false
        },
        959:{
            items:3,
            loop:false
        }
    }
});


