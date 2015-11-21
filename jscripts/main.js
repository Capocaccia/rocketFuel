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
    $( ".emailSpan" ).text( "Email not valid." ).show().fadeOut( 2000 );
    $( "#mailInput" ).effect( "shake", {times:3}, 1000 );
  } else if(!name){
    $( ".nameSpan" ).text( "Please enter your name." ).show().fadeOut( 2000 );
    $( "#nameInput" ).effect( "shake", {times:3}, 1000 );
  }
  event.preventDefault();
});

// $('#galleryButton').on('click', function(){
//   window.location.href = "about-us.html";
// })

$('#galleryButton').click(function(){
  $('body').load('about-us.html');
});
