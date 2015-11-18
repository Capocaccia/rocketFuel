 $(window).load(function() {
    $('.flexslider').flexslider();
  });

$('#nameInput').attr('placeholder','NAME');
$('#mailInput').attr('placeholder','EMAIL');

//Checks form is filled out and if email is valid
$( "#newsForm" ).submit(function( event ) {
var name = $('#nameInput').val();
var mail = $('#mailInput').val();
    if(name && validator.isEmail(mail)){
    //post request here
    $( ".nameSpan" ).text( "Thank you!" ).show().fadeOut( 4000 );
    $('#nameInput').val('');
    $('#mailInput').val('');
  } else if(!validator.isEmail(mail)){
    $( ".emailSpan" ).text( "Email not valid." ).show().fadeOut( 4000 );
  }
  event.preventDefault();
});
