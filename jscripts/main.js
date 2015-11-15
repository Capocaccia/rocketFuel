 $(window).load(function() {
    $('.flexslider').flexslider();
  });

$('#nameInput').attr('placeholder','NAME');
$('#mailInput').attr('placeholder','EMAIL');

$('#submit').on('click', function(){
  var name = $('#nameInput').val();
  var input = $('#mailInput').val();
  //post request goes here for mailing plugin
})
