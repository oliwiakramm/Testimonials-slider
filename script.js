const testimonials = [...document.querySelectorAll(".testimonial")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });
  testimonials[i].classList.add("active");
}

function indexMin() {
  index--;

  if (index < 0) {
    index = testimonials.length - 1;
  }
  showTestimonial(index);
}

function indexMax() {
  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
  showTestimonial(index);
}

prevBtn.addEventListener("click", function () {
  indexMin();
});

nextBtn.addEventListener("click", function () {
  indexMax();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") {
    indexMin();
  }

  if (e.key == "ArrowRight") {
    indexMax();
  }
});
