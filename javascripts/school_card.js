$(document).ready(function(){
  const schoolCardBody = $('.school-card .school-card-body .text')
  schoolCardBody.each(function(){
    if($(this).text().length > 50){
      const newStr = $.trim($(this).text()).substring(0, 40)
      $(this).text(newStr+'...')
    }
  })
})
;
