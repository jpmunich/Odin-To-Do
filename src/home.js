import { createTextElement } from "./elementCreator";
const content = document.getElementById('content');

export default function generateHomePage() {
    const container = document.createElement('div');
    container.classList.add('heading-container');
    const divImg = document.createElement('img');
    divImg.src = '../dist/images/header-check.svg';
    const divcontent = document.createElement('h1');
    divcontent.innerHTML = "Odin To Do List";

    const homepageBody = document.createElement('div');
    homepageBody.classList.add('homepage-body');
    const homepageSide = document.createElement('div');
    homepageSide.classList.add('homepage-side');
    const homepageBulk = document.createElement('div');
    createTextElement('h2', 'Inbox', 'homepage-bulk-heading', homepageBulk);
    homepageBulk.classList.add('homepage-bulk');

    homepageBody.appendChild(homepageSide);
    createHomePageSideChild('../dist/images/inbox.svg', 'Inbox', homepageSide);
    createHomePageSideChild('../dist/images/clipboard.svg', 'Today', homepageSide);
    createHomePageSideChild('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    createTextElement('h2', 'Projects', 'project-heading', homepageSide);
    createHomePageSideChild('../dist/images/plus.svg', 'Add Project', homepageSide);

    homepageBody.appendChild(homepageBulk);
    createTask(homepageBulk);
    container.appendChild(divImg);
    container.appendChild(divcontent);
    content.appendChild(container)
    content.appendChild(homepageBody);
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