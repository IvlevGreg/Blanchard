/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/catalog-accordion.js":
/*!********************************************!*\
  !*** ./src/assets/js/catalog-accordion.js ***!
  \********************************************/
/***/ (function() {

eval("\r\n(() => {\r\n  new Accordion(\".js-accordion-container\", {\r\n    openOnInit: [0]\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/catalog-accordion.js?");

/***/ }),

/***/ "./src/assets/js/contact-form.js":
/*!***************************************!*\
  !*** ./src/assets/js/contact-form.js ***!
  \***************************************/
/***/ (function() {

eval("var selector = document.getElementById(\"tel\");\r\n\r\nvar im = new Inputmask(\"+7 (999)-999-99-99\");\r\nim.mask(selector);\r\n\r\nconst validation = new JustValidate('.form');\r\n\r\n\r\n\r\nvalidation\r\n  .addField('#name', [\r\n    {\r\n      rule: 'minLength',\r\n      value: 3,\r\n      errorMessage: 'Введите больше 3 букв'\r\n    },\r\n    {\r\n      rule: 'maxLength',\r\n      value: 30,\r\n      errorMessage: 'Введите меньше 30 букв'\r\n\r\n    },\r\n    {\r\n      rule: 'required',\r\n      errorMessage: 'Укажите имя',\r\n    },\r\n  ])\r\n  validation.addField('#tel', [\r\n    {\r\n      errorMessage: 'Введите корректный телефон',\r\n      validator: (value) => {\r\n        const phone = selector.inputmask.unmaskedvalue()\r\n        console.log(phone)\r\n        return Number(phone) && phone.length === 10\r\n      \r\n    },\r\n  },\r\n  ]);\r\n\r\n\r\n\r\n// var selector = document.querySelector('#tel');\r\n//   validation.addField('#tel', [\r\n//     {\r\n//       function (name, value) => {\r\n//       const phone = selector.inputmask.unmaskedvalue()\r\n//       return Number(phone) && phone.length  === 10\r\n//     }\r\n//   },\r\n//   ]);\r\n    \r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/contact-form.js?");

/***/ }),

/***/ "./src/assets/js/dropdown.js":
/*!***********************************!*\
  !*** ./src/assets/js/dropdown.js ***!
  \***********************************/
/***/ (function() {

eval("const params = {\r\n  btnClassName: \"js-header-dropdown-btn\",\r\n  dropClassName: \"js-header-drop\",\r\n  activeClassName: \"is-active\",\r\n  disabledClassName: \"is-disabled\"\r\n}\r\n\r\nfunction onDisable(evt) {\r\n  if (evt.target.classList.contains(params.disabledClassName)) {\r\n    evt.target.classList.remove(params.disabledClassName, params.activeClassName);\r\n    evt.target.removeEventListener(\"animationend\", onDisable);\r\n  }\r\n}\r\n\r\n  function setMenuListener() {\r\n    document.body.addEventListener(\"click\", (evt) => {\r\n      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);\r\n\r\n      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {\r\n        activeElements.forEach((current) => {\r\n          if (current.classList.contains(params.btnClassName)) {\r\n            current.classList.remove(params.activeClassName);\r\n          } else {\r\n            current.classList.add(params.disabledClassName);\r\n          }\r\n        });\r\n      }\r\n\r\n      if (evt.target.closest(`.${params.btnClassName}`)) {\r\n        const btn = evt.target.closest(`.${params.btnClassName}`);\r\n        const path = btn.dataset.path;\r\n        const drop = document.querySelector(`.${params.dropClassName}[data-target=\"${path}\"]`);\r\n\r\n        btn.classList.toggle(params.activeClassName);\r\n\r\n        if (!drop.classList.contains(params.activeClassName)) {\r\n          drop.classList.add(params.activeClassName);\r\n          drop.addEventListener(\"animationend\", onDisable);\r\n        } else {\r\n          drop.classList.add(params.disabledClassName);\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\nsetMenuListener();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/dropdown.js?");

/***/ }),

/***/ "./src/assets/js/events-swiper.js":
/*!****************************************!*\
  !*** ./src/assets/js/events-swiper.js ***!
  \****************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  let eventSlider = new Swiper(\".swiper-event\", {\r\n    slidesPerView: 1,\r\n    grid: {\r\n      rows: 1,\r\n      fill: \"row\"\r\n    },\r\n    spaceBetween: 20,\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    navigation: {\r\n      nextEl: \".event-btn-next\",\r\n      prevEl: \".event-btn-prev\"\r\n    },\r\n\r\n\r\n    breakpoints: {\r\n      441: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 30\r\n      },\r\n\r\n      1024: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 27\r\n      },\r\n      1512: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 50\r\n      }\r\n    },\r\n    setWrapperSize: true,\r\n    a11y: false,\r\n    keyboard: {\r\n      enabled: true,\r\n      onlyInViewport: true\r\n    }, // можно управлять с клавиатуры стрелками влево/вправо\r\n\r\n    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми\r\n    watchSlidesProgress: true,\r\n    watchSlidesVisibility: true,\r\n    slideVisibleClass: \"slide-visible\",\r\n\r\n    on: {\r\n      init: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      },\r\n      slideChange: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      }\r\n    }\r\n\r\n    // on: {\r\n    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */\r\n    //   beforeResize: function () {\r\n    //     this.slides.forEach((el) => {\r\n    //       el.style.marginTop = \"\";\r\n    //     });\r\n    //   }\r\n    // }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/events-swiper.js?");

