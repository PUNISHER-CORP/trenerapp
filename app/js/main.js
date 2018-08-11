$('.owl-carousel').owlCarousel({
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
var width = $(window).width();

if(width > 767){
    $( "#slide1" ).click(function(){
        $('.slides-box').animate({
              scrollLeft: '0',
          }, 500);
    });
    $( "#slide2" ).click(function(){    
      $('.slides-box').animate({
              scrollLeft: '300',
          }, 500);
    });
    $( "#slide3" ).click(function(){
          $('.slides-box').animate({
              scrollLeft: '600',
          }, 500);
    });
}else {
    $( "#slide1" ).click(function(){
        $('.slides-box').animate({
              scrollLeft: '0',
          }, 500);
    });
    $( "#slide2" ).click(function(){    
      $('.slides-box').animate({
              scrollLeft: '247',
          }, 500);
    });
    $( "#slide3" ).click(function(){
          $('.slides-box').animate({
              scrollLeft: '500',
          }, 500);
    });
}
console.log(width);  
 
 

  $('.slider-nav-link').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });