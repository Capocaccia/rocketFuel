// I decided there was a better way to do this so I commented out this code.
// //constructor function for array items
// var galleryArray = new Array();
// //creates a new image in the array and creates a .src as the images source
// galleryArray[0] = new Image();
// galleryArray[0].src = "images/rotator-1.jpg"
// //creates a new image in the array and creates a .src as the images source
// galleryArray[1] = new Image();
// galleryArray[1].src = "images/rotator-2.jpg"
// //creates a new image in the array and creates a .src as the images source
// galleryArray[2] = new Image();
// galleryArray[2].src = "images/rotator-3.jpg"
// //creates a new image in the array and creates a .src as the images source
// galleryArray[3] = new Image();
// galleryArray[3].src = "images/rotator-4.jpg"

//for loop goes through each item in the array and appends the images to the gallery.  New images can be added with ease.
// for(var i = 0; i < galleryArray.length; i++){
//   $('.gallery').append("<img class='galleryImage' src=" + galleryArray[i].src + ">")
// }

// //working on changing the image on click.  Doesnt work perfectly just yet.
// $('.galleryImage').on("click", function changeImage(){
//   var index = Math.floor(Math.random() * galleryArray.length);
//   console.log("this" + " " + this.src)
//   console.log("gallery" + " " +  galleryArray[index].src)
//   if(this.src === galleryArray[index].src){
//     changeImage();
//   } else if(this.src !== galleryArray[index].src){
//     this.src = galleryArray[index].src
//   }
// })

//creates empty array for storage of images
var galleryArray = [];

//function to add images to array.  Takes in image source as argument.
function addImage(src) {
  galleryArray.push(src);
}

//Calling the function with each image source.  More images can be added by simply calling the function again with additional sources.
addImage("images/rotator-1.jpg");
addImage("images/rotator-2.jpg");
addImage("images/rotator-3.jpg");
addImage("images/rotator-4.jpg");

//this function takes in the current source of the image, checks to see if currSrc is the same as the current image being displayed
//if the current image is the same as currSrc then it calls itself again to get another index value
function getNewImageSrc(currSrc) {
  var index = Math.floor(Math.random() * galleryArray.length);
    if (galleryArray[index] === currSrc) {
    return getNewImageSrc(currSrc);
  } else {
    return galleryArray[index];
  }
}

//sets the intial galleryImage source
$('.galleryImage').attr('src', galleryArray[0]);

//on clicking of the gallery image, gallery image changes
$('.galleryImage').click(function() {
  //currSrc = to current image src
  var currSrc = $(this).attr('src');
  //newImage = the value returned from getNewImage(currSrc) function
  var newImage = getNewImageSrc(currSrc);
  //new src attribute is made using the newImage which is the value returned from getNewImage(currSrc) function
  $(this).attr('src', newImage);
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
    $.ajax({
      type: "POST",
      url: "postTest",
      data: "TESTING",
      success: function(){
                  $( ".nameSpan" ).text( "Thank you!" ).show().fadeOut( 2000 );
                },
      dataType: String,
      error: alert('Error!  Please re-enter information and try again!')
    });
    //resets fields to blank after successful submission
    $('#nameInput').val('');
    $('#mailInput').val('');
  } else if(!name){
    $( ".nameSpan" ).text( "Please enter your name." ).show().fadeOut( 2000 );
    $( "#nameInput" ).effect( "shake", {times:3}, 1000 );
  } else if(!validator.isEmail(mail)){
    $( ".emailSpan" ).text( "Email not valid." ).show().fadeOut( 2000 );
    $( "#mailInput" ).effect( "shake", {times:3}, 1000 );
  }
  //prevents page from reloading on form submission
  event.preventDefault();
});


//A way to navigate with JS but I dont think this is what you want
// $('#galleryButton').on('click', function(){
//   window.location.href = "about-us.html";
// })

// working on ajax loading of HTML content
//I am just using the "view the gallery" button for now since its already on the page.
// $('#galleryButton').click(function(){
//   $('body').load('about-us.html');
// });


// working on jQuery ajax loading of HTML content #2
// $(document).ready(function(){
//     $("#galleryButton").click(function(){
//         $.ajax({url: "about-us.html", success: function(result){
//             $("body").html(result);
//         }});
//     });
// });

// working on native JavaScript ajax loading of HTML content #3
$("#galleryButton").click(
  function loadAboutMe() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("body").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "about-us.html", true);
    xhttp.send();
})
