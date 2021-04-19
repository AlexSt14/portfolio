//SLIDESHOW HOMEPAGE
var slideIndexHomepage = 1;
showSlidesHomepage(slideIndexHomepage);

// Next/Previous controls
function plusSlidesHomepage(n) {
    showSlidesHomepage(slideIndexHomepage += n);
}

// Thumbnail dots Controls
function currentSlideHomepage(n) {
    showSlidesHomepage(slideIndexHomepage = n);
}

function showSlidesHomepage(n) {
    var i;
    var slideshomepage = document.getElementsByClassName("mySlide");
    var dotshomepage = document.getElementsByClassName('dots_homepage');
    if (n > slideshomepage.length) {slideIndexHomepage = 1}
    if (n < 1) {slideIndexHomepage = slideshomepage.length}
    for (i = 0; i < slideshomepage.length; i++) {
        slideshomepage[i].style.display = "none";
    }
    for (i = 0; i < dotshomepage.length; i++) {
        dotshomepage[i].className = dotshomepage[i].className.replace(" active_homepage", "");
    }
    slideshomepage[slideIndexHomepage-1].style.display = "inline-block";
    dotshomepage[slideIndexHomepage-1].className += " active_homepage";
}