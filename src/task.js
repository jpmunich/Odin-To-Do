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
    const addTask = (title, projectTitle = undefined) => {
        const newTask = task(title);
        if (!isInProject(newTask.title)) {
            allTasks.push(newTask); 
            if (projectManager.projectExists(projectTitle) && !(projectTitle === undefined)) {
                projectManager.addTaskToProject(newTask, projectManager.getProject(projectTitle));
            }
        } else console.log('ERROR');

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
        else console.log('ERROR');
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

    return { addProject, addTaskToProject, removeProject, getProject, projectExists };
})();

export { taskManager, projectManager };
