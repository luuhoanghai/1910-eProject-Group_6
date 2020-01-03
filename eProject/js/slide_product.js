// slide show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ep_mySlides");
  var dots = document.getElementsByClassName("ep_dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("ep_active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " ep_active";
}
//-==================================================================

/* control dropdown*/
$(".dropdown").mouseover(function(){
    $(".dropdown-menu").fadeIn(100);
})
$(".dropdown").mouseleave(function(){
    $(".dropdown-menu").fadeOut(100);
})
/***********************************/
