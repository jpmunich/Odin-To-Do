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
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
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

