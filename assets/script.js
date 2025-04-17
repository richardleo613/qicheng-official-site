// 🌍 中英文切换功能
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  if (elements.length === 0) return;

  const isEnglish = elements[0].innerText === elements[0].getAttribute('data-en');

  elements.forEach(el => {
    el.innerText = isEnglish ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
}

// 页面加载默认中文 + 启动轮播
window.onload = function () {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute('data-zh');
  });

  initCarousel();
};

// 🎠 无限轮播图逻辑
let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track.querySelectorAll('img');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length - 1; // 最后一个是克隆图

  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    updateCarousel();
    resetAutoSlide();
  }

  function updateCarousel() {
    isTransitioning = true;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (currentIndex === totalSlides) {
      dots[0].classList.add('active');
    } else {
      dots[currentIndex].classList.add('active');
    }
  }

  function nextSlide() {
    currentIndex++;
    updateCarousel();
  }

  track.addEventListener('transitionend', () => {
    if (currentIndex === totalSlides) {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = `translateX(0%)`;
    }
    isTransitioning = false;
  });

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // 绑定点击圆点
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  resetAutoSlide(); // 启动轮播
}
