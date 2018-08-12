$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        320:{
            items:1
        },
        1024:{
            items:2
        }
    }
});

var carousel = $('#owl-carousel1').owlCarousel({
    loop:false,
    nav:false,
    items:1,
    dots:false
});


$('.slider-nav-link').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});

$('.slider-nav-link').click( function () {
    var click = $(this).index();
    carousel.trigger( 'to.owl.carousel', [click] );
});
