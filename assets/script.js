// 🌍 中英文切换功能
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-zh');
  });
}

// 页面加载时默认切换为中文 + 启动轮播
window.onload = function () {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute('data-zh');
  });

  initCarousel();
};

// 🎠 无限正向轮播图逻辑
let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track.querySelectorAll('img');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length - 1; // 最后一张是克隆图

  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    updateCarousel();
    resetAutoSlide();
  }

  function updateCarousel() {
    if (!track) return;
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
    if (isTransitioning) return;
    currentIndex++;
    updateCarousel();
  }

  function prevSlide() {
    if (isTransitioning) return;
    if (currentIndex === 0) {
      currentIndex = totalSlides - 1;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${(totalSlides) * 100}%)`;
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out';
        nextSlide();
      }, 50);
    } else {
      currentIndex--;
      updateCarousel();
    }
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // 添加事件监听
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  document.querySelector('.arrow.left')?.addEventListener('click', prevSlide);
  document.querySelector('.arrow.right')?.addEventListener('click', nextSlide);

  track.addEventListener('transitionend', () => {
    if (currentIndex === totalSlides) {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = `translateX(0%)`;
    }
    isTransitioning = false;
  });

  resetAutoSlide();
}
