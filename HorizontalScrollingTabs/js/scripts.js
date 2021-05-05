$(window).on("load resize",function(e) {
$(function setWidthNavList() {
        $('.js_scrollContent').each(function (index) {
           var summWindth = 0;
           $(this).find('.nav-item').each(function (num) {
                summWindth += $(this).outerWidth(true) + 1;
            });
           if (summWindth > $('.js_scrollBody').width()) {
               $('.js_scrollBody').css('overflowX', 'scroll'),
               $(this).width(summWindth);}
               else {
               $('.js_scrollBody').css('overflowX', 'hidden'),
               $(this).css('width', '100%')}
        });
      });
});
