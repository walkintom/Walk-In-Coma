// Contact Form

$(document).ready(function(){
    $("#contactForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/2d3kf8h4",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
          alert("Thanks, your message has been sent.");
            
            var form = document.getElementById("contactForm");
            form.reset();
        },
        error: function(){
          console.log("Failure. Try again.");
          alert("There was an issue sending your message.");
        }
      });
    });
  });
