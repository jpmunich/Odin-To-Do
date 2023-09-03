import { createTextElement, createHomePageSideChild, createAddProject, createProject, createAddTask, createTask, createBasicElement } from "./UIController";
import { taskManager, projectManager } from "./task";

const content = document.getElementById('content');

export default function generateHomePage() {
    const container = createBasicElement('div', content, 'heading-container');
    const divImg = createBasicElement('img', container, 'heading-img');
    divImg.src = '../dist/images/header-check.svg';

    const mainHeader = createTextElement('h1', 'To Do List', 'main-header', container);
    const homepageBody = createBasicElement('div', content, 'homepage-body');
    const homepageSide = createBasicElement('div', homepageBody, 'homepage-side');
    const homepageBulk = createBasicElement('div', homepageBody, 'homepage-bulk');

    createTextElement('h2', 'Inbox', 'homepage-bulk-heading', homepageBulk);

    const inbox = createHomePageSideChild('../dist/images/inbox.svg', 'Inbox', homepageSide);
    const today = createHomePageSideChild('../dist/images/clipboard.svg', 'Today', homepageSide);
    const thisWeek = createHomePageSideChild('../dist/images/calendar-2.svg', 'This Week', homepageSide);
    createTextElement('h2', 'Projects', 'project-heading', homepageSide);
    const addProjectButton = createAddProject('../dist/images/plus.svg', 'Add Project', homepageSide);

    const addTaskButton = createAddTask(homepageBulk);
    addTaskButton.addEventListener('click', (taskTitle, projectToAddTo = undefined) => {
        taskTitle = prompt();
        projectToAddTo = prompt();

        if (taskTitle !== '') {
            if (!taskManager.isInProject(taskTitle)) createTask(taskTitle, homepageBulk);
            taskManager.addTask(taskTitle, projectToAddTo);
        }
    })

    addProjectButton.addEventListener('click', (projectTitle) => {
        projectTitle = prompt();

        if (projectTitle !== '') {
            if (!projectManager.projectExists(projectTitle)) createProject(projectTitle, homepageSide);
            projectManager.addProject(projectTitle);
        }
    })
}