function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  if (elements.length === 0) return;

  const isEnglish = elements[0].innerText === elements[0].getAttribute('data-en');

  elements.forEach(el => {
    el.innerText = isEnglish ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
}

// ✅ 页面加载时自动切换为中文
window.onload = function () {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute('data-zh');
  });
};
