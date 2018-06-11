//validator
$.fn.validator.Constructor.FOCUS_OFFSET = 120

//wow.js
new WOW({
  offset: 100
}).init();

function detectmob() {
  if(window.innerWidth <= 768) {
   return true;
  } else {
   return false;
  }
}

$(window).load(function(){
  $(".se-pre-con").fadeOut("slow")
  const headerHeight = $('.l-header').height()
  const footerHeight = $('.l-footer').outerHeight()
  const footerOffset = $('.l-footer').offset().top

//Slider banner
$('.carousel').carousel({
  interval: 5000
})

//Navigate to section
$('.scrollTo').click(function() {
  $('.index-navigate-bar-menu').removeClass('open')
  const getElem = $(this).attr('href');
  const targetDistance = 139;
  if ($(getElem).length) {
    const getOffset = $(getElem).offset().top;
    $('html,body').animate({
      scrollTop: getOffset - targetDistance
    }, 500);
  }
  return false;
})

//Index navigate bar selector in mobile
$('.index-navigate-bar-selector a').click(function(e){
  e.preventDefault();
  $('.index-navigate-bar-menu').toggleClass('open')
})

if(detectmob()){
  $('.oh-apply.filter-module .sticky-bar').removeClass('sticky-bar is-sticky')
}

//Fix index navigate bar if scroll down
const stickyBar = $('.sticky-bar')
if(stickyBar.length > 0){
  const offsetTop = stickyBar.offset().top - headerHeight
  $(window).scroll(function(){
    if (window.pageYOffset >= offsetTop) {
      stickyBar.addClass("is-sticky");
      stickyBar.next().css('marginTop', stickyBar.outerHeight()+'px');
    } else {
      stickyBar.removeClass("is-sticky");
      stickyBar.next().css('marginTop', '0');
    }
  })
}

//Open global search pop-up
$('.index-navigate-bar .search').click(function(){
  $('#global-search').css('display', 'block');
  $('body').addClass('modal-open');
})

//Close global search pop-up
$('#global-search .btn-close').click(function(){
  $('#global-search').css('display', 'none');
  $('body').removeClass('modal-open');
})

//Back to top
$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop : 0
  }, 500);
})

//Scroll event
$(window).scroll(function(){
  const defaultSelector = $('.index-navigate-bar-selector li').hasClass('active')
  if(!defaultSelector){
    $('.index-navigate-bar-selector li').first().addClass('active')
  }
  //Interaction of global link back to top button
  if ($(window).height() + $(window).scrollTop() >= footerOffset){
    const globalLinksOffset = $(window).height() + $(window).scrollTop() - footerOffset
    $('.global-links').removeClass('is-moving')
    $('.global-links').css('bottom', globalLinksOffset)
  }else{
    $('.global-links').addClass('is-moving')
  }

  if($(window).scrollTop() <= 10){
    $('.global-links').removeClass('is-moving')
  }
})

if(window.location.hash == '#chosen') {
  const chosenOffest = $('#chosen').offset().top
  $('html,body').animate({
    scrollTop: chosenOffest
  }, 500);
}

$('.sub-menu.search-school .sub-sub-menu').click(function(){
  $(this).toggleClass('open')
})

$('.search-school-sub-menu').hover(function(){
  $(this).prev().addClass('is-hover')
}, function() {
  $(this).prev().removeClass('is-hover');
})

})
;
