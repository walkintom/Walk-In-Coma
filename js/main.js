// Navbar Scroll Change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1950) {
        document.getElementById("nav").style.background = "#333";
    } else {
        document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.6)";
  }
}

// Video Player Controls
var video = document.getElementById("video-promo");
var btn = document.getElementById("playPause");
      
function playPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='far fa-pause-circle'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='far fa-play-circle'></i>";
    }
}

// ScrollSpy & Smooth Scrolling
$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 75});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#nav a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });
