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
/* harmony export */   createAddProject: () => (/* binding */ createAddProject),
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

function addActiveProjectButtonClass(project) {
    document.querySelectorAll('.side-child').forEach(element => {
        element.classList.remove('side-child-clicked');
    })
    project.classList.add('side-child-clicked');
}

function createHomePageSideChild(imgSrc, text, parent, hasActiveClass = false) {
    const project = document.createElement('button');
    project.classList.add('side-child');
    const projectIcon = document.createElement('img');
    projectIcon.src = imgSrc;
    const projectText = document.createElement('p');
    projectText.innerText = text;

    project.appendChild(projectIcon);
    project.appendChild(projectText);
    parent.appendChild(project);

    if (hasActiveClass) project.classList.add('side-child-clicked');
    project.addEventListener('click', (e) => {
            _task_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.setActiveProject(e.target.innerText);
            addActiveProjectButtonClass(e.target);
        })

    return project;
}

function createAddProject(imgSrc, text, parent) {
    const project = document.createElement('button');
    project.classList.add('add-project-button');
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

    project.addEventListener('click', (e) => {
        _task_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.setActiveProject(e.target.innerText);
        addActiveProjectButtonClass(e.target);
    })

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

function createTask(title, parent) {
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

    const inbox = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/inbox.svg', 'Inbox', homepageSide, true);
    const today = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/clipboard.svg', 'Today', homepageSide);
    const thisWeek = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/calendar-2.svg', 'This Week', homepageSide);

    (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h2', 'Projects', 'project-heading', homepageSide);
    const addProjectButton = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createAddProject)('../dist/images/plus.svg', 'Add Project', homepageSide);

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

        if (projectTitle !== '' && projectTitle !== null) {
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
const task = (title) => {
    return {title};
}

const project = (title, tasks = [], isActive = false) => {
    return {title, isActive, tasks};
}

let allTasks = [];
let allProjects = [
    project('Inbox', allTasks, true),
    project('Today'),
    project('This Week')
];



const taskManager = (() => {
    const addTask = (title, projectTitle = undefined) => {
        const newTask = task(title);
        if (!isInProject(newTask.title)) {
            allTasks.push(newTask); 
            if (projectManager.projectExists(projectTitle) && !(projectTitle === undefined)) {
                projectManager.addTaskToProject(newTask, projectManager.getProject(projectTitle));
            }
        } else console.log('ERROR! This task already exists');

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
        else console.log('ERROR! This project already exists');
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

    const setActiveProject = (project) => {
        if (projectExists(project)) {
            allProjects.forEach((project) => project.isActive = false);
            getProject(project)[0].isActive = true;
        } else console.log("ERROR! Project you are trying to set active does not exist!");
    }

    return { addProject, addTaskToProject, removeProject, getProject, projectExists, setActiveProject };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQWM7QUFDMUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakg0SjtBQUN2Rzs7QUFFckQ7O0FBRWU7QUFDZixzQkFBc0IsaUVBQWtCO0FBQ3hDLG1CQUFtQixpRUFBa0I7QUFDckM7O0FBRUEsdUJBQXVCLGdFQUFpQjtBQUN4Qyx5QkFBeUIsaUVBQWtCO0FBQzNDLHlCQUF5QixpRUFBa0I7QUFDM0MseUJBQXlCLGlFQUFrQjs7QUFFM0MsSUFBSSxnRUFBaUI7O0FBRXJCLGtCQUFrQixzRUFBdUI7QUFDekMsa0JBQWtCLHNFQUF1QjtBQUN6QyxxQkFBcUIsc0VBQXVCOztBQUU1QyxJQUFJLGdFQUFpQjtBQUNyQiw2QkFBNkIsK0RBQWdCOztBQUU3QywwQkFBMEIsNERBQWE7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDhDQUFXLHlCQUF5Qix5REFBVTtBQUMvRCxZQUFZLDhDQUFXO0FBQ3ZCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFjLDhCQUE4Qiw0REFBYTtBQUMxRSxZQUFZLGlEQUFjO0FBQzFCO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVzQzs7Ozs7OztVQ3BGdkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDa0I7O0FBRXhELGlEQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRBY3RpdmVQcm9qZWN0QnV0dG9uQ2xhc3MocHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWNoaWxkJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWNoaWxkLWNsaWNrZWQnKTtcbiAgICB9KVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZC1jbGlja2VkJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKGltZ1NyYywgdGV4dCwgcGFyZW50LCBoYXNBY3RpdmVDbGFzcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBpZiAoaGFzQWN0aXZlQ2xhc3MpIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZC1jbGlja2VkJyk7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5zZXRBY3RpdmVQcm9qZWN0KGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICBhZGRBY3RpdmVQcm9qZWN0QnV0dG9uQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFByb2plY3QoaW1nU3JjLCB0ZXh0LCBwYXJlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9jaGVjay1zcXVhcmUuc3ZnJztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5zZXRBY3RpdmVQcm9qZWN0KGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGFkZEFjdGl2ZVByb2plY3RCdXR0b25DbGFzcyhlLnRhcmdldCk7XG4gICAgfSlcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrKHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XG4gICAgY29uc3QgdGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRhc2tJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJ1xuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW1nKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIHBhcmVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tUZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmVtb3ZlLWJ1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01hbmFnZXIucmVtb3ZlVGFzayh0aXRsZSk7XG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgfSlcbiAgICByZW1vdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1JlbW92ZSc7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVCYXNpY0VsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVBZGRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrIH07IiwiaW1wb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkLCBjcmVhdGVBZGRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVBZGRUYXNrLCBjcmVhdGVUYXNrLCBjcmVhdGVCYXNpY0VsZW1lbnQgfSBmcm9tIFwiLi9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnaGVhZGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBkaXZJbWcgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2ltZycsIGNvbnRhaW5lciwgJ2hlYWRpbmctaW1nJyk7XG4gICAgZGl2SW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9oZWFkZXItY2hlY2suc3ZnJztcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVUZXh0RWxlbWVudCgnaDEnLCAnVG8gRG8gTGlzdCcsICdtYWluLWhlYWRlcicsIGNvbnRhaW5lcik7XG4gICAgY29uc3QgaG9tZXBhZ2VCb2R5ID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBjb250ZW50LCAnaG9tZXBhZ2UtYm9keScpO1xuICAgIGNvbnN0IGhvbWVwYWdlU2lkZSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgaG9tZXBhZ2VCb2R5LCAnaG9tZXBhZ2Utc2lkZScpO1xuICAgIGNvbnN0IGhvbWVwYWdlQnVsayA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgaG9tZXBhZ2VCb2R5LCAnaG9tZXBhZ2UtYnVsaycpO1xuXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoJ2gyJywgJ0luYm94JywgJ2hvbWVwYWdlLWJ1bGstaGVhZGluZycsIGhvbWVwYWdlQnVsayk7XG5cbiAgICBjb25zdCBpbmJveCA9IGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9pbmJveC5zdmcnLCAnSW5ib3gnLCBob21lcGFnZVNpZGUsIHRydWUpO1xuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NsaXBib2FyZC5zdmcnLCAnVG9kYXknLCBob21lcGFnZVNpZGUpO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NhbGVuZGFyLTIuc3ZnJywgJ1RoaXMgV2VlaycsIGhvbWVwYWdlU2lkZSk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnUHJvamVjdHMnLCAncHJvamVjdC1oZWFkaW5nJywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gY3JlYXRlQWRkUHJvamVjdCgnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnLCAnQWRkIFByb2plY3QnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2soaG9tZXBhZ2VCdWxrKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRhc2tUaXRsZSwgcHJvamVjdFRvQWRkVG8gPSB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgdGFza1RpdGxlID0gcHJvbXB0KCk7XG4gICAgICAgIHByb2plY3RUb0FkZFRvID0gcHJvbXB0KCk7XG5cbiAgICAgICAgaWYgKHRhc2tUaXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICghdGFza01hbmFnZXIuaXNJblByb2plY3QodGFza1RpdGxlKSkgY3JlYXRlVGFzayh0YXNrVGl0bGUsIGhvbWVwYWdlQnVsayk7XG4gICAgICAgICAgICB0YXNrTWFuYWdlci5hZGRUYXNrKHRhc2tUaXRsZSwgcHJvamVjdFRvQWRkVG8pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IHByb21wdCgpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgIT09ICcnICYmIHByb2plY3RUaXRsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCFwcm9qZWN0TWFuYWdlci5wcm9qZWN0RXhpc3RzKHByb2plY3RUaXRsZSkpIGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlLCBob21lcGFnZVNpZGUpO1xuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJjb25zdCB0YXNrID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZX07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIHRhc2tzID0gW10sIGlzQWN0aXZlID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBpc0FjdGl2ZSwgdGFza3N9O1xufVxuXG5sZXQgYWxsVGFza3MgPSBbXTtcbmxldCBhbGxQcm9qZWN0cyA9IFtcbiAgICBwcm9qZWN0KCdJbmJveCcsIGFsbFRhc2tzLCB0cnVlKSxcbiAgICBwcm9qZWN0KCdUb2RheScpLFxuICAgIHByb2plY3QoJ1RoaXMgV2VlaycpXG5dO1xuXG5cblxuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIHByb2plY3RUaXRsZSA9IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSk7XG4gICAgICAgIGlmICghaXNJblByb2plY3QobmV3VGFzay50aXRsZSkpIHtcbiAgICAgICAgICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7IFxuICAgICAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RFeGlzdHMocHJvamVjdFRpdGxlKSAmJiAhKHByb2plY3RUaXRsZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFRhc2tUb1Byb2plY3QobmV3VGFzaywgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUiEgVGhpcyB0YXNrIGFscmVhZHkgZXhpc3RzJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBhbGxUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNJblByb2plY3QgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2ssIGlzSW5Qcm9qZWN0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGlmICghcHJvamVjdEV4aXN0cyh0aXRsZSkpIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SISBUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0WzBdLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RFeGlzdHMocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuaXNBY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgICBnZXRQcm9qZWN0KHByb2plY3QpWzBdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiRVJST1IhIFByb2plY3QgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGFjdGl2ZSBkb2VzIG5vdCBleGlzdCFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgYWRkVGFza1RvUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdCwgcHJvamVjdEV4aXN0cywgc2V0QWN0aXZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZ2VuZXJhdGVIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==