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
    }

    return { addTask, removeTask };
})();

const projectManager = (() => {
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