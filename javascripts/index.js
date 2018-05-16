$('.carousel').carousel({
  interval: 5000
})

$('.scrollTo').click(function() {
  var getElem = $(this).attr('href');
  var targetDistance = 20;
  if ($(getElem).length) {
    var getOffset = $(getElem).offset().top;
    $('html,body').animate({
      scrollTop: getOffset - targetDistance
    }, 500);
  }
  return false;
})

var indexNavigateBar = $('.index-navigate-bar')
if(indexNavigateBar.length > 0){
  var offsetTop = indexNavigateBar.offset().top
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

$('.index-navigate-bar-menu .search').click(function(){
  $('#global-search').css('display', 'block');
  $('body').css('overflow', 'hidden');
})
$('#global-search .btn-close').click(function(){
  $('#global-search').css('display', 'none');
  $('body').css('overflow', 'auto');
})
;
