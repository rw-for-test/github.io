// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-arrow');
var rightPaddle = document.getElementsByClassName('right-arrow');

// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
  return $('.horizontal-scroll-bar').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
  menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
  var itemSize = 0
  $('.horizontal-scroll-bar li').each(function(){
    itemSize += $(this).outerWidth(true)
  })
  return itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
  return $('.horizontal-scroll-bar .l-container').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.horizontal-scroll-bar .l-container').on('scroll', function() {

  // get how much of menu is invisible
  menuInvisibleSize = menuSize - menuWrapperSize;
  // get how much have we scrolled so far
  var menuPosition = getMenuPosition();

  var menuEndOffset = menuInvisibleSize - paddleMargin;

  // show & hide the paddles
  // depending on scroll position
  if (menuPosition <= paddleMargin) {
    $(leftPaddle).addClass('hidden');
    $(rightPaddle).removeClass('hidden');
  } else if (menuPosition < menuEndOffset) {
    // show both paddles in the middle
    $(leftPaddle).removeClass('hidden');
    $(rightPaddle).removeClass('hidden');
  } else if (menuPosition >= menuEndOffset) {
    $(leftPaddle).removeClass('hidden');
    $(rightPaddle).addClass('hidden');
  }
});
