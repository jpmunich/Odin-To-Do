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

            document.querySelectorAll('.task').forEach(element => {
                element.remove();
            })

            _task_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getActiveProject()[0].tasks.forEach(task => {
                createTask(task.title, document.querySelector('.homepage-bulk'));
            })
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

    const getActiveProject = () => {
        return allProjects.filter((project) => project.isActive === true);
    }

    return { addProject, addTaskToProject, removeProject, getProject, projectExists, setActiveProject, getActiveProject };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ2tCOztBQUV4RCxpREFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi90YXNrLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQodGV4dFR5cGUsIHRleHQsIGNsYXNzTmFtZSwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGV4dFR5cGUpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljRWxlbWVudCh0eXBlLCBwYXJlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkQWN0aXZlUHJvamVjdEJ1dHRvbkNsYXNzKHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1jaGlsZCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1jaGlsZC1jbGlja2VkJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQtY2xpY2tlZCcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZChpbWdTcmMsIHRleHQsIHBhcmVudCwgaGFzQWN0aXZlQ2xhc3MgPSBmYWxzZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQnKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHByb2plY3RJY29uLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgaWYgKGhhc0FjdGl2ZUNsYXNzKSBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtY2hpbGQtY2xpY2tlZCcpO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICAgICAgYWRkQWN0aXZlUHJvamVjdEJ1dHRvbkNsYXNzKGUudGFyZ2V0KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KClbMF0udGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrKHRhc2sudGl0bGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lcGFnZS1idWxrJykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0KGltZ1NyYywgdGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSBpbWdTcmM7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBwYXJlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNoaWxkJyk7XG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvY2hlY2stc3F1YXJlLnN2Zyc7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0QWN0aXZlUHJvamVjdChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBhZGRBY3RpdmVQcm9qZWN0QnV0dG9uQ2xhc3MoZS50YXJnZXQpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFzayhwYXJlbnQpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xuICAgIGNvbnN0IHRhc2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0YXNrSW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZydcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIFRhc2snO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBwYXJlbnQpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLXJlbW92ZS1idXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tNYW5hZ2VyLnJlbW92ZVRhc2sodGl0bGUpO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgcmVtb3ZlQnV0dG9uLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlQmFzaWNFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlQWRkUHJvamVjdCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlQWRkVGFzaywgY3JlYXRlVGFzayB9OyIsImltcG9ydCB7IGNyZWF0ZVRleHRFbGVtZW50LCBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCwgY3JlYXRlQWRkUHJvamVjdCwgY3JlYXRlUHJvamVjdCwgY3JlYXRlQWRkVGFzaywgY3JlYXRlVGFzaywgY3JlYXRlQmFzaWNFbGVtZW50IH0gZnJvbSBcIi4vVUlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hlYWRpbmctY29udGFpbmVyJyk7XG4gICAgY29uc3QgZGl2SW1nID0gY3JlYXRlQmFzaWNFbGVtZW50KCdpbWcnLCBjb250YWluZXIsICdoZWFkaW5nLWltZycpO1xuICAgIGRpdkltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvaGVhZGVyLWNoZWNrLnN2Zyc7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gY3JlYXRlVGV4dEVsZW1lbnQoJ2gxJywgJ1RvIERvIExpc3QnLCAnbWFpbi1oZWFkZXInLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGhvbWVwYWdlQm9keSA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnZGl2JywgY29udGVudCwgJ2hvbWVwYWdlLWJvZHknKTtcbiAgICBjb25zdCBob21lcGFnZVNpZGUgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLXNpZGUnKTtcbiAgICBjb25zdCBob21lcGFnZUJ1bGsgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGhvbWVwYWdlQm9keSwgJ2hvbWVwYWdlLWJ1bGsnKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdJbmJveCcsICdob21lcGFnZS1idWxrLWhlYWRpbmcnLCBob21lcGFnZUJ1bGspO1xuXG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvaW5ib3guc3ZnJywgJ0luYm94JywgaG9tZXBhZ2VTaWRlLCB0cnVlKTtcbiAgICBjb25zdCB0b2RheSA9IGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jbGlwYm9hcmQuc3ZnJywgJ1RvZGF5JywgaG9tZXBhZ2VTaWRlKTtcbiAgICBjb25zdCB0aGlzV2VlayA9IGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jYWxlbmRhci0yLnN2ZycsICdUaGlzIFdlZWsnLCBob21lcGFnZVNpZGUpO1xuXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoJ2gyJywgJ1Byb2plY3RzJywgJ3Byb2plY3QtaGVhZGluZycsIGhvbWVwYWdlU2lkZSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUFkZFByb2plY3QoJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJywgJ0FkZCBQcm9qZWN0JywgaG9tZXBhZ2VTaWRlKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVBZGRUYXNrKGhvbWVwYWdlQnVsayk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0YXNrVGl0bGUsIHByb2plY3RUb0FkZFRvID0gdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgIHRhc2tUaXRsZSA9IHByb21wdCgpO1xuICAgICAgICBwcm9qZWN0VG9BZGRUbyA9IHByb21wdCgpO1xuXG4gICAgICAgIGlmICh0YXNrVGl0bGUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoIXRhc2tNYW5hZ2VyLmlzSW5Qcm9qZWN0KHRhc2tUaXRsZSkpIGNyZWF0ZVRhc2sodGFza1RpdGxlLCBob21lcGFnZUJ1bGspO1xuICAgICAgICAgICAgdGFza01hbmFnZXIuYWRkVGFzayh0YXNrVGl0bGUsIHByb2plY3RUb0FkZFRvKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSBwcm9tcHQoKTtcblxuICAgICAgICBpZiAocHJvamVjdFRpdGxlICE9PSAnJyAmJiBwcm9qZWN0VGl0bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghcHJvamVjdE1hbmFnZXIucHJvamVjdEV4aXN0cyhwcm9qZWN0VGl0bGUpKSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSwgaG9tZXBhZ2VTaWRlKTtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiY29uc3QgdGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGV9O1xufVxuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCB0YXNrcyA9IFtdLCBpc0FjdGl2ZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgaXNBY3RpdmUsIHRhc2tzfTtcbn1cblxubGV0IGFsbFRhc2tzID0gW107XG5sZXQgYWxsUHJvamVjdHMgPSBbXG4gICAgcHJvamVjdCgnSW5ib3gnLCBhbGxUYXNrcywgdHJ1ZSksXG4gICAgcHJvamVjdCgnVG9kYXknKSxcbiAgICBwcm9qZWN0KCdUaGlzIFdlZWsnKVxuXTtcblxuXG5cbmNvbnN0IHRhc2tNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBwcm9qZWN0VGl0bGUgPSB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sodGl0bGUpO1xuICAgICAgICBpZiAoIWlzSW5Qcm9qZWN0KG5ld1Rhc2sudGl0bGUpKSB7XG4gICAgICAgICAgICBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spOyBcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TWFuYWdlci5wcm9qZWN0RXhpc3RzKHByb2plY3RUaXRsZSkgJiYgIShwcm9qZWN0VGl0bGUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2ssIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdFRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZygnRVJST1IhIFRoaXMgdGFzayBhbHJlYWR5IGV4aXN0cycpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGl0bGUpID0+IHtcbiAgICAgICAgYWxsVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzSW5Qcm9qZWN0ID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVGFza3Muc29tZSgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUYXNrLCByZW1vdmVUYXNrLCBpc0luUHJvamVjdCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUpO1xuICAgICAgICBpZiAoIXByb2plY3RFeGlzdHModGl0bGUpKSBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUiEgVGhpcyBwcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHRhc2ssIHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdFswXS50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzID0gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0RXhpc3RzKHByb2plY3QpKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzQWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgICAgZ2V0UHJvamVjdChwcm9qZWN0KVswXS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcIkVSUk9SISBQcm9qZWN0IHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBhY3RpdmUgZG9lcyBub3QgZXhpc3QhXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaXNBY3RpdmUgPT09IHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3QsIHByb2plY3RFeGlzdHMsIHNldEFjdGl2ZVByb2plY3QsIGdldEFjdGl2ZVByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmdlbmVyYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=