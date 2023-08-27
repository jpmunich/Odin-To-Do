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
/* harmony export */   createAddTask: () => (/* binding */ createAddTask),
/* harmony export */   createBasicElement: () => (/* binding */ createBasicElement),
/* harmony export */   createHomePageSideChild: () => (/* binding */ createHomePageSideChild),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   createTextElement: () => (/* binding */ createTextElement)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


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

function createAddTask(parent) {
    const task = document.createElement('button');
    task.classList.add('add-task');
    const taskImg = document.createElement('img');
    taskImg.src = '../dist/images/plus.svg'
    const taskText = document.createElement('p');
    taskText.innerText = 'Add Task';
    task.appendChild(taskImg);
    task.appendChild(taskText);
    parent.appendChild(task);
    return task;
}

function createTask(text, parentNode) {
    const task = document.createElement('div');
    task.classList.add('task');
    const taskText = document.createElement('p');
    taskText.innerText = text;
    task.appendChild(taskText);
    parentNode.appendChild(task);
    document.querySelector('.homepage-bulk').appendChild(parentNode);
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");


const content = document.getElementById('content');

function generateHomePage() {
    const container = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', content, 'heading-container');
    const divImg = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('img', container, 'heading-img');
    divImg.src = '../dist/images/header-check.svg';

    const mainHeader = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h1', 'To Do List', 'main-header', container);
    const homepageBody = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', content, 'homepage-body');
    const homepageSide = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', homepageBody, 'homepage-side');
    const homepageBulk = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createBasicElement)('div', homepageBody, 'homepage-bulk');

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h2', 'Inbox', 'homepage-bulk-heading', homepageBulk);

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/inbox.svg', 'Inbox', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/clipboard.svg', 'Today', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h2', 'Projects', 'project-heading', homepageSide);
    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/plus.svg', 'Add Project', homepageSide);

    const addTaskButton = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createAddTask)(homepageBulk);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTasks: () => (/* binding */ allTasks),
