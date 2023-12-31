import { taskManager, projectManager } from './task.js';

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
            projectManager.setActiveProject(e.target.innerText);
            addActiveProjectButtonClass(e.target);

            document.querySelectorAll('.task').forEach(element => {
                element.remove();
            })

            projectManager.getActiveProject()[0].tasks.forEach(task => {
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
        projectManager.setActiveProject(e.target.innerText);
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
        taskManager.removeTask(title);
        task.remove();
    })
    removeButton.innerText = 'Remove';

    task.appendChild(taskText);
    task.appendChild(removeButton);

    parent.appendChild(task);
    return task;
}

export { createTextElement, createBasicElement, createHomePageSideChild, createAddProject, createProject, createAddTask, createTask };