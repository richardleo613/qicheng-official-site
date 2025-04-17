document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("service-image");
  const expandableMenus = document.querySelectorAll(".menu-title.expandable");
  const submenuItems = document.querySelectorAll(".submenu li");

  // ===== 一级菜单展开/收起 =====
  expandableMenus.forEach(menu => {
    menu.addEventListener("click", () => {
      const submenu = menu.nextElementSibling;
      if (!submenu) return;

      const isOpen = submenu.style.display === "block";
      submenu.style.display = isOpen ? "none" : "block";
      menu.classList.toggle("open", !isOpen);
    });
  });

  // ===== 点击国家切换图片 + 高亮 =====
  submenuItems.forEach(item => {
    item.addEventListener("click", () => {
      const type = item.dataset.type;
      const region = item.dataset.region;
      const imgPath = `images/${type}-${region}.jpg`;

      image.src = imgPath;
      image.alt = `${type}-${region}`;

      submenuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // ===== 多语言切换逻辑 =====
  window.setLanguage = function (lang) {
    const all = document.querySelectorAll("[data-en][data-zh]");
    all.forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    // 国家名
    const countryItems = document.querySelectorAll(".submenu li");
    countryItems.forEach(li => {
      li.textContent = li.getAttribute(`data-${lang}`);
    });

    localStorage.setItem("lang", lang);
  };

// 切换语言菜单的展开与隐藏
window.toggleLangMenu = function () {
  const menu = document.getElementById("langMenu");
  if (menu) {
    const current = window.getComputedStyle(menu).display;
    menu.style.display = current === "block" ? "none" : "block";
  }
};

  // ===== 页面初始化语言状态 =====
  const savedLang = localStorage.getItem("lang") || "zh";
  setLanguage(savedLang);
});
