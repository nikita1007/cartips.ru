/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nwindow.$ = {\r\n  isMobNavbarActive: false,\r\n  isMobile: false,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  setHeader: (templates) => {\r\n    if (\r\n      (window.innerWidth > 1024 &&\r\n        document.querySelector(\".header > .header__hat\") != undefined) ||\r\n      (window.innerWidth <= 1024 &&\r\n        document.querySelector(\".header > .mobile--header__hat\") != undefined)\r\n    )\r\n      return;\r\n\r\n    var headerHat;\r\n    if (document.querySelector(\".header > .js--header__hat\") != undefined) {\r\n      if (window.innerWidth <= 1024) {\r\n        headerHat = templates[\"mobile--header__hat\"].content\r\n          .querySelector(\".js--header__hat\")\r\n          .cloneNode(true);\r\n      } else {\r\n        headerHat = templates[\"desctop--header__hat\"].content\r\n          .querySelector(\".js--header__hat\")\r\n          .cloneNode(true);\r\n      }\r\n    } else {\r\n      if (\r\n        window.innerWidth <= 1024 &&\r\n        document.querySelector(\".header > .js--header__hat\") == undefined\r\n      ) {\r\n        headerHat = templates[\"mobile--header__hat\"].content\r\n          .querySelector(\".js--header__hat\")\r\n          .cloneNode(true);\r\n      } else if (\r\n        window.innerWidth > 1024 &&\r\n        document.querySelector(\".header > .js--header__hat\") == undefined\r\n      ) {\r\n        headerHat = templates[\"desctop--header__hat\"].content\r\n          .querySelector(\".js--header__hat\")\r\n          .cloneNode(true);\r\n      }\r\n    }\r\n\r\n    if (document.querySelector(\".header > .js--header__hat\") != undefined) {\r\n      document.querySelector(\".header > .js--header__hat\").remove();\r\n    }\r\n    document.querySelector(\"header.header\").prepend(headerHat);\r\n  },\r\n  setHeaderFixed: () => {\r\n    if (\r\n      document\r\n        .querySelector(\"header.header\")\r\n        .classList.contains(\"header__fixed\")\r\n    ) {\r\n      document.querySelector(\r\n        \"header.header .header__content\"\r\n      ).style.paddingTop = `${\r\n        (document.querySelector(\"header.header .js--header__hat\").offsetHeight +\r\n          70) *\r\n        2\r\n      }px`;\r\n    } else {\r\n      document.querySelector(\r\n        \"header.header .header__content\"\r\n      ).style.paddingTop = ``;\r\n    }\r\n\r\n    setTimeout(() => {\r\n      window.scrollY + 30 >= document.querySelector(\".js--header__hat\").offsetHeight\r\n        ? document.querySelector(\"header.header\").classList.add(\"header__fixed\")\r\n        : document\r\n            .querySelector(\"header.header\")\r\n            .classList.remove(\"header__fixed\");\r\n    }, 10);\r\n  },\r\n  setMobileDwnldBtn: () => {\r\n    var btn = document.createElement(\"div\");\r\n    var a = document.createElement(\"a\");\r\n    btn.classList.add(\"right-part\");\r\n    a.classList.add(\"btn\");\r\n    a.setAttribute(\"href\", \"/\");\r\n    a.innerText = \"Скачать\";\r\n    btn.append(a);\r\n\r\n    if (\r\n      window.innerWidth <= 600 &&\r\n      document.querySelector(\".header > .mobile--header__hat\") != undefined &&\r\n      document.querySelector(\".header > .mobile--header__hat .right-part\") !=\r\n        undefined\r\n    ) {\r\n      document\r\n        .querySelector(\".header > .mobile--header__hat .right-part\")\r\n        .remove();\r\n\r\n      const li = document.createElement(\"li\");\r\n      li.classList.add(\"navbar-item\", \"navbar-item-btn\");\r\n      li.append(btn.querySelector(\"a\"));\r\n\r\n      document\r\n        .querySelector(\".header > .mobile--header__hat  .navbar\")\r\n        .append(li);\r\n    } else if (\r\n      window.innerWidth > 600 &&\r\n      window.innerWidth <= 1024 &&\r\n      document.querySelector(\".header > .mobile--header__hat\") != undefined &&\r\n      document.querySelector(\r\n        \".header > .mobile--header__hat .navbar .navbar-item-btn\"\r\n      ) != undefined\r\n    ) {\r\n      document\r\n        .querySelector(\r\n          \".header > .mobile--header__hat  .navbar .navbar-item-btn\"\r\n        )\r\n        .remove();\r\n      document.querySelector(\".header > .mobile--header__hat\").prepend(btn);\r\n    }\r\n  },\r\n  switchNavbar: () => {\r\n    if (document.querySelector(\".header .burger-menu\") != undefined) {\r\n      document.querySelector(\".header .burger-menu\").onclick = () => {\r\n        if (window.$.isMobNavbarActive) return;\r\n        window.$.isMobNavbarActive = true;\r\n        if (\r\n          !document\r\n            .querySelector(\".header .burger-menu\")\r\n            .classList.contains(\"burger-menu__active\")\r\n        ) {\r\n          document\r\n            .querySelector(\".header .burger-menu\")\r\n            .classList.add(\"burger-menu__active\");\r\n          document\r\n            .querySelector(\".header .navbar\")\r\n            .classList.add(\"navbar__active\");\r\n          document\r\n            .querySelector(\".header .blur-bg\")\r\n            .classList.add(\"blur-bg__active\");\r\n\r\n          setTimeout(() => {\r\n            window.$.isMobNavbarActive = false;\r\n          }, 650);\r\n        } else {\r\n          document\r\n            .querySelector(\".header .burger-menu\")\r\n            .classList.remove(\"burger-menu__active\");\r\n          document\r\n            .querySelector(\".header .navbar\")\r\n            .classList.remove(\"navbar__active\");\r\n          document\r\n            .querySelector(\".header .burger-menu\")\r\n            .classList.add(\"burger-menu__unactive\");\r\n          setTimeout(() => {\r\n            document\r\n              .querySelector(\".header .burger-menu\")\r\n              .classList.remove(\"burger-menu__unactive\");\r\n\r\n            window.$.isMobNavbarActive = false;\r\n          }, 650);\r\n          document\r\n            .querySelector(\".header .blur-bg\")\r\n            .classList.remove(\"blur-bg__active\");\r\n        }\r\n      };\r\n    }\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://gulp/./src/js/header.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./src/js/templates.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n\r\n\r\n\r\nconsole.log(_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\nwindow.onload = () => {\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setHeader(_templates_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setMobileDwnldBtn();\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchNavbar();\r\n  // header.setHeaderFixed();\r\n};\r\nwindow.onresize = () => {\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setHeader(_templates_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setMobileDwnldBtn();\r\n  _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchNavbar();\r\n}\r\nwindow.onscroll = () => {\r\n  console.log(window.scrollY);\r\n  // header.setHeaderFixed();\r\n}\n\n//# sourceURL=webpack://gulp/./src/js/main.js?");

/***/ }),

/***/ "./src/js/templates.js":
/*!*****************************!*\
  !*** ./src/js/templates.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar templates = new Array();\r\n\r\ndocument.querySelectorAll(\"template\").forEach((template) => {\r\n  templates[template.getAttribute(\"id\")] = template;\r\n  template.remove();\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (templates);\n\n//# sourceURL=webpack://gulp/./src/js/templates.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/header.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/templates.js");
/******/ 	
/******/ })()
;