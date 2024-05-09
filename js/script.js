// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let selection = document.getElementById("selection").value;
  let isValid = true;

// Reset error messages
document.getElementById("name-error").innerText = "";
document.getElementById("email-error").innerText = "";
document.getElementById("selection-error").innerText = "";
  
  if (name.trim() === "") {
      document.getElementById("name-error").innerText = "*Please fill in your name";
      isValid = false;
  }
  
  if (email.trim() === "") {
      document.getElementById("email-error").innerText = "*Please fill in your email";
      isValid = false;
  } else {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          document.getElementById("email-error").innerText = "*Please enter a valid email address";
          isValid = false;
      }
  }
  
  if (selection.trim() === "") {
      document.getElementById("selection-error").innerText = "*Please select an option";
      isValid = false;
  }
  
  if (isValid) {
       document.getElementById("success-message").innerText = "Form is submitted";
  }
  
  console.log(name)
  console.log(email)
  console.log(selection)
  return isValid;
}

document.getElementById("button-send").addEventListener("click", () => validateForm())

// Auto-slide banner
var slideIndex = 1;
showSlides(slideIndex);

function plusDivs(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slideshow");
  var texts = document.getElementsByClassName("text-slideshow");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < texts.length; i++) {
      texts[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  texts[slideIndex-1].style.display = "block";  
}

// Automatic slideshow
var slideInterval = setInterval(function() {
  plusDivs(1);
}, 3000);
