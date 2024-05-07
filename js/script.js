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