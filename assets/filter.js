document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-sidebar input[type='checkbox']");
    const serviceCards = document.querySelectorAll(".service-card");
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", applyFilters);
    });
  
    function applyFilters() {
      // 获取所有勾选项
      const selectedTypes = getCheckedValues("服务类型");
      const selectedRegions = getCheckedValues("国家/地区");
  
      serviceCards.forEach(card => {
        const type = card.getAttribute("data-type");
        const region = card.getAttribute("data-region");
  
        const matchType = selectedTypes.includes(type);
        const matchRegion = selectedRegions.includes(region);
  
        if (matchType && matchRegion) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    function getCheckedValues(titleText) {
      const group = Array.from(document.querySelectorAll(".filter-group"))
        .find(g => g.querySelector(".filter-title").textContent.trim() === titleText);
  
      if (!group) return [];
  
      return Array.from(group.querySelectorAll("input[type='checkbox']:checked"))
        .map(cb => cb.value);
    }
  
    applyFilters(); // 页面首次加载时也执行一次
  });
  