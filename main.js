/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UIController.js":
/*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBasicElement: () => (/* binding */ createBasicElement),
/* harmony export */   createHomePageSideChild: () => (/* binding */ createHomePageSideChild),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });
function createTextElement(textType, text, className, parent) {
    const element = document.createElement(textType);
    element.innerText = text;
    element.classList.add(className);
    parent.appendChild(element);
    return element;
}

function createBasicElement(type, parent, className) {
    const element = document.createElement(type);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
}

function createHomePageSideChild(imgSrc, text, parent) {
    const childContainer = document.createElement('button');
    childContainer.classList.add('side-child');
    const childIcon = document.createElement('img');
    childIcon.src = imgSrc;
    const childText = document.createElement('p');
    childText.innerText = text;

    childContainer.appendChild(childIcon);
    childContainer.appendChild(childText);
    parent.appendChild(childContainer);
}

function createTask(parent) {
    const task = document.createElement('div');
    task.classList.add('task');
    const taskImg = document.createElement('img');
    taskImg.src = '../dist/images/plus.svg'
    const taskText = document.createElement('p');
    taskText.innerText = 'Add Task';
    task.appendChild(taskImg);
    task.appendChild(taskText);
    parent.appendChild(task);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHomePage)
/* harmony export */ });
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIController */ "./src/UIController.js");

const content = document.getElementById('content');

function generateHomePage() {
    const container = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', content, 'heading-container');
    const divImg = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('img', container, 'heading-img');
    divImg.src = '../dist/images/header-check.svg';

    const mainHeader = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h1', 'Odin To Do List', 'main-header', container);
    const homepageBody = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', content, 'homepage-body');
    const homepageSide = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', homepageBody, 'homepage-side');
    const homepageBulk = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', homepageBody, 'homepage-bulk');

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h2', 'Inbox', 'homepage-bulk-heading', homepageBulk);

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/inbox.svg', 'Inbox', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/clipboard.svg', 'Today', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h2', 'Projects', 'project-heading', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/plus.svg', 'Add Project', homepageSide);

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTask)(homepageBulk);
}

function addProject() {
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)()
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNEc7QUFDNUc7O0FBRWU7QUFDZixzQkFBc0IsaUVBQWtCO0FBQ3hDLG1CQUFtQixpRUFBa0I7QUFDckM7O0FBRUEsdUJBQXVCLGdFQUFpQjtBQUN4Qyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjs7QUFFM0MsSUFBSSxnRUFBaUI7O0FBRXJCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksc0VBQXVCOztBQUUzQixJQUFJLHlEQUFVO0FBQ2Q7O0FBRUE7QUFDQSxJQUFJLHNFQUF1QjtBQUMzQjs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLGlEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hpbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IGNoaWxkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWxkSWNvbi5zcmMgPSBpbWdTcmM7XG4gICAgY29uc3QgY2hpbGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoaWxkVGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgY2hpbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRJY29uKTtcbiAgICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2socGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGNvbnN0IHRhc2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZydcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQmFzaWNFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlVGFzayB9OyIsImltcG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlVGFzaywgY3JlYXRlQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vVUlDb250cm9sbGVyXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRpdkltZyA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnaW1nJywgY29udGFpbmVyLCAnaGVhZGluZy1pbWcnKTtcbiAgICBkaXZJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2hlYWRlci1jaGVjay5zdmcnO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZVRleHRFbGVtZW50KCdoMScsICdPZGluIFRvIERvIExpc3QnLCAnbWFpbi1oZWFkZXInLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGhvbWVwYWdlQm9keSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hvbWVwYWdlLWJvZHknKTtcbiAgICBjb25zdCBob21lcGFnZVNpZGUgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLXNpZGUnKTtcbiAgICBjb25zdCBob21lcGFnZUJ1bGsgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLWJ1bGsnKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdJbmJveCcsICdob21lcGFnZS1idWxrLWhlYWRpbmcnLCBob21lcGFnZUJ1bGspO1xuXG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NsaXBib2FyZC5zdmcnLCAnVG9kYXknLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jYWxlbmRhci0yLnN2ZycsICdUaGlzIFdlZWsnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdQcm9qZWN0cycsICdwcm9qZWN0LWhlYWRpbmcnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZycsICdBZGQgUHJvamVjdCcsIGhvbWVwYWdlU2lkZSk7XG5cbiAgICBjcmVhdGVUYXNrKGhvbWVwYWdlQnVsayk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuXG5nZW5lcmF0ZUhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==