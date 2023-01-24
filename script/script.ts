const prev: HTMLElement = document.querySelector(".prev");
prev.addEventListener("click", () => {
  plusSlides(-1);
});
const next: HTMLElement = document.querySelector(".next");
next.addEventListener("click", function (e) {
  plusSlides(1);
});

const dotsField: HTMLElement = document.querySelector(".dots");

dotsField.addEventListener("click", (e) => {
  if (e.target instanceof HTMLElement) {
    if (e.target.classList.contains("dot")) {
      currentSlide(Number(e.target.dataset.num));
    }
  }
});

let slideIndex: number = 0;
showSlides(slideIndex);

function plusSlides(n: number) {
  showSlides((slideIndex += n));
}

function currentSlide(n: number) {
  slideIndex = n;
  showSlides(slideIndex);
}

let interval: number = 3;
const slideShow = setInterval((interval: number) => {
  plusSlides(1);
}, interval * 1000);

document.addEventListener("click", () => {
  clearInterval(slideShow);
});

document.addEventListener("touchmove", () => {
  clearInterval(slideShow);
});

function showSlides(n: number) {
  const slides: NodeListOf<HTMLElement> =
    document.querySelectorAll(".mySlides");
  const dots: NodeListOf<HTMLElement> = document.querySelectorAll(".dot");

  if (n > slides.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i: number = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let horizontalStart: number | null = null;

function handleTouchStart(e) {
  horizontalStart = e.touches[0].clientX;
}

function handleTouchMove(e) {
  if (!horizontalStart) {
    return;
  }

  let horizontalEnd: number = e.touches[0].clientX;
  let horizontalMove: number = horizontalStart - horizontalEnd;

  if (horizontalMove > 0) {
    plusSlides(1);
  } else {
    plusSlides(-1);
  }

  horizontalStart = null;
}
