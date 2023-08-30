<<<<<<< HEAD
import { createTask, removeTask } from './UIController.js';

let allTasks = [];
let allProjects = [];

const task = (title, description, dueDate, priority, notes, checklist) => {
    let index = null;
    return { title, description, dueDate, priority, notes, checklist, index };
}

const project = (title) => {
    return { title };
}

const taskManager = (() => {
    function addTask() {
        const newTask = task('Task', 'This is a task', '19 August 2023', 'First', 'Some Notes', 'Everything Checked');
        allTasks.push(newTask);
        newTask.index = allTasks.indexOf(allTasks[allTasks.length -  1]);
        createTask(newTask.title);
    }
    
    function removeTask(task) {
        const removedIndex = task;
    
        allTasks.splice(task, 1);
        allTasks.forEach(todo => {if (todo.index > 0 && todo.index > removedIndex) todo.index -= 1});
=======
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
    const addTask = (title) => {
        const newTask = task(title);
        if (!isInProject(newTask.title)) allTasks.push(newTask);
        else console.log('ERROR');
        console.log(allTasks)
    }

    const removeTask = (title) => {
        allTasks = allTasks.filter((task) => task.title !== title);
        console.log(allTasks)
    }

    const getTask = (taskTitle) => {
        return allTasks.filter((task) => task.title === taskTitle);
    }

    const isInProject = (taskTitle) => {
        return allTasks.some((task) => task.title === taskTitle);
>>>>>>> different-project-logic
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
<<<<<<< HEAD
    function addProject(priority) {
        const newProject = project('Project One');
        allProjects.push(newProject);

        const projectTasks = allTasks.filter(task => task.priority = priority);
    }

    function removeProject(project) {
        const removedIndex = project;

        allProjects.splice(project, 1);
        allProjects.forEach(project => {if (project.index > 0 && project.index > removedIndex) project.index -= 1});
    }
    return { addProject, removeProject };
})();

export { taskManager, projectManager, allTasks };

=======
    const addProject = (title) => {
        const newProject = project(title);
        if (!projectExists(title)) allProjects.push(newProject);
        else console.log('ERROR');
    }

    const removeProject = (projectTitle) => {
        allProjects = allProjects.filter((project) => project.title === projectTitle);
    }
    
    const projectExists = (projectTitle) => {
        return allProjects.some((project) => project.title === projectTitle);
    }

    return { addProject, removeProject };
})();

export { taskManager, projectManager };
>>>>>>> different-project-logic
