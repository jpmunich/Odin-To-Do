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

        if (projectToAddTo === '') {
            projectToAddTo = 'Today';
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNrQjs7QUFFeEQsaURBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tNYW5hZ2VyLCBwcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vdGFzay5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KHRleHRUeXBlLCB0ZXh0LCBjbGFzc05hbWUsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRleHRUeXBlKTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYXNpY0VsZW1lbnQodHlwZSwgcGFyZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZVByb2plY3RCdXR0b25DbGFzcyhwcm9qZWN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtY2hpbGQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtY2hpbGQtY2xpY2tlZCcpO1xuICAgIH0pXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNoaWxkLWNsaWNrZWQnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoaW1nU3JjLCB0ZXh0LCBwYXJlbnQsIGhhc0FjdGl2ZUNsYXNzID0gZmFsc2UpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNoaWxkJyk7XG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSBpbWdTcmM7XG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGlmIChoYXNBY3RpdmVDbGFzcykgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLWNoaWxkLWNsaWNrZWQnKTtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIGFkZEFjdGl2ZVByb2plY3RCdXR0b25DbGFzcyhlLnRhcmdldCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpWzBdLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFzayh0YXNrLnRpdGxlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXBhZ2UtYnVsaycpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdChpbWdTcmMsIHRleHQsIHBhcmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgcGFyZW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZS1jaGlsZCcpO1xuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2NoZWNrLXNxdWFyZS5zdmcnO1xuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldEFjdGl2ZVByb2plY3QoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgYWRkQWN0aXZlUHJvamVjdEJ1dHRvbkNsYXNzKGUudGFyZ2V0KTtcbiAgICB9KVxuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2socGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgICBjb25zdCB0YXNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFza0ltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvcGx1cy5zdmcnXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbWcpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgcGFyZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza1RleHQuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1yZW1vdmUtYnV0dG9uJyk7XG4gICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrTWFuYWdlci5yZW1vdmVUYXNrKHRpdGxlKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9KVxuICAgIHJlbW92ZUJ1dHRvbi5pbm5lclRleHQgPSAnUmVtb3ZlJztcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RleHQpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGV4dEVsZW1lbnQsIGNyZWF0ZUJhc2ljRWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZVRhc2sgfTsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0RWxlbWVudCwgY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQsIGNyZWF0ZUFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZUFkZFRhc2ssIGNyZWF0ZVRhc2ssIGNyZWF0ZUJhc2ljRWxlbWVudCB9IGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdoZWFkaW5nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRpdkltZyA9IGNyZWF0ZUJhc2ljRWxlbWVudCgnaW1nJywgY29udGFpbmVyLCAnaGVhZGluZy1pbWcnKTtcbiAgICBkaXZJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2hlYWRlci1jaGVjay5zdmcnO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGNyZWF0ZVRleHRFbGVtZW50KCdoMScsICdUbyBEbyBMaXN0JywgJ21haW4taGVhZGVyJywgY29udGFpbmVyKTtcbiAgICBjb25zdCBob21lcGFnZUJvZHkgPSBjcmVhdGVCYXNpY0VsZW1lbnQoJ2RpdicsIGNvbnRlbnQsICdob21lcGFnZS1ib2R5Jyk7XG4gICAgY29uc3QgaG9tZXBhZ2VTaWRlID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1zaWRlJyk7XG4gICAgY29uc3QgaG9tZXBhZ2VCdWxrID0gY3JlYXRlQmFzaWNFbGVtZW50KCdkaXYnLCBob21lcGFnZUJvZHksICdob21lcGFnZS1idWxrJyk7XG5cbiAgICBjcmVhdGVUZXh0RWxlbWVudCgnaDInLCAnSW5ib3gnLCAnaG9tZXBhZ2UtYnVsay1oZWFkaW5nJywgaG9tZXBhZ2VCdWxrKTtcblxuICAgIGNvbnN0IGluYm94ID0gY3JlYXRlSG9tZVBhZ2VTaWRlQ2hpbGQoJy4uL2Rpc3QvaW1hZ2VzL2luYm94LnN2ZycsICdJbmJveCcsIGhvbWVwYWdlU2lkZSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9kYXkgPSBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvY2xpcGJvYXJkLnN2ZycsICdUb2RheScsIGhvbWVwYWdlU2lkZSk7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBjcmVhdGVIb21lUGFnZVNpZGVDaGlsZCgnLi4vZGlzdC9pbWFnZXMvY2FsZW5kYXItMi5zdmcnLCAnVGhpcyBXZWVrJywgaG9tZXBhZ2VTaWRlKTtcblxuICAgIGNyZWF0ZVRleHRFbGVtZW50KCdoMicsICdQcm9qZWN0cycsICdwcm9qZWN0LWhlYWRpbmcnLCBob21lcGFnZVNpZGUpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVBZGRQcm9qZWN0KCcuLi9kaXN0L2ltYWdlcy9wbHVzLnN2ZycsICdBZGQgUHJvamVjdCcsIGhvbWVwYWdlU2lkZSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQWRkVGFzayhob21lcGFnZUJ1bGspO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAodGFza1RpdGxlLCBwcm9qZWN0VG9BZGRUbyA9IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICB0YXNrVGl0bGUgPSBwcm9tcHQoKTtcbiAgICAgICAgcHJvamVjdFRvQWRkVG8gPSBwcm9tcHQoKTtcblxuICAgICAgICBpZiAocHJvamVjdFRvQWRkVG8gPT09ICcnKSB7XG4gICAgICAgICAgICBwcm9qZWN0VG9BZGRUbyA9ICdUb2RheSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFza1RpdGxlICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKCF0YXNrTWFuYWdlci5pc0luUHJvamVjdCh0YXNrVGl0bGUpKSBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgaG9tZXBhZ2VCdWxrKTtcbiAgICAgICAgICAgIHRhc2tNYW5hZ2VyLmFkZFRhc2sodGFza1RpdGxlLCBwcm9qZWN0VG9BZGRUbyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gcHJvbXB0KCk7XG5cbiAgICAgICAgaWYgKHByb2plY3RUaXRsZSAhPT0gJycgJiYgcHJvamVjdFRpdGxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RNYW5hZ2VyLnByb2plY3RFeGlzdHMocHJvamVjdFRpdGxlKSkgY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUsIGhvbWVwYWdlU2lkZSk7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgICAgIH1cbiAgICB9KVxufSIsImNvbnN0IHRhc2sgPSAodGl0bGUpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlfTtcbn1cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgdGFza3MgPSBbXSwgaXNBY3RpdmUgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGlzQWN0aXZlLCB0YXNrc307XG59XG5cbmxldCBhbGxUYXNrcyA9IFtdO1xubGV0IGFsbFByb2plY3RzID0gW1xuICAgIHByb2plY3QoJ0luYm94JywgYWxsVGFza3MsIHRydWUpLFxuICAgIHByb2plY3QoJ1RvZGF5JyksXG4gICAgcHJvamVjdCgnVGhpcyBXZWVrJylcbl07XG5cblxuXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgcHJvamVjdFRpdGxlID0gdW5kZWZpbmVkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlKTtcbiAgICAgICAgaWYgKCFpc0luUHJvamVjdChuZXdUYXNrLnRpdGxlKSkge1xuICAgICAgICAgICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTsgXG4gICAgICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIucHJvamVjdEV4aXN0cyhwcm9qZWN0VGl0bGUpICYmICEocHJvamVjdFRpdGxlID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkVGFza1RvUHJvamVjdChuZXdUYXNrLCBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coJ0VSUk9SISBUaGlzIHRhc2sgYWxyZWFkeSBleGlzdHMnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGFsbFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYWxsVGFza3MpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFzayA9ICh0YXNrVGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGFza1RpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0luUHJvamVjdCA9ICh0YXNrVGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFzaywgcmVtb3ZlVGFzaywgaXNJblByb2plY3QgfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKHRpdGxlKSkgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1IhIFRoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RbMF0udGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3RUaXRsZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBhbGxQcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdEV4aXN0cyhwcm9qZWN0KSkge1xuICAgICAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICAgIGdldFByb2plY3QocHJvamVjdClbMF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coXCJFUlJPUiEgUHJvamVjdCB5b3UgYXJlIHRyeWluZyB0byBzZXQgYWN0aXZlIGRvZXMgbm90IGV4aXN0IVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzQWN0aXZlID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCBhZGRUYXNrVG9Qcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0LCBwcm9qZWN0RXhpc3RzLCBzZXRBY3RpdmVQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrTWFuYWdlciwgcHJvamVjdE1hbmFnZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgdGFza01hbmFnZXIsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5nZW5lcmF0ZUhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9