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

export { taskManager, projectManager };
