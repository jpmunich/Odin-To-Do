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
/* harmony export */   createProject: () => (/* binding */ createProject),
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
    const project = document.createElement('button');
    project.classList.add('side-child');
    const projectIcon = document.createElement('img');
    projectIcon.src = imgSrc;
    const projectText = document.createElement('p');
    projectText.innerText = text;

    project.appendChild(projectIcon);
    project.appendChild(projectText);
    parent.appendChild(project);

    return project;
}

function createProject(title, parent) {
    const project = document.createElement('button');
    project.classList.add('side-child');
    const projectIcon = document.createElement('img');
    projectIcon.src = '../dist/images/check-square.svg';
    const projectText = document.createElement('p');
    projectText.innerText = title;

    project.appendChild(projectIcon);
    project.appendChild(projectText);
    parent.appendChild(project);

    return project;
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

function createTask(title, parent, project = undefined) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskText = document.createElement('p');
    taskText.innerText = title;

    const removeButton = document.createElement('button');
    removeButton.classList.add('task-remove-button');
    removeButton.addEventListener('click', () => {
        _task_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.removeTask(title);
        task.remove();
    })
    removeButton.innerText = 'Remove';

    task.appendChild(taskText);
    task.appendChild(removeButton);

    parent.appendChild(task);
    return task;
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
    const addProjectButton = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/plus.svg', 'Add Project', homepageSide);

    const addTaskButton = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createAddTask)(homepageBulk);
    addTaskButton.addEventListener('click', (taskTitle, projectToAddTo = undefined) => {
        taskTitle = prompt();
        projectToAddTo = prompt();

        if (taskTitle !== '') {
            if (!_task__WEBPACK_IMPORTED_MODULE_1__.taskManager.isInProject(taskTitle)) (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskTitle, homepageBulk);
            _task__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask(taskTitle, projectToAddTo);
        }
    })

    addProjectButton.addEventListener('click', (projectTitle) => {
        projectTitle = prompt();

        if (projectTitle !== '') {
            if (!_task__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectExists(projectTitle)) (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle, homepageSide);
            _task__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(projectTitle);
        }
    })
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
    const addTask = (title, projectTitle = undefined) => {
        const newTask = task(title);
        if (!isInProject(newTask.title)) {
            allTasks.push(newTask); 
            if (projectManager.projectExists(projectTitle) && !(projectTitle === undefined)) {
                projectManager.addTaskToProject(newTask, projectManager.getProject(projectTitle));
            }
        } else console.log('ERROR');

        console.log(allTasks)
    }

    const removeTask = (title) => {
        allTasks = allTasks.filter((task) => task.title !== title);
        allProjects.forEach(project => {
            project.tasks = project.tasks.filter((task) => task.title !== title);
        })
        console.log(allTasks)
    }

    const getTask = (taskTitle) => {
        return allTasks.filter((task) => task.title === taskTitle);
    }

    const isInProject = (taskTitle) => {
        return allTasks.some((task) => task.title === taskTitle);
    }

    return { addTask, removeTask, isInProject };
})();

