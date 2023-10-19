$(document).ready(function () {
	$('.carousel').slick({
		infinite: true,
		arrows: false,
		dots: false,
    	speed: 1000,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	slidesToShow: 1,
    	slidesToScroll: 1
	});
});

$(document).ready(function () {
	$('.carousel-mobile').slick({
		infinite: true,
		arrows: false,
		dots: false,
    	speed: 1000,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	slidesToShow: 1,
    	slidesToScroll: 1
	});
});

$(document).ready(function () {
	$('.carousel-marcas').slick({
		infinite: true,
		arrows: false,
		dots: false,
    	speed: 1000,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	slidesToShow: 8,
    	slidesToScroll: 1,
		responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
					infinite: true,
                    slidesToScroll: 1
                }
            }
        ]
	});
});

$(document).ready(function() {
    var navMobile = $('#nav-mobile');
    var navTrigger = $('#nav-trigger');

    navTrigger.click(function() {
        if (navTrigger.hasClass('closed')) {
            // Se o menu está fechado, abra-o
            navMobile.slideDown();
            navTrigger.removeClass('closed').addClass('open');
        } else {
            // Se o menu está aberto, feche-o
            navMobile.slideUp();
            navTrigger.removeClass('open').addClass('closed');
        }
    });
});

