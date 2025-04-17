document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-sidebar input[type='checkbox']");
    const serviceCards = document.querySelectorAll(".service-card");
  
    // 监听所有 checkbox 变化
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", applyFilters);
    });
  
    function applyFilters() {
      // 获取所有勾选的类型和值
      const selectedTypes = getCheckedValues("服务类型");
      const selectedRegions = getCheckedValues("国家/地区");
  
      // 遍历每个卡片，根据 data- 属性判断是否匹配
      serviceCards.forEach(card => {
        const type = card.getAttribute("data-type");
        const region = card.getAttribute("data-region");
  
        const typeMatch = selectedTypes.includes(type);
        const regionMatch = selectedRegions.includes(region);
  
        if (typeMatch && regionMatch) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    // 获取某个分组下勾选的值
    function getCheckedValues(groupTitle) {
      const group = Array.from(document.querySelectorAll(".filter-group"))
        .find(g => g.querySelector(".filter-title").textContent === groupTitle);
  
      if (!group) return [];
  
      return Array.from(group.querySelectorAll("input[type='checkbox']:checked"))
        .map(cb => cb.value);
    }
  
    // 页面首次加载时就执行一次筛选
    applyFilters();
  });
  