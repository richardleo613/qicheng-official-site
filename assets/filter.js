document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("service-image");
    const expandableMenus = document.querySelectorAll(".menu-title.expandable");
    const submenuItems = document.querySelectorAll(".submenu li");
  
    // 一级菜单展开/收起
    expandableMenus.forEach(menu => {
      menu.addEventListener("click", () => {
        const submenu = menu.nextElementSibling;
        if (!submenu) return;
  
        const isOpen = submenu.style.display === "block";
        submenu.style.display = isOpen ? "none" : "block";
        menu.classList.toggle("open", !isOpen);
      });
    });
  
    // 点击国家：切换图片 + 高亮
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
  
    // 语言切换功能
    window.setLanguage = function (lang) {
      const all = document.querySelectorAll("[data-en][data-zh]");
      all.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
  
      const countries = document.querySelectorAll(".submenu li");
      countries.forEach(li => {
        li.textContent = li.getAttribute(`data-${lang}`);
      });
  
      localStorage.setItem("lang", lang);
    };
  
    // 切换语言菜单
    window.toggleLangMenu = function () {
      const menu = document.getElementById("langMenu");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    };
  
    // 初始语言应用
    const savedLang = localStorage.getItem("lang") || "zh";
    setLanguage(savedLang);
  });
  