jQuery(document).ready(function($){
     $(".header-area").headroom();

    
    $('.portfolio-list').masonry({
  // options
//  horizontalOrder: true,
  
});
    
    $(".single-portfolio-items").hover(function(){
        $(".single-portfolio-items .portfolio-hover h2, .single-portfolio-items .portfolio-hover p").removeClass("animated fadeInUp");
        $(this).find(".portfolio-hover h2, .portfolio-hover p").addClass("animated fadeInUp");
    });
    
    $(".menu-trigger").on('click', function(){
        $(".offcanvace-menu").addClass("active");
        $(".offcanvace-menu-overlay").addClass("active");
        
    });
    $(".menu-close i, .offcanvace-menu-overlay").on('click', function(){
       $(".offcanvace-menu").removeClass("active");
       $(".offcanvace-menu-overlay").removeClass("active");
    });
    
    
});