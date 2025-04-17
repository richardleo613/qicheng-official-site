// Language toggle logic
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  if (elements.length === 0) return;

  const isEnglish = elements[0].innerText === elements[0].getAttribute('data-en');

  elements.forEach(el => {
    const langText = isEnglish ? el.getAttribute('data-zh') : el.getAttribute('data-en');
    if (langText) el.innerText = langText;
  });
}