/* harmony export */   projectManager: () => (/* binding */ projectManager),
/* harmony export */   taskManager: () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var _UIController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIController.js */ "./src/UIController.js");


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
        (0,_UIController_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTask.title);
    }
    
    function removeTask(task) {
        const removedIndex = task;
    
        allTasks.splice(task, 1);
        allTasks.forEach(todo => {if (todo.index > 0 && todo.index > removedIndex) todo.index -= 1});
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
    function addProject(priority) {
        const newProject = project('Project One');
        allProjects.push(newProject);

        const projectTasks = allTasks.filter(task => task.priority = priority);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQrRztBQUMxRTtBQUNyQzs7QUFFZTtBQUNmLHNCQUFzQixpRUFBa0I7QUFDeEMsbUJBQW1CLGlFQUFrQjtBQUNyQzs7QUFFQSx1QkFBdUIsZ0VBQWlCO0FBQ3hDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjtBQUMzQyx5QkFBeUIsaUVBQWtCOztBQUUzQyxJQUFJLGdFQUFpQjs7QUFFckIsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxzRUFBdUI7O0FBRTNCLDBCQUEwQiw0REFBYTtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpRUFBaUU7QUFDbkc7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDBFQUEwRTtBQUNsSDtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVnRDs7Ozs7Ozs7VUNqRGpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ2tCOztBQUV4RCxpREFBZ0I7O0FBRWhCLGlEQUFXO0FBQ1gsb0RBQWM7QUFDZCxvREFBYztBQUNkLG9EQUFjO0FBQ2Qsb0RBQWM7QUFDZCxvREFBYztBQUNkLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gJy4vdGFzay5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KHRleHRUeXBlLCB0ZXh0LCBjbGFzc05hbWUsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRleHRUeXBlKTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYXNpY0VsZW1lbnQodHlwZSwgcGFyZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKGltZ1NyYywgdGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgY2hpbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGlsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLWNoaWxkJyk7XG4gICAgY29uc3QgY2hpbGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hpbGRJY29uLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBjaGlsZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpbGRUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZEljb24pO1xuICAgIGNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkVGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFzayhwYXJlbnQpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZydcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRleHQsIHBhcmVudE5vZGUpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lcGFnZS1idWxrJykuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVCYXNpY0VsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrIH07IiwiaW1wb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSBcIi4vdGFza1wiO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnaGVhZGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBkaXZJbWcgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2ltZycsIGNvbnRhaW5lciwgJ2hlYWRpbmctaW1nJyk7XG4gICAgZGl2SW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9oZWFkZXItY2hlY2suc3ZnJztcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVUZXh0RWxlbWVudCgnaDEnLCAnVG8gRG8gTGlzdCcsICdtYWluLWhlYWRlcicsIGNvbnRhaW5lcik7XG4gICAgY29uc3QgaG9tZXBhZ2VCb2R5ID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnaG9tZXBhZ2UtYm9keScpO1xuICAgIGNvbnN0IGhvbWVwYWdlU2lkZSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgaG9tZXBhZ2VCb2R5LCAnaG9tZXBhZ2Utc2lkZScpO1xuICAgIGNvbnN0IGhvbWVwYWdlQnVsayA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgaG9tZXBhZ2VCb2R5LCAnaG9tZXBhZ2UtYnVsaycpO1xuXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoJ2gyJywgJ0luYm94JywgJ2hvbWVwYWdlLWJ1bGstaGVhZGluZycsIGhvbWVwYWdlQnVsayk7XG5cbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvaW5ib3guc3ZnJywgJ0luYm94JywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvY2xpcGJvYXJkLnN2ZycsICdUb2RheScsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NhbGVuZGFyLTIuc3ZnJywgJ1RoaXMgV2VlaycsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoJ2gyJywgJ1Byb2plY3RzJywgJ3Byb2plY3QtaGVhZGluZycsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJywgJ0FkZCBQcm9qZWN0JywgaG9tZXBhZ2VTaWRlKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVBZGRUYXNrKGhvbWVwYWdlQnVsayk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSAnLi9VSUNvbnRyb2xsZXIuanMnO1xuXG5sZXQgYWxsVGFza3MgPSBbXTtcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpID0+IHtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QsIGluZGV4IH07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSB9O1xufVxuXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2soJ1Rhc2snLCAnVGhpcyBpcyBhIHRhc2snLCAnMTkgQXVndXN0IDIwMjMnLCAnRmlyc3QnLCAnU29tZSBOb3RlcycsICdFdmVyeXRoaW5nIENoZWNrZWQnKTtcbiAgICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgbmV3VGFzay5pbmRleCA9IGFsbFRhc2tzLmluZGV4T2YoYWxsVGFza3NbYWxsVGFza3MubGVuZ3RoIC0gIDFdKTtcbiAgICAgICAgY3JlYXRlVGFzayhuZXdUYXNrLnRpdGxlKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJbmRleCA9IHRhc2s7XG4gICAgXG4gICAgICAgIGFsbFRhc2tzLnNwbGljZSh0YXNrLCAxKTtcbiAgICAgICAgYWxsVGFza3MuZm9yRWFjaCh0b2RvID0+IHtpZiAodG9kby5pbmRleCA+IDAgJiYgdG9kby5pbmRleCA+IHJlbW92ZWRJbmRleCkgdG9kby5pbmRleCAtPSAxfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QoJ1Byb2plY3QgT25lJyk7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcmlvcml0eSA9IHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEluZGV4ID0gcHJvamVjdDtcblxuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UocHJvamVjdCwgMSk7XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7aWYgKHByb2plY3QuaW5kZXggPiAwICYmIHByb2plY3QuaW5kZXggPiByZW1vdmVkSW5kZXgpIHByb2plY3QuaW5kZXggLT0gMX0pO1xuICAgIH1cbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIsIGFsbFRhc2tzIH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi90YXNrLmpzJztcblxuZ2VuZXJhdGVIb21lUGFnZSgpO1xuXG50YXNrTWFuYWdlci5hZGRUYXNrKCk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KCdGaXJzdCcpO1xucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCgnRmlyc3QnKTtcbnByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QoMCk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KCdGaXJzdCcpO1xucHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdCgxKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoJ0ZpcnN0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=