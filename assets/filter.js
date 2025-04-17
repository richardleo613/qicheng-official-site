document.addEventListener("DOMContentLoaded", function () {
    const menuTitles = document.querySelectorAll(".menu-title.expandable");
    const lang = localStorage.getItem("lang") || "zh";
    setLanguage(lang);
  
    // 一级菜单展开/收起
    menuTitles.forEach(title => {
      title.addEventListener("click", function () {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
          submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
      });
    });
  
    // 点击国家项切换图片 + 高亮
    const menuItems = document.querySelectorAll(".submenu li");
    const image = document.getElementById("service-image");
  
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        const type = item.getAttribute("data-type");
        const region = item.getAttribute("data-region");
        const imagePath = `images/${type}-${region}.jpg`;
  
        image.src = imagePath;
        image.alt = `${type} - ${region}`;
  
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  
    // 语言切换时更新所有 data-en / data-zh
    function setLanguage(lang) {
      const elements = document.querySelectorAll("[data-en][data-zh]");
      elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
  
      // 更新左侧国家列表的国家名
      const countryItems = document.querySelectorAll(".submenu li");
      countryItems.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
  
      localStorage.setItem("lang", lang);
    }
  
    // 暴露语言切换函数供 script.js 使用
    window.setLanguage = setLanguage;
    window.toggleLangMenu = function () {
      const menu = document.getElementById("langMenu");
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    };
  });
  