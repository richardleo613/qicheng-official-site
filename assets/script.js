function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    const isEnglish = elements[0].innerText === elements[0].getAttribute('data-en');
    elements.forEach(el => {
      el.innerText = isEnglish ? el.getAttribute('data-zh') : el.getAttribute('data-en');
    });
  }
  