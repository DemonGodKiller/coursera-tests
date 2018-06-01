        /*Preloader*/

        $(window).on('load', function() { // makes sure the whole site is loaded 
            // will first fade out the loading animation 
            $('#preloader').delay(1050).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(1050).css({'overflow':'visible'});
          })

