import { createTextElement, createHomePageSideChild, createTask, createBasicElement } from "./UIController";
const content = document.getElementById('content');

export default function generateHomePage() {
    const container = createBasicElement('div', content, 'heading-container');
    const divImg = createBasicElement('img', container, 'heading-img');
    divImg.src = '../dist/images/header-check.svg';

    const mainHeader = createTextElement('h1', 'Odin To Do List', 'main-header', container);
    const homepageBody = createBasicElement('div', content, 'homepage-body');
    const homepageSide = createBasicElement('div', homepageBody, 'homepage-side');
    const homepageBulk = createBasicElement('div', homepageBody, 'homepage-bulk');

    createTextElement('h2', 'Inbox', 'homepage-bulk-heading', homepageBulk);

    createHomePageSideChild('../dist/images/inbox.svg', 'Inbox', homepageSide);
    createHomePageSideChild('../dist/images/clipboard.svg', 'Today', homepageSide);
    createHomePageSideChild('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    createTextElement('h2', 'Projects', 'project-heading', homepageSide);
    createHomePageSideChild('../dist/images/plus.svg', 'Add Project', homepageSide);

    createTask(homepageBulk);
}

function addProject() {
    createHomePageSideChild()
}