/***/ }),

/***/ "./src/assets/js/gallery-swiper.js":
/*!*****************************************!*\
  !*** ./src/assets/js/gallery-swiper.js ***!
  \*****************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  let gallerySlider = new Swiper(\".swiper-gallery__slides-container\", {\r\n    slidesPerView: 1,\r\n    grid: {\r\n      rows: 1,\r\n      fill: \"row\"\r\n    },\r\n    spaceBetween: 20,\r\n    pagination: {\r\n      el: \".gallery .swiper-gallery__pagination\",\r\n      type: \"fraction\"\r\n    },\r\n    navigation: {\r\n      nextEl: \".swiper-gallery__next\",\r\n      prevEl: \".swiper-gallery__prev\"\r\n    },\r\n\r\n    breakpoints: {\r\n      441: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 40\r\n      },\r\n\r\n      1200: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 50\r\n      }\r\n    },\r\n\r\n    a11y: false,\r\n    keyboard: {\r\n      enabled: true,\r\n      onlyInViewport: true\r\n    }, // можно управлять с клавиатуры стрелками влево/вправо\r\n\r\n    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми\r\n    watchSlidesProgress: true,\r\n    watchSlidesVisibility: true,\r\n    slideVisibleClass: \"slide-visible\",\r\n\r\n    on: {\r\n      init: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      },\r\n      slideChange: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      }\r\n    }\r\n\r\n    // on: {\r\n    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */\r\n    //   beforeResize: function () {\r\n    //     this.slides.forEach((el) => {\r\n    //       el.style.marginTop = \"\";\r\n    //     });\r\n    //   }\r\n    // }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/gallery-swiper.js?");

/***/ }),

/***/ "./src/assets/js/hero-swiper.js":
/*!**************************************!*\
  !*** ./src/assets/js/hero-swiper.js ***!
  \**************************************/
/***/ (function() {

eval("const swiper = new Swiper('.js-hero-swiper', {\r\n  allowTouchMove: false,\r\n  loop: true,\r\n  effect: 'fade',\r\n  speed: 10000,\r\n  autoplay: {\r\n    delay: 10000\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/hero-swiper.js?");

/***/ }),

/***/ "./src/assets/js/map.js":
/*!******************************!*\
  !*** ./src/assets/js/map.js ***!
  \******************************/
/***/ (function() {

eval("ymaps.ready(init);\r\nfunction init() {\r\n  // Создание карты.\r\n  const mapElem = document.querySelector('#map');\r\n  var myMap = new ymaps.Map(\"map\", {\r\n    // Координаты центра карты.\r\n    // Порядок по умолчанию: «широта, долгота».\r\n    // Чтобы не определять координаты центра карты вручную,\r\n    // воспользуйтесь инструментом Определение координат.\r\n    center: [55.760336, 37.614692],\r\n    //center: [55.7578463, 37.626079],\r\n    // Уровень масштабирования. Допустимые значения:\r\n    // от 0 (весь мир) до 19.\r\n    zoom: 14,\r\n    controls: ['geolocationControl', 'zoomControl']\r\n  },\r\n\r\n    {\r\n      suppressMapOpenBlock: true,\r\n      geolocationControlSize: \"large\",\r\n      geolocationControlPosition: { top: \"200px\", right: \"20px\" },\r\n      geolocationControlFloat: 'none',\r\n      zoomControlSize: \"small\",\r\n      zoomControlFloat: \"none\",\r\n      zoomControlPosition: { top: \"120px\", right: \"20px\" }\r\n    }\r\n  );\r\n\r\n\r\n  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {\r\n    hintContent: 'Собственный значок метки',\r\n    balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54'\r\n  }, {\r\n    // Опции.\r\n    // Необходимо указать данный тип макета.\r\n    iconLayout: 'default#image',\r\n    // Своё изображение иконки метки.\r\n    iconImageHref: 'https://img.icons8.com/office/2x/one-free.png',\r\n    // Размеры метки.\r\n    iconImageSize: [20, 20],\r\n    // Смещение левого верхнего угла иконки относительно\r\n    // её \"ножки\" (точки привязки).\r\n    iconImageOffset: [0, 20]\r\n  });\r\n\r\n\r\n  myMap.geoObjects\r\n    .add(myPlacemark)\r\n  myMap.behaviors.disable('scrollZoom')\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/map.js?");

/***/ }),

/***/ "./src/assets/js/one-size.js":
/*!***********************************!*\
  !*** ./src/assets/js/one-size.js ***!
  \***********************************/
