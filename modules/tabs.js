const tabsBtn = document.querySelectorAll(".js-tab-btn");
const tabsItems = document.querySelectorAll(".catalog-item");

function onTabClick(item) {
  let currentBtn = item;
  let tabId = currentBtn.getAttribute("data-tab");
  let currentTab = document.querySelector(tabId);

  if (!currentBtn.classList.contains("accordion__btn--active")) {
    tabsBtn.forEach(function (item) {
      item.classList.remove("accordion__btn--active");
    });

    tabsItems.forEach(function (item) {
      item.classList.remove("catalog-item--active");
    });

    currentBtn.classList.add("accordion__btn--active");
    currentTab.classList.add("catalog-item--active");
  }
}

tabsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onTabClick(btn);
  });
});

