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

    const inbox = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/inbox.svg', 'Inbox', homepageSide);
    _task__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Inbox');
    const today = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/clipboard.svg', 'Today', homepageSide);
    _task__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('Today');
    const thisWeek = (0,_UIController__WEBPACK_IMPORTED_MODULE_0__.createHomePageSideChild)('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    _task__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject('This Week');
    
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
let allTasks = [];
let allProjects = [];

const task = (title) => {
    return {title};
}

const project = (title, isActive = false) => {
    let tasks = [];
    return {title, isActive, tasks};
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOc0M7QUFDa0I7O0FBRXhELGlEQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh0ZXh0VHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZXh0VHlwZSk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNFbGVtZW50KHR5cGUsIHBhcmVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRBY3RpdmVQcm9qZWN0QnV0dG9uQ2xhc3MocHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWNoaWxkJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLWNoaWxkLWNsaWNrZWQnKTtcbiAgICB9KVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZC1jbGlja2VkJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKGltZ1NyYywgdGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIGFkZEFjdGl2ZVByb2plY3RCdXR0b25DbGFzcyhlLnRhcmdldCk7XG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgcGFyZW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2NoZWNrLXNxdWFyZS5zdmcnO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgYWRkQWN0aXZlUHJvamVjdEJ1dHRvbkNsYXNzKGUudGFyZ2V0KTtcbiAgICB9KVxuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2socGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgICBjb25zdCB0YXNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0ltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbWcpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgcGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1yZW1vdmUtYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrTWFuYWdlci5yZW1vdmVUYXNrKHRpdGxlKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9KVxuICAgIHJlbW92ZUJ1dHRvbi5pbm5lclRleHQgPSAnUmVtb3ZlJztcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUJhc2ljRWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZVRhc2sgfTsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZVRhc2ssIGNyZWF0ZUJhc2ljRWxlbWVudCB9IGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRpdkltZyA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnaW1nJywgY29udGFpbmVyLCAnaGVhZGluZy1pbWcnKTtcbiAgICBkaXZJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2hlYWRlci1jaGVjay5zdmcnO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZVRleHRFbGVtZW50KCdoMScsICdUbyBEbyBMaXN0JywgJ21haW4taGVhZGVyJywgY29udGFpbmVyKTtcbiAgICBjb25zdCBob21lcGFnZUJvZHkgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdob21lcGFnZS1ib2R5Jyk7XG4gICAgY29uc3QgaG9tZXBhZ2VTaWRlID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1zaWRlJyk7XG4gICAgY29uc3QgaG9tZXBhZ2VCdWxrID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1idWxrJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnSW5ib3gnLCAnaG9tZXBhZ2UtYnVsay1oZWFkaW5nJywgaG9tZXBhZ2VCdWxrKTtcblxuICAgIGNvbnN0IGluYm94ID0gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSk7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCgnSW5ib3gnKTtcbiAgICBjb25zdCB0b2RheSA9IGNyZWF0ZUhvbWVQYWdlU2lkZUNoaWxkKCcuLi9kaXN0L2ltYWdlcy9jbGlwYm9hcmQuc3ZnJywgJ1RvZGF5JywgaG9tZXBhZ2VTaWRlKTtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KCdUb2RheScpO1xuICAgIGNvbnN0IHRoaXNXZWVrID0gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2NhbGVuZGFyLTIuc3ZnJywgJ1RoaXMgV2VlaycsIGhvbWVwYWdlU2lkZSk7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCgnVGhpcyBXZWVrJyk7XG4gICAgXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoJ2gyJywgJ1Byb2plY3RzJywgJ3Byb2plY3QtaGVhZGluZycsIGhvbWVwYWdlU2lkZSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUFkZFByb2plY3QoJy4uL2Rpc3QvaW1hZ2VzL3BsdXMuc3ZnJywgJ0FkZCBQcm9qZWN0JywgaG9tZXBhZ2VTaWRlKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVBZGRUYXNrKGhvbWVwYWdlQnVsayk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh0YXNrVGl0bGUsIHByb2plY3RUb0FkZFRvID0gdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgIHRhc2tUaXRsZSA9IHByb21wdCgpO1xuICAgICAgICBwcm9qZWN0VG9BZGRUbyA9IHByb21wdCgpO1xuXG4gICAgICAgIGlmICh0YXNrVGl0bGUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoIXRhc2tNYW5hZ2VyLmlzSW5Qcm9qZWN0KHRhc2tUaXRsZSkpIGNyZWF0ZVRhc2sodGFza1RpdGxlLCBob21lcGFnZUJ1bGspO1xuICAgICAgICAgICAgdGFza01hbmFnZXIuYWRkVGFzayh0YXNrVGl0bGUsIHByb2plY3RUb0FkZFRvKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSBwcm9tcHQoKTtcblxuICAgICAgICBpZiAocHJvamVjdFRpdGxlICE9PSAnJyAmJiBwcm9qZWN0VGl0bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghcHJvamVjdE1hbmFnZXIucHJvamVjdEV4aXN0cyhwcm9qZWN0VGl0bGUpKSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSwgaG9tZXBhZ2VTaWRlKTtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRpdGxlKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwibGV0IGFsbFRhc2tzID0gW107XG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgdGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGV9O1xufVxuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBpc0FjdGl2ZSA9IGZhbHNlKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgcmV0dXJuIHt0aXRsZSwgaXNBY3RpdmUsIHRhc2tzfTtcbn1cblxuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIHByb2plY3RUaXRsZSA9IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSk7XG4gICAgICAgIGlmICghaXNJblByb2plY3QobmV3VGFzay50aXRsZSkpIHtcbiAgICAgICAgICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7IFxuICAgICAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RFeGlzdHMocHJvamVjdFRpdGxlKSAmJiAhKHByb2plY3RUaXRsZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFRhc2tUb1Byb2plY3QobmV3VGFzaywgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUiEgVGhpcyB0YXNrIGFscmVhZHkgZXhpc3RzJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBhbGxUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2sgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNJblByb2plY3QgPSAodGFza1RpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2ssIGlzSW5Qcm9qZWN0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGlmICghcHJvamVjdEV4aXN0cyh0aXRsZSkpIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SISBUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0WzBdLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RFeGlzdHMocHJvamVjdCkpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuaXNBY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgICBnZXRQcm9qZWN0KHByb2plY3QpWzBdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGNvbnNvbGUubG9nKFwiRVJST1IhIFByb2plY3QgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGFjdGl2ZSBkb2VzIG5vdCBleGlzdCFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgYWRkVGFza1RvUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdCwgcHJvamVjdEV4aXN0cywgc2V0QWN0aXZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZ2VuZXJhdGVIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==