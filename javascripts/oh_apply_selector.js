function selectValue(ele){
  const label = ele.innerText
  const value = (ele.attributes.value || '').value || ''
  ele.parentNode.nextElementSibling.value = value
  ele.parentNode.previousElementSibling.innerText = label
}

$('.oh-apply-selector').click(function(e){
  if($('.oh-apply-selector').hasClass('is-open')){
    $('.oh-apply-selector').not($(this)).removeClass('is-open');
  }
  e.stopPropagation();
  $(this).toggleClass('is-open');
})
$('.selector-advance .oh-apply-selector-options').click(function(e){
  e.stopPropagation();
})

$(document).click(function() {
    $('.oh-apply-selector').removeClass('is-open');
});

$('.oh-apply-header-tabs-dropdown').text($('.oh-apply-header-tabs li.active').text())
$('.oh-apply-header-tabs-dropdown').click(function() {
  $('.oh-apply-header-tabs').toggleClass('open')
})
;
