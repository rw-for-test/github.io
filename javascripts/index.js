//Slider banner
$('.carousel').carousel({
  interval: 5000
})

//Navigate to section
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

//Fix index navigate bar if scroll down
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
;