/***/ (function() {

eval("window.onload = function() {\r\n  setTimeout(function() {\r\n      var mainDivs = document.getElementsByClassName(\"events-item\");\r\n      var maxHeight = 0;\r\n      for (var i = 0; i < mainDivs.length; ++i) {\r\n        if (maxHeight < mainDivs[i].clientHeight) {\r\n          maxHeight = mainDivs[i].clientHeight; \r\n        }\r\n      }\r\n      for (var i = 0; i < mainDivs.length; ++i) {\r\n        mainDivs[i].style.height = maxHeight + \"px\";\r\n      }\r\n    }, 1000);\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/one-size.js?");

/***/ }),

/***/ "./src/assets/js/projects-swiper.js":
/*!******************************************!*\
  !*** ./src/assets/js/projects-swiper.js ***!
  \******************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  let projectsSlider = new Swiper(\".swiper-projects\", {\r\n    slidesPerView: 1,\r\n    grid: {\r\n      rows: 1,\r\n      fill: \"row\"\r\n    },\r\n    spaceBetween: 20,\r\n\r\n    navigation: {\r\n      nextEl: \".projects-btn-next\",\r\n      prevEl: \".projects-btn-prev\"\r\n    },\r\n\r\n    breakpoints: {\r\n      441: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 34\r\n      },\r\n\r\n      1200: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 50\r\n      },\r\n\r\n      1512: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 50\r\n      }\r\n    },\r\n\r\n    a11y: false,\r\n    keyboard: {\r\n      enabled: true,\r\n      onlyInViewport: true\r\n    }, // можно управлять с клавиатуры стрелками влево/вправо\r\n\r\n    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми\r\n    watchSlidesProgress: true,\r\n    watchSlidesVisibility: true,\r\n    slideVisibleClass: \"slide-visible\",\r\n\r\n    on: {\r\n      init: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      },\r\n      slideChange: function () {\r\n        this.slides.forEach((slide) => {\r\n          if (!slide.classList.contains(\"slide-visible\")) {\r\n            slide.tabIndex = \"-1\";\r\n          } else {\r\n            slide.tabIndex = \"\";\r\n          }\r\n        });\r\n      }\r\n    }\r\n\r\n    // on: {\r\n    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */\r\n    //   beforeResize: function () {\r\n    //     this.slides.forEach((el) => {\r\n    //       el.style.marginTop = \"\";\r\n    //     });\r\n    //   }\r\n    // }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/projects-swiper.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("document.querySelectorAll('.js-scroll-link').forEach(link => {\r\n\r\n  link.addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n\r\n    const href = this.getAttribute('href').substring(1);\r\n    const scrollTarget = document.getElementById(href);\r\n    const elementPosition = scrollTarget.getBoundingClientRect().top;\r\n\r\n    window.scrollBy({\r\n      top: elementPosition,\r\n      behavior: 'smooth'\r\n    });\r\n  })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/***/ (function() {

eval("const element = document.querySelector('.gallery-select');\r\nconst choices = new Choices(element, {\r\n  searchEnabled: false,\r\n  itemSelectText: '',\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/select.js?");

/***/ }),

/***/ "./src/assets/js/test.js":
/*!*******************************!*\
  !*** ./src/assets/js/test.js ***!
  \*******************************/
/***/ (function() {

eval("// var a, w = document.createTreeWalker(document, NodeFilter.SHOW_TEXT); while (a = w.nextNode()) { if (a.textContent.trim().length) a.textContent = 'Одиннадцатиклассница пошла посмотреть на достопримечательность, она шла долго, несколько строчек, пока не пришла' }\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/test.js?");

/***/ }),

/***/ "./src/assets/js/tippy.js":
/*!********************************!*\
  !*** ./src/assets/js/tippy.js ***!
  \********************************/
/***/ (function() {

eval("tippy('.tooltip-js', {\r\n  content: 'Tooltip',\r\n  \r\n  theme: 'violet',\r\n  trigger: 'mouseenter click',\r\n  maxWidth: 265,\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/tippy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/catalog-accordion.js"]();
/******/ 	__webpack_modules__["./src/assets/js/contact-form.js"]();
/******/ 	__webpack_modules__["./src/assets/js/dropdown.js"]();
/******/ 	__webpack_modules__["./src/assets/js/events-swiper.js"]();
/******/ 	__webpack_modules__["./src/assets/js/gallery-swiper.js"]();
/******/ 	__webpack_modules__["./src/assets/js/hero-swiper.js"]();
/******/ 	__webpack_modules__["./src/assets/js/map.js"]();
/******/ 	__webpack_modules__["./src/assets/js/one-size.js"]();
/******/ 	__webpack_modules__["./src/assets/js/projects-swiper.js"]();
/******/ 	__webpack_modules__["./src/assets/js/scroll.js"]();
/******/ 	__webpack_modules__["./src/assets/js/select.js"]();
/******/ 	__webpack_modules__["./src/assets/js/test.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/tippy.js"]();
/******/ 	
/******/ })()
;