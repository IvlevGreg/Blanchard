const tabsBtn   = document.querySelectorAll(".js-tab-btn");
const tabsItems = document.querySelectorAll(".catalog-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tabs-nab__btn--active') ) 
        {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tabs-nab__btn--active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('catalog-item--active');
            });
    
            currentBtn.classList.add('tabs-nab__btn--active');
            currentTab.classList.add('catalog-item--active');
        }
    });
}

document.querySelector('.js-tab-btn').click();


