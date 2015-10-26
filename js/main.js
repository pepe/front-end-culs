$('h1').hide()

$('a').on('click', function (e){
  var header = $('h1')

  if($('h1:visible').length > 0) {
    header.hide()
  } else {
    header.show()
  }


  e.preventDefault()
})



$('button.make-blue').on('click', function (e) {
  var div = $('div.blue')
  $.ajax({
      url: 'https://api.github.com/users/pepe',
      success: function (data) {
        $('div.blue').html(data.email)
        div.css('background', 'blue')
      }
  })
  div.animate({right: '0'}, 1000)
})

;
