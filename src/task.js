let allTasks = [];
let allProjects = [];

const task = (title, description, dueDate, priority, notes, checklist) => {
    let index = null;
    return { title, description, dueDate, priority, notes, checklist, index };
}

const taskManager = (() => {
    function addTask() {
        const newTask = task('Task', 'This is a task', '19 August 2023', 'First', 'Some Notes', 'Everything Checked');
        allTasks.push(newTask);
        newTask.index = allTasks.indexOf(allTasks[allTasks.length -  1]);
    }
    
    function removeTask(task) {
        const removedIndex = task;
    
        allTasks.splice(task, 1);
        allTasks.forEach(todo => {if (todo.index > 0 && todo.index > removedIndex) todo.index -= 1})
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
    function addProject() {

    }
})();
const project = (priority) => {
    let projectTasks = allTasks.filter(task => task.priority = priority);
    console.log(projectTasks);
}
export { taskManager, project };

