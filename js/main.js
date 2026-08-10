// Navbar Scroll Change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1895) {
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
    $('a[href*="#"]').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 71
        }, 1100, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

// Video Play/Pause Button Event Listener
document.addEventListener("DOMContentLoaded", () => {
  const promoVideo = document.getElementById("video-promo");
  const toggleButton = document.getElementById("playPause");
  const toggleIcon = toggleButton?.querySelector("i");

  if (!promoVideo || !toggleButton || !toggleIcon) {
    console.error("Promotional video controls were not found.");
    return;
  }

  function updateVideoControl() {
    const paused = promoVideo.paused;

    toggleButton.setAttribute(
      "aria-label",
      paused ? "Play promotional video" : "Pause promotional video"
    );

    toggleIcon.classList.toggle("fa-play-circle", paused);
    toggleIcon.classList.toggle("fa-pause-circle", !paused);
  }

  toggleButton.addEventListener("click", async () => {
    try {
      if (promoVideo.paused) {
        await promoVideo.play();
      } else {
        promoVideo.pause();
      }
    } catch (error) {
      console.error("Video playback failed:", error);
    }

    updateVideoControl();
  });

  promoVideo.addEventListener("play", updateVideoControl);
  promoVideo.addEventListener("pause", updateVideoControl);
  updateVideoControl();
});