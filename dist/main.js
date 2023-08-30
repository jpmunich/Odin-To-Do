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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQrRztBQUMxRTtBQUNyQzs7QUFFZTtBQUNmLHNCQUFzQixpRUFBa0I7QUFDeEMsbUJBQW1CLGlFQUFrQjtBQUNyQzs7QUFFQSx1QkFBdUIsZ0VBQWlCO0FBQ3hDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjtBQUMzQyx5QkFBeUIsaUVBQWtCOztBQUUzQyxJQUFJLGdFQUFpQjs7QUFFckIsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxzRUFBdUI7QUFDM0IsSUFBSSxnRUFBaUI7QUFDckIsSUFBSSxzRUFBdUI7O0FBRTNCLDBCQUEwQiw0REFBYTtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRXNDOzs7Ozs7O1VDdER2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNFOztBQUV4QyxpREFBZ0I7QUFDaEIsaURBQVc7QUFDWCxpREFBVztBQUNYLGlEQUFXO0FBQ1gsaURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSAnLi90YXNrLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQodGV4dFR5cGUsIHRleHQsIGNsYXNzTmFtZSwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGV4dFR5cGUpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljRWxlbWVudCh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoaW1nU3JjLCB0ZXh0LCBwYXJlbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBjaGlsZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGlsZEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IGNoaWxkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaGlsZFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIGNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkSWNvbik7XG4gICAgY2hpbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrKHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgdGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJ1xuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW1nKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGV4dCwgcGFyZW50Tm9kZSkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVwYWdlLWJ1bGsnKS5hcHBlbmRDaGlsZChwYXJlbnROb2RlKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUJhc2ljRWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZVRhc2sgfTsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZUJhc2ljRWxlbWVudCB9IGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tIFwiLi90YXNrXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRpdkltZyA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnaW1nJywgY29udGFpbmVyLCAnaGVhZGluZy1pbWcnKTtcbiAgICBkaXZJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2hlYWRlci1jaGVjay5zdmcnO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZVRleHRFbGVtZW50KCdoMScsICdUbyBEbyBMaXN0JywgJ21haW4taGVhZGVyJywgY29udGFpbmVyKTtcbiAgICBjb25zdCBob21lcGFnZUJvZHkgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdob21lcGFnZS1ib2R5Jyk7XG4gICAgY29uc3QgaG9tZXBhZ2VTaWRlID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1zaWRlJyk7XG4gICAgY29uc3QgaG9tZXBhZ2VCdWxrID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1idWxrJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnSW5ib3gnLCAnaG9tZXBhZ2UtYnVsay1oZWFkaW5nJywgaG9tZXBhZ2VCdWxrKTtcblxuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9pbmJveC5zdmcnLCAnSW5ib3gnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jbGlwYm9hcmQuc3ZnJywgJ1RvZGF5JywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvY2FsZW5kYXItMi5zdmcnLCAnVGhpcyBXZWVrJywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnUHJvamVjdHMnLCAncHJvamVjdC1oZWFkaW5nJywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnLCAnQWRkIFByb2plY3QnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2soaG9tZXBhZ2VCdWxrKTtcbn1cbiIsImxldCBhbGxUYXNrcyA9IFtdO1xubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIHRhc2tzfTtcbn1cblxuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUpO1xuICAgICAgICBpZiAoIWlzSW5Qcm9qZWN0KG5ld1Rhc2sudGl0bGUpKSBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGFsbFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNJblByb2plY3QgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKHRpdGxlKSkgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1InKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5nZW5lcmF0ZUhvbWVQYWdlKCk7XG50YXNrTWFuYWdlci5hZGRUYXNrKFwiVGFzayBPbmVcIik7XG50YXNrTWFuYWdlci5hZGRUYXNrKFwiVGFzayBUd29cIik7XG50YXNrTWFuYWdlci5hZGRUYXNrKFwiVGFzayBUaHJlZVwiKTtcbnRhc2tNYW5hZ2VyLnJlbW92ZVRhc2soJ1Rhc2snKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==