const projectManager = (() => {
    const addProject = (title) => {
        const newProject = project(title);
        if (!projectExists(title)) allProjects.push(newProject);
        else console.log('ERROR');
        console.log(allProjects);
    }

    const addTaskToProject = (task, project) => {
        project[0].tasks.push(task);
    }

    const removeProject = (projectTitle) => {
        allProjects = allProjects.filter((project) => project.title === projectTitle);
        console.log(allProjects);
    }

    const getProject = (projectTitle) => {
        return allProjects.filter((project) => project.title === projectTitle);
    }
    
    const projectExists = (projectTitle) => {
        return allProjects.some((project) => project.title === projectTitle);
    }

    return { addProject, addTaskToProject, removeProject, getProject, projectExists };
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjBJO0FBQ3JGO0FBQ3JEOztBQUVlO0FBQ2Ysc0JBQXNCLGlFQUFrQjtBQUN4QyxtQkFBbUIsaUVBQWtCO0FBQ3JDOztBQUVBLHVCQUF1QixnRUFBaUI7QUFDeEMseUJBQXlCLGlFQUFrQjtBQUMzQyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7O0FBRTNDLElBQUksZ0VBQWlCOztBQUVyQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLGdFQUFpQjtBQUNyQiw2QkFBNkIsc0VBQXVCOztBQUVwRCwwQkFBMEIsNERBQWE7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDhDQUFXLHlCQUF5Qix5REFBVTtBQUMvRCxZQUFZLDhDQUFXO0FBQ3ZCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFjLDhCQUE4Qiw0REFBYTtBQUMxRSxZQUFZLGlEQUFjO0FBQzFCO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFc0M7Ozs7Ozs7VUN4RXZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ2tCOztBQUV4RCxpREFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9jaGVjay1zcXVhcmUuc3ZnJztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrKHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgdGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJ1xuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW1nKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIHBhcmVudCwgcHJvamVjdCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmVtb3ZlLWJ1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01hbmFnZXIucmVtb3ZlVGFzayh0aXRsZSk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgfSlcbiAgICByZW1vdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1JlbW92ZSc7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVCYXNpY0VsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrIH07IiwiaW1wb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrLCBjcmVhdGVCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Rhc2tcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hlYWRpbmctY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGl2SW1nID0gY3JlYXRlQmFzaWNFbGVtZW50KCdpbWcnLCBjb250YWluZXIsICdoZWFkaW5nLWltZycpO1xuICAgIGRpdkltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvaGVhZGVyLWNoZWNrLnN2Zyc7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gY3JlYXRlVGV4dEVsZW1lbnQoJ2gxJywgJ1RvIERvIExpc3QnLCAnbWFpbi1oZWFkZXInLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGhvbWVwYWdlQm9keSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hvbWVwYWdlLWJvZHknKTtcbiAgICBjb25zdCBob21lcGFnZVNpZGUgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLXNpZGUnKTtcbiAgICBjb25zdCBob21lcGFnZUJ1bGsgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLWJ1bGsnKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdJbmJveCcsICdob21lcGFnZS1idWxrLWhlYWRpbmcnLCBob21lcGFnZUJ1bGspO1xuXG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NsaXBib2FyZC5zdmcnLCAnVG9kYXknLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jYWxlbmRhci0yLnN2ZycsICdUaGlzIFdlZWsnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdQcm9qZWN0cycsICdwcm9qZWN0LWhlYWRpbmcnLCBob21lcGFnZVNpZGUpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnLCAnQWRkIFByb2plY3QnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2soaG9tZXBhZ2VCdWxrKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRhc2tUaXRsZSwgcHJvamVjdFRvQWRkVG8gPSB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgdGFza1RpdGxlID0gcHJvbXB0KCk7XG4gICAgICAgIHByb2plY3RUb0FkZFRvID0gcHJvbXB0KCk7XG5cbiAgICAgICAgaWYgKHRhc2tUaXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICghdGFza01hbmFnZXIuaXNJblByb2plY3QodGFza1RpdGxlKSkgY3JlYXRlVGFzayh0YXNrVGl0bGUsIGhvbWVwYWdlQnVsayk7XG4gICAgICAgICAgICB0YXNrTWFuYWdlci5hZGRUYXNrKHRhc2tUaXRsZSwgcHJvamVjdFRvQWRkVG8pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IHByb21wdCgpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RNYW5hZ2VyLnByb2plY3RFeGlzdHMocHJvamVjdFRpdGxlKSkgY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUsIGhvbWVwYWdlU2lkZSk7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgICAgIH1cbiAgICB9KVxufSIsImxldCBhbGxUYXNrcyA9IFtdO1xubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIHJldHVybiB7dGl0bGUsIHRhc2tzfTtcbn1cblxuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIHByb2plY3RUaXRsZSA9IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSk7XG4gICAgICAgIGlmICghaXNJblByb2plY3QobmV3VGFzay50aXRsZSkpIHtcbiAgICAgICAgICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7IFxuICAgICAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RFeGlzdHMocHJvamVjdFRpdGxlKSAmJiAhKHByb2plY3RUaXRsZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFRhc2tUb1Byb2plY3QobmV3VGFzaywgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUicpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSW5Qcm9qZWN0ID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVGFza3Muc29tZSgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCByZW1vdmVUYXNrLCBpc0luUHJvamVjdCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUpO1xuICAgICAgICBpZiAoIXByb2plY3RFeGlzdHModGl0bGUpKSBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RbMF0udGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3QsIHByb2plY3RFeGlzdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmdlbmVyYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=