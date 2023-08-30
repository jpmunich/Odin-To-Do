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
    const childContainer = document.createElement('div');
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

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectManager: () => (/* binding */ projectManager),
/* harmony export */   taskManager: () => (/* binding */ taskManager)
/* harmony export */ });
let allTasks = [];
let allProjects = [];

const task = (title) => {
    return {title};
}

const project = (title) => {
    let tasks = [];
    return {title, tasks};
}

const taskManager = (() => {
    const addTask = (title) => {
        const newTask = task(title);
        if (!isInProject(newTask.title)) allTasks.push(newTask);
        else console.log('ERROR');
        console.log(allTasks)
    }

    const removeTask = (title) => {
        allTasks = allTasks.filter((task) => task.title !== title);
        console.log(allTasks)
    }

    const getTask = (taskTitle) => {
        return allTasks.filter((task) => task.title === taskTitle);
    }

    const isInProject = (taskTitle) => {
        return allTasks.some((task) => task.title === taskTitle);
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
    const addProject = (title) => {
        const newProject = project(title);
        if (!projectExists(title)) allProjects.push(newProject);
        else console.log('ERROR');
    }

    const removeProject = (projectTitle) => {
        allProjects = allProjects.filter((project) => project.title === projectTitle);
    }
    
    const projectExists = (projectTitle) => {
        return allProjects.some((project) => project.title === projectTitle);
    }

    return { addProject, removeProject };
})();



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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
_task_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask("Task One");
_task_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask("Task Two");
_task_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask("Task Three");
_task_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.removeTask('Task');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNEc7QUFDNUc7O0FBRWU7QUFDZixzQkFBc0IsaUVBQWtCO0FBQ3hDLG1CQUFtQixpRUFBa0I7QUFDckM7O0FBRUEsdUJBQXVCLGdFQUFpQjtBQUN4Qyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjs7QUFFM0MsSUFBSSxnRUFBaUI7O0FBRXJCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksc0VBQXVCOztBQUUzQixJQUFJLHlEQUFVO0FBQ2Q7O0FBRUE7QUFDQSxJQUFJLHNFQUF1QjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7VUNwREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRTs7QUFFeEMsaURBQWdCO0FBQ2hCLGlEQUFXO0FBQ1gsaURBQVc7QUFDWCxpREFBVztBQUNYLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hpbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IGNoaWxkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWxkSWNvbi5zcmMgPSBpbWdTcmM7XG4gICAgY29uc3QgY2hpbGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoaWxkVGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgY2hpbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRJY29uKTtcbiAgICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2socGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGNvbnN0IHRhc2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZydcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQmFzaWNFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlVGFzayB9OyIsImltcG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlVGFzaywgY3JlYXRlQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vVUlDb250cm9sbGVyXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRpdkltZyA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnaW1nJywgY29udGFpbmVyLCAnaGVhZGluZy1pbWcnKTtcbiAgICBkaXZJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2hlYWRlci1jaGVjay5zdmcnO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZVRleHRFbGVtZW50KCdoMScsICdPZGluIFRvIERvIExpc3QnLCAnbWFpbi1oZWFkZXInLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGhvbWVwYWdlQm9keSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hvbWVwYWdlLWJvZHknKTtcbiAgICBjb25zdCBob21lcGFnZVNpZGUgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLXNpZGUnKTtcbiAgICBjb25zdCBob21lcGFnZUJ1bGsgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLWJ1bGsnKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdJbmJveCcsICdob21lcGFnZS1idWxrLWhlYWRpbmcnLCBob21lcGFnZUJ1bGspO1xuXG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NsaXBib2FyZC5zdmcnLCAnVG9kYXknLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jYWxlbmRhci0yLnN2ZycsICdUaGlzIFdlZWsnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdQcm9qZWN0cycsICdwcm9qZWN0LWhlYWRpbmcnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZycsICdBZGQgUHJvamVjdCcsIGhvbWVwYWdlU2lkZSk7XG5cbiAgICBjcmVhdGVUYXNrKGhvbWVwYWdlQnVsayk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoKVxufSIsImxldCBhbGxUYXNrcyA9IFtdO1xubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIHRhc2tzfTtcbn1cblxuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUpO1xuICAgICAgICBpZiAoIWlzSW5Qcm9qZWN0KG5ld1Rhc2sudGl0bGUpKSBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGFsbFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNJblByb2plY3QgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKHRpdGxlKSkgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1InKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZ2VuZXJhdGVIb21lUGFnZSgpO1xudGFza01hbmFnZXIuYWRkVGFzayhcIlRhc2sgT25lXCIpO1xudGFza01hbmFnZXIuYWRkVGFzayhcIlRhc2sgVHdvXCIpO1xudGFza01hbmFnZXIuYWRkVGFzayhcIlRhc2sgVGhyZWVcIik7XG50YXNrTWFuYWdlci5yZW1vdmVUYXNrKCdUYXNrJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=