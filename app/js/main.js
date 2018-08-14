$( document ).ready(function() {
    doc_w = $(document).width();
   // detect IE8 and above, and edge
if (/Edge/.test(navigator.userAgent)) {
    $('.rectangle').css('background', '#fff').html('<div class="rectangle-edge"></div>');

    if(doc_w < 1400 && doc_w > 1024){
        $('.second-part').addClass('margin-top');
    }
    
}

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
    
    
    $('.slider-nav-link').click( function () {
        var click = $(this).index();
        carousel.trigger( 'to.owl.carousel', [click] );
    });
    
    carousel.on('changed.owl.carousel', function(e) {
       activeItem = e.item.index;
       if(activeItem >=0){
            $('.active').removeClass('active');
            $('[data-id='+activeItem+']').addClass('active');
       }
    });
      
    
});
