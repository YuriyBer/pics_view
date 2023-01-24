var prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
    plusSlides(-1);
});
var next = document.querySelector(".next");
next.addEventListener("click", function (e) {
    plusSlides(1);
});
var dotsField = document.querySelector(".dots");
dotsField.addEventListener("click", function (e) {
    if (e.target instanceof HTMLElement) {
        if (e.target.classList.contains("dot")) {
            currentSlide(Number(e.target.dataset.num));
        }
    }
});
var slideIndex = 0;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}
var interval = 3;
var slideShow = setInterval(function (interval) {
    plusSlides(1);
}, interval * 1000);
document.addEventListener("click", function () {
    clearInterval(slideShow);
});
document.addEventListener("touchmove", function () {
    clearInterval(slideShow);
});
function showSlides(n) {
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
var horizontalStart = null;
function handleTouchStart(e) {
    horizontalStart = e.touches[0].clientX;
}
function handleTouchMove(e) {
    if (!horizontalStart) {
        return;
    }
    var horizontalEnd = e.touches[0].clientX;
    var horizontalMove = horizontalStart - horizontalEnd;
    if (horizontalMove > 0) {
        plusSlides(1);
    }
    else {
        plusSlides(-1);
    }
    horizontalStart = null;
}
