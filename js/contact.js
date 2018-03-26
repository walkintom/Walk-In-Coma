// Contact Form

$(document).ready(function(){
    $("#contactForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/4slmkf4z",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
            alert("Your message was successfully sent.");
        },
        error: function(){
          console.log("Failure. Try again.");
            alert("There was a problem sending your message.");
        }
      });
    });
  });
