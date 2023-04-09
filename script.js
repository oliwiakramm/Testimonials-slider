const testimonials = [...document.querySelectorAll(".testimonial")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

prevBtn.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = testimonials.length - 1;
  }
  showTestimonial(index);
});

nextBtn.addEventListener("click", function () {
  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
  showTestimonial(index);
});

function showTestimonial(i) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });
  testimonials[i].classList.add("active");
}
