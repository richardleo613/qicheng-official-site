document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".submenu li");
    const image = document.getElementById("service-image");
  
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        // 1. 获取服务类型和地区
        const type = item.getAttribute("data-type");
        const region = item.getAttribute("data-region");
  
        // 2. 构建图片路径
        const imagePath = `images/${type}-${region}.jpg`;
  
        // 3. 设置图片
        image.src = imagePath;
        image.alt = `${type} - ${region}`;
  
        // 4. 更新高亮状态
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });
  