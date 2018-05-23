$(document).ready(function(){
  //Slider banner
  $('.carousel').carousel({
    interval: 5000
  })

  //Navigate to section
  $('.scrollTo').click(function() {
    const getElem = $(this).attr('href');
    const targetDistance = 59;
    if ($(getElem).length) {
      const getOffset = $(getElem).offset().top;
      $('html,body').animate({
        scrollTop: getOffset - targetDistance
      }, 500);
    }
    return false;
  })

  //Fix index navigate bar if scroll down
  const indexNavigateBar = $('.index-navigate-bar')
  const headerHeight = $('.l-header').height()
  if(indexNavigateBar.length > 0){
    const offsetTop = indexNavigateBar.offset().top - headerHeight
    $(window).scroll(function(){
      if (window.pageYOffset >= offsetTop) {
        indexNavigateBar.addClass("is-sticky");
        indexNavigateBar.next().css('marginTop', '60px');
      } else {
        indexNavigateBar.removeClass("is-sticky");
        indexNavigateBar.next().css('marginTop', '0');
      }
    })
  }

  //Open global search pop-up
  $('.index-navigate-bar-menu .search').click(function(){
    $('#global-search').css('display', 'block');
    $('body').css('overflow', 'hidden');
  })

  //Close global search pop-up
  $('#global-search .btn-close').click(function(){
    $('#global-search').css('display', 'none');
    $('body').css('overflow', 'auto');
  })

  //Back to top
  $('#back-to-top').click(function() {
    $('html, body').animate({
      scrollTop : 0
    }, 500);
  })
})
;
