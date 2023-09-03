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

        if (!_task__WEBPACK_IMPORTED_MODULE_1__.taskManager.isInProject(taskTitle)) (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskTitle, homepageBulk);
        _task__WEBPACK_IMPORTED_MODULE_1__.taskManager.addTask(taskTitle, projectToAddTo);
    })

    addProjectButton.addEventListener('click', (projectTitle) => {
        projectTitle = prompt();

        if (!_task__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectExists(projectTitle)) (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle, homepageSide);
        _task__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(projectTitle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRjBJO0FBQ3JGO0FBQ3JEOztBQUVlO0FBQ2Ysc0JBQXNCLGlFQUFrQjtBQUN4QyxtQkFBbUIsaUVBQWtCO0FBQ3JDOztBQUVBLHVCQUF1QixnRUFBaUI7QUFDeEMseUJBQXlCLGlFQUFrQjtBQUMzQyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7O0FBRTNDLElBQUksZ0VBQWlCOztBQUVyQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLHNFQUF1QjtBQUMzQixJQUFJLGdFQUFpQjtBQUNyQiw2QkFBNkIsc0VBQXVCOztBQUVwRCwwQkFBMEIsNERBQWE7QUFDdkM7QUFDQTtBQUNBOztBQUVBLGFBQWEsOENBQVcseUJBQXlCLHlEQUFVO0FBQzNELFFBQVEsOENBQVc7QUFDbkIsS0FBSzs7QUFFTDtBQUNBOztBQUVBLGFBQWEsaURBQWMsOEJBQThCLDREQUFhO0FBQ3RFLFFBQVEsaURBQWM7QUFDdEIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFc0M7Ozs7Ozs7VUN4RXZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ2tCOztBQUV4RCxpREFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9jaGVjay1zcXVhcmUuc3ZnJztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrKHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgdGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJ1xuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW1nKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIHBhcmVudCwgcHJvamVjdCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmVtb3ZlLWJ1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01hbmFnZXIucmVtb3ZlVGFzayh0aXRsZSk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgfSlcbiAgICByZW1vdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1JlbW92ZSc7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVCYXNpY0VsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrIH07IiwiaW1wb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrLCBjcmVhdGVCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Rhc2tcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hlYWRpbmctY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGl2SW1nID0gY3JlYXRlQmFzaWNFbGVtZW50KCdpbWcnLCBjb250YWluZXIsICdoZWFkaW5nLWltZycpO1xuICAgIGRpdkltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvaGVhZGVyLWNoZWNrLnN2Zyc7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gY3JlYXRlVGV4dEVsZW1lbnQoJ2gxJywgJ1RvIERvIExpc3QnLCAnbWFpbi1oZWFkZXInLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGhvbWVwYWdlQm9keSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hvbWVwYWdlLWJvZHknKTtcbiAgICBjb25zdCBob21lcGFnZVNpZGUgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLXNpZGUnKTtcbiAgICBjb25zdCBob21lcGFnZUJ1bGsgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLWJ1bGsnKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdJbmJveCcsICdob21lcGFnZS1idWxrLWhlYWRpbmcnLCBob21lcGFnZUJ1bGspO1xuXG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSk7XG4gICAgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NsaXBib2FyZC5zdmcnLCAnVG9kYXknLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jYWxlbmRhci0yLnN2ZycsICdUaGlzIFdlZWsnLCBob21lcGFnZVNpZGUpO1xuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdQcm9qZWN0cycsICdwcm9qZWN0LWhlYWRpbmcnLCBob21lcGFnZVNpZGUpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnLCAnQWRkIFByb2plY3QnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2soaG9tZXBhZ2VCdWxrKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRhc2tUaXRsZSwgcHJvamVjdFRvQWRkVG8gPSB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgdGFza1RpdGxlID0gcHJvbXB0KCk7XG4gICAgICAgIHByb2plY3RUb0FkZFRvID0gcHJvbXB0KCk7XG5cbiAgICAgICAgaWYgKCF0YXNrTWFuYWdlci5pc0luUHJvamVjdCh0YXNrVGl0bGUpKSBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgaG9tZXBhZ2VCdWxrKTtcbiAgICAgICAgdGFza01hbmFnZXIuYWRkVGFzayh0YXNrVGl0bGUsIHByb2plY3RUb0FkZFRvKTtcbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gcHJvbXB0KCk7XG5cbiAgICAgICAgaWYgKCFwcm9qZWN0TWFuYWdlci5wcm9qZWN0RXhpc3RzKHByb2plY3RUaXRsZSkpIGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLCBob21lcGFnZVNpZGUpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgfSlcbn0iLCJsZXQgYWxsVGFza3MgPSBbXTtcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCB0YXNrID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZX07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICByZXR1cm4ge3RpdGxlLCB0YXNrc307XG59XG5cbmNvbnN0IHRhc2tNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBwcm9qZWN0VGl0bGUgPSB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUpO1xuICAgICAgICBpZiAoIWlzSW5Qcm9qZWN0KG5ld1Rhc2sudGl0bGUpKSB7XG4gICAgICAgICAgICBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spOyBcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TWFuYWdlci5wcm9qZWN0RXhpc3RzKHByb2plY3RUaXRsZSkgJiYgIShwcm9qZWN0VGl0bGUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2ssIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdFRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZygnRVJST1InKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGFsbFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFzayA9ICh0YXNrVGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0luUHJvamVjdCA9ICh0YXNrVGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgcmVtb3ZlVGFzaywgaXNJblByb2plY3QgfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKHRpdGxlKSkgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1InKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0WzBdLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0LCBwcm9qZWN0RXhpc3RzIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5nZW5lcmF0ZUhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9