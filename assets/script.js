// 🌍 中英文切换功能
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  if (elements.length === 0) return;

  const isEnglish = elements[0].innerText === elements[0].getAttribute('data-en');

  elements.forEach(el => {
    el.innerText = isEnglish ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
}

// 页面加载时默认显示中文 + 启动轮播图
window.onload = function () {
  // 默认语言设为中文
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute('data-zh');
  });

  // 启动轮播
  initCarousel();
};

// 🎠 轮播图逻辑
let currentIndex = 0;
let carouselInterval;

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function updateCarousel() {
    if (!track) return;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  // 自动轮播
  carouselInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
  }, 5000); // 每 5 秒切换一次

  // 绑定点击事件
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(carouselInterval);
      goToSlide(index);
      // 重启自动轮播
      carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
      }, 5000);
    });
  });

  // 初始调用
  updateCarousel();
}
