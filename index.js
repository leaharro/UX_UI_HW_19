function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 1000);

    $(window).load(function() { 
        $("#status").fadeOut("slow"); 
        $("#loader").delay(500).fadeOut();
        });

    jQuery(document).ready(function($) {
        var Body = $('body');
        Body.addClass('preloader-site');
      });
      $(window).load(function(){
      $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
      });