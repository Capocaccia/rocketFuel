 $(window).load(function() {
    $('.flexslider').flexslider();
  });

$('#nameInput').attr('placeholder','NAME');
$('#mailInput').attr('placeholder','EMAIL');

$('#submit').on('click', function(){
  var name = $('#nameInput').val();
  var mail = $('#mailInput').val();
  if(name && mail){
    //post request here
  }
})
