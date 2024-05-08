//Form Contact Us implements JavaScript Validation.
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let selection = document.getElementById("selection").value;
  console.log(name)

  if (name.trim() === "" || email.trim() === "" || selection.trim() === "") {
      alert("Please fill out all fields.");
      return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  return true;
}
document.getElementById("button-send").addEventListener("click", () => validateForm())

// Banner use auto slide using JavaScript
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