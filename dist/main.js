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

const task = (title, description, dueDate, priority, notes, checklist) => {
    let index = null;
    return { title, description, dueDate, priority, notes, checklist, index };
}

const project = (title) => {
    return { title };
}

const taskManager = (() => {
    function addTask() {
        const newTask = task('Task', 'This is a task', '19 August 2023', 'First', 'Some Notes', 'Everything Checked');
        allTasks.push(newTask);
        newTask.index = allTasks.indexOf(allTasks[allTasks.length -  1]);
        console.log(allTasks)
    }
    
    function removeTask(task) {
        const removedIndex = task;
    
        allTasks.splice(task, 1);
        allTasks.forEach(todo => {if (todo.index > 0 && todo.index > removedIndex) todo.index -= 1});
        console.log(allTasks)
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
    function addProject(priority) {
        const newProject = project('Project One');
        allProjects.push(newProject);

        const projectTasks = allTasks.filter(task => task.priority = priority);
        console.log(projectTasks);
        console.log(allProjects)
    }

    function removeProject(project) {
        const removedIndex = project;

        allProjects.splice(project, 1);
        allProjects.forEach(project => {if (project.index > 0 && project.index > removedIndex) project.index -= 1});
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

_task_js__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask();
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('First');
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('First');
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.removeProject(0);
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('First');
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.removeProject(1);
_task_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('First');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNEc7QUFDNUc7O0FBRWU7QUFDZixzQkFBc0IsaUVBQWtCO0FBQ3hDLG1CQUFtQixpRUFBa0I7QUFDckM7O0FBRUEsdUJBQXVCLGdFQUFpQjtBQUN4Qyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjs7QUFFM0MsSUFBSSxnRUFBaUI7O0FBRXJCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksc0VBQXVCO0FBQzNCLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksc0VBQXVCOztBQUUzQixJQUFJLHlEQUFVO0FBQ2Q7O0FBRUE7QUFDQSxJQUFJLHNFQUF1QjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUVBQWlFO0FBQ25HO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QywwRUFBMEU7QUFDbEg7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFc0M7Ozs7Ozs7O1VDbER2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNrQjs7QUFFeEQsaURBQWdCOztBQUVoQixpREFBVztBQUNYLG9EQUFjO0FBQ2Qsb0RBQWM7QUFDZCxvREFBYztBQUNkLG9EQUFjO0FBQ2Qsb0RBQWM7QUFDZCxvREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQodGV4dFR5cGUsIHRleHQsIGNsYXNzTmFtZSwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGV4dFR5cGUpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljRWxlbWVudCh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoaW1nU3JjLCB0ZXh0LCBwYXJlbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoaWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBjaGlsZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGlsZEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IGNoaWxkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaGlsZFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIGNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkSWNvbik7XG4gICAgY2hpbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBjb25zdCB0YXNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0ltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbWcpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUJhc2ljRWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZVRhc2sgfTsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZVRhc2ssIGNyZWF0ZUJhc2ljRWxlbWVudCB9IGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnaGVhZGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBkaXZJbWcgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2ltZycsIGNvbnRhaW5lciwgJ2hlYWRpbmctaW1nJyk7XG4gICAgZGl2SW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9oZWFkZXItY2hlY2suc3ZnJztcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVUZXh0RWxlbWVudCgnaDEnLCAnT2RpbiBUbyBEbyBMaXN0JywgJ21haW4taGVhZGVyJywgY29udGFpbmVyKTtcbiAgICBjb25zdCBob21lcGFnZUJvZHkgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdob21lcGFnZS1ib2R5Jyk7XG4gICAgY29uc3QgaG9tZXBhZ2VTaWRlID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1zaWRlJyk7XG4gICAgY29uc3QgaG9tZXBhZ2VCdWxrID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1idWxrJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnSW5ib3gnLCAnaG9tZXBhZ2UtYnVsay1oZWFkaW5nJywgaG9tZXBhZ2VCdWxrKTtcblxuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9pbmJveC5zdmcnLCAnSW5ib3gnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jbGlwYm9hcmQuc3ZnJywgJ1RvZGF5JywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvY2FsZW5kYXItMi5zdmcnLCAnVGhpcyBXZWVrJywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnUHJvamVjdHMnLCAncHJvamVjdC1oZWFkaW5nJywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnLCAnQWRkIFByb2plY3QnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY3JlYXRlVGFzayhob21lcGFnZUJ1bGspO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKClcbn0iLCJsZXQgYWxsVGFza3MgPSBbXTtcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpID0+IHtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QsIGluZGV4IH07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSB9O1xufVxuXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2soJ1Rhc2snLCAnVGhpcyBpcyBhIHRhc2snLCAnMTkgQXVndXN0IDIwMjMnLCAnRmlyc3QnLCAnU29tZSBOb3RlcycsICdFdmVyeXRoaW5nIENoZWNrZWQnKTtcbiAgICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgbmV3VGFzay5pbmRleCA9IGFsbFRhc2tzLmluZGV4T2YoYWxsVGFza3NbYWxsVGFza3MubGVuZ3RoIC0gIDFdKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICAgICAgICBjb25zdCByZW1vdmVkSW5kZXggPSB0YXNrO1xuICAgIFxuICAgICAgICBhbGxUYXNrcy5zcGxpY2UodGFzaywgMSk7XG4gICAgICAgIGFsbFRhc2tzLmZvckVhY2godG9kbyA9PiB7aWYgKHRvZG8uaW5kZXggPiAwICYmIHRvZG8uaW5kZXggPiByZW1vdmVkSW5kZXgpIHRvZG8uaW5kZXggLT0gMX0pO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCByZW1vdmVUYXNrIH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcmlvcml0eSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCgnUHJvamVjdCBPbmUnKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEluZGV4ID0gcHJvamVjdDtcblxuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UocHJvamVjdCwgMSk7XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7aWYgKHByb2plY3QuaW5kZXggPiAwICYmIHByb2plY3QuaW5kZXggPiByZW1vdmVkSW5kZXgpIHByb2plY3QuaW5kZXggLT0gMX0pO1xuICAgIH1cbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5nZW5lcmF0ZUhvbWVQYWdlKCk7XG5cbnRhc2tNYW5hZ2VyLmFkZFRhc2soKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoJ0ZpcnN0Jyk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KCdGaXJzdCcpO1xucHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdCgwKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoJ0ZpcnN0Jyk7XG5wcm9qZWN0TWFuYWdlci5yZW1vdmVQcm9qZWN0KDEpO1xucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCgnRmlyc3QnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==