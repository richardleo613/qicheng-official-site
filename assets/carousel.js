document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carousel-track");
    const slides = track.querySelectorAll("img");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    const prevBtn = document.querySelector(".carousel-arrows .left");
    const nextBtn = document.querySelector(".carousel-arrows .right");
  
    let currentIndex = 0;
    let interval;
  
    function goToSlide(index) {
      currentIndex = index;
      track.style.transform = `translateX(-${100 * index}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % (slides.length - 1);
      goToSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + (slides.length - 1)) % (slides.length - 1);
      goToSlide(currentIndex);
    }
  
    function startCarousel() {
      interval = setInterval(nextSlide, 5000);
    }
  
    function stopCarousel() {
      clearInterval(interval);
    }
  
    nextBtn.addEventListener("click", () => {
      stopCarousel();
      nextSlide();
      startCarousel();
    });
  
    prevBtn.addEventListener("click", () => {
      stopCarousel();
      prevSlide();
      startCarousel();
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        stopCarousel();
        goToSlide(index);
        startCarousel();
      });
    });
  
    goToSlide(0);
    startCarousel();
  });
  