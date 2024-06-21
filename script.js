/** @format */

$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $("#applyButton").click(submitApplication);
});

function validateForm() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function submitApplication() {
  $.ajax({
    url: "submit_application.php",
    type: "POST",
    data: $("form").serialize(),
    success: function (response) {
      $("#confirmation").show();
    },
    error: function (xhr, status, error) {
      console.error(xhr.responseText);
      alert(
        "An error occurred while processing your application. Please try again later."
      );
    },
  });
}

function signUp() {
  document.getElementById("signUp").innerHTML = signin.html;
}

