document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("lang") || "zh";
    setLanguage(lang);
  
    const menuTitles = document.querySelectorAll(".menu-title.expandable");
    const menuItems = document.querySelectorAll(".submenu li");
    const image = document.getElementById("service-image");
  
    // 展开/折叠菜单绑定
    menuTitles.forEach(title => {
      title.addEventListener("click", function () {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
          const isOpen = submenu.style.display === "block";
          submenu.style.display = isOpen ? "none" : "block";
  
          // 箭头方向
          if (isOpen) {
            this.classList.remove("open");
          } else {
            this.classList.add("open");
          }
        }
      });
    });
  
    // 国家项点击切换图片 + 高亮
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        const type = item.getAttribute("data-type");
        const region = item.getAttribute("data-region");
        const imagePath = `images/${type}-${region}.jpg`;
  
        image.src = imagePath;
        image.alt = `${type} - ${region}`;
  
        // 高亮
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  
    // 切换语言时更新所有元素
    window.setLanguage = function (lang) {
      const elements = document.querySelectorAll("[data-en][data-zh]");
      elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
  
      const countryItems = document.querySelectorAll(".submenu li");
      countryItems.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
  
      localStorage.setItem("lang", lang);
    };
  
    // 切换语言菜单
    window.toggleLangMenu = function () {
      const menu = document.getElementById("langMenu");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    };
  });
  