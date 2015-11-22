//constructor function for array items
var galleryArray = new Array();
//each one of these creates a new image in the array and creates a .src key as the images source
galleryArray[0] = new Image();
galleryArray[0].src = "images/rotator-1.jpg"

galleryArray[1] = new Image();
galleryArray[1].src = "images/rotator-2.jpg"

galleryArray[2] = new Image();
galleryArray[2].src = "images/rotator-3.jpg"

galleryArray[3] = new Image();
galleryArray[3].src = "images/rotator-4.jpg"

//for loop goes through each item in the array and appends the images to the gallery.  New images can be added with extreme ease.
for(var i = 0; i < galleryArray.length; i++){
  $('.gallery').append("<img class='galleryImage' src=" + galleryArray[i].src + ">")
}

//working on changing the image on click.  Doesnt work perfectly just yet.
$('.galleryImage').on("click", function changeImage(){
  var index = Math.floor(Math.random() * galleryArray.length);
  console.log("this" + " " + this.src)
  console.log("gallery" + " " +  galleryArray[index].src)
  if(this.src === galleryArray[index].src){
    changeImage();
  } else if(this.src !== galleryArray[index].src){
    this.src = galleryArray[index].src
  }
})

//loads flexslider
$(window).load(function() {
  $('.flexslider').flexslider();
});

//adds "NAME" and "EMAIL" placeholder text to input fields
$('#nameInput').attr('placeholder','NAME');
$('#mailInput').attr('placeholder','EMAIL');

//Checks if name field has text inside of it and email is valid.
$( "#newsForm" ).submit(function( event ) {
var name = $('#nameInput').val();
var mail = $('#mailInput').val();
    if(name && validator.isEmail(mail)){
    //post request here
    $( ".nameSpan" ).text( "Thank you!" ).show().fadeOut( 4000 );
    //resets fields to blank after successful submission
    $('#nameInput').val('');
    $('#mailInput').val('');
  } else if(!validator.isEmail(mail)){
    $( ".emailSpan" ).text( "Email not valid." ).show().fadeOut( 2000 );
    $( "#mailInput" ).effect( "shake", {times:3}, 1000 );
  } else if(!name){
    $( ".nameSpan" ).text( "Please enter your name." ).show().fadeOut( 2000 );
    $( "#nameInput" ).effect( "shake", {times:3}, 1000 );
  }
  //prevents page from reloading on form submission
  event.preventDefault();
});

// $('#galleryButton').on('click', function(){
//   window.location.href = "about-us.html";
// })

// working on ajax loading of HTML content
// $('#galleryButton').click(function(){
//   $('body').load('about-us.html');
// });





