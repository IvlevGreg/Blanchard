new Accordion(".js-accordion-container",{openOnInit:[0]}),function(){var e=document.getElementById("tel");new Inputmask("+7 (999)-999-99-99").mask(e);const t=new JustValidate(".form");t.addField("#name",[{rule:"minLength",value:3,errorMessage:"Введите больше 3 букв"},{rule:"maxLength",value:30,errorMessage:"Введите меньше 30 букв"},{rule:"required",errorMessage:"Укажите имя"}]),t.addField("#tel",[{errorMessage:"Введите корректный телефон",validator:t=>{const i=e.inputmask.unmaskedvalue();return console.log(i),Number(i)&&10===i.length}}])}(),function(){const e="js-header-dropdown-btn",t="is-active",i="is-disabled";function s(e){e.target.classList.contains(i)&&(e.target.classList.remove(i,t),e.target.removeEventListener("animationend",s))}document.body.addEventListener("click",(n=>{const o=document.querySelectorAll(".js-header-dropdown-btn.is-active, .js-header-drop.is-active");if(o.length&&!n.target.closest(".is-active")&&o.forEach((s=>{s.classList.contains(e)?s.classList.remove(t):s.classList.add(i)})),n.target.closest(".js-header-dropdown-btn")){const e=n.target.closest(".js-header-dropdown-btn"),o=e.dataset.path,a=document.querySelector(`.js-header-drop[data-target="${o}"]`);e.classList.toggle(t),a.classList.contains(t)?a.classList.add(i):(a.classList.add(t),a.addEventListener("animationend",s))}}))}(),document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".swiper-event",{slidesPerView:1,grid:{rows:1,fill:"row"},spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".event-btn-next",prevEl:".event-btn-prev"},breakpoints:{441:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:27},1512:{slidesPerView:3,spaceBetween:50}},setWrapperSize:!0,a11y:!1,keyboard:{enabled:!0,onlyInViewport:!0},watchSlidesProgress:!0,watchSlidesVisibility:!0,slideVisibleClass:"slide-visible",on:{init:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))},slideChange:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))}}})})),document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".swiper-gallery__slides-container",{slidesPerView:1,grid:{rows:1,fill:"row"},spaceBetween:20,pagination:{el:".gallery .swiper-gallery__pagination",type:"fraction"},navigation:{nextEl:".swiper-gallery__next",prevEl:".swiper-gallery__prev"},breakpoints:{441:{slidesPerView:2,spaceBetween:40},1200:{slidesPerView:3,spaceBetween:50}},a11y:!1,keyboard:{enabled:!0,onlyInViewport:!0},watchSlidesProgress:!0,watchSlidesVisibility:!0,slideVisibleClass:"slide-visible",on:{init:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))},slideChange:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))}}})})),new Swiper(".js-hero-swiper",{allowTouchMove:!1,loop:!0,effect:"fade",speed:1e4,autoplay:{delay:1e4}}),ymaps.ready((function(){document.querySelector("#map");var e=new ymaps.Map("map",{center:[55.760336,37.614692],zoom:14,controls:["geolocationControl","zoomControl"]},{suppressMapOpenBlock:!0,geolocationControlSize:"large",geolocationControlPosition:{top:"200px",right:"20px"},geolocationControlFloat:"none",zoomControlSize:"small",zoomControlFloat:"none",zoomControlPosition:{top:"120px",right:"20px"}});myPlacemark=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54"},{iconLayout:"default#image",iconImageHref:"https://i.ibb.co/Lzk5rR6/map-icon.png",iconImageSize:[20,20],iconImageOffset:[0,20]}),e.geoObjects.add(myPlacemark),e.behaviors.disable("scrollZoom")})),document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".swiper-projects",{slidesPerView:1,grid:{rows:1,fill:"row"},spaceBetween:20,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},breakpoints:{441:{slidesPerView:2,spaceBetween:34},1200:{slidesPerView:2,spaceBetween:50},1512:{slidesPerView:3,spaceBetween:50}},a11y:!1,keyboard:{enabled:!0,onlyInViewport:!0},watchSlidesProgress:!0,watchSlidesVisibility:!0,slideVisibleClass:"slide-visible",on:{init:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))},slideChange:function(){this.slides.forEach((e=>{e.classList.contains("slide-visible")?e.tabIndex="":e.tabIndex="-1"}))}}})})),document.querySelectorAll(".js-scroll-link").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),i=document.getElementById(t).getBoundingClientRect().top;window.scrollBy({top:i,behavior:"smooth"})}))})),function(){const e=document.querySelector(".gallery-select");new Choices(e,{searchEnabled:!1,itemSelectText:""})}(),tippy(".tooltip-js",{content:"Tooltip",theme:"violet",trigger:"mouseenter click",maxWidth:265});