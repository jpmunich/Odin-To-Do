import generateHomePage from "./home";
<<<<<<< HEAD
import { taskManager, projectManager } from './task.js';

generateHomePage();

taskManager.addTask();
projectManager.addProject('First');
projectManager.addProject('First');
projectManager.removeProject(0);
projectManager.addProject('First');
projectManager.removeProject(1);
projectManager.addProject('First');
=======
import { taskManager } from "./task.js";

generateHomePage();
taskManager.addTask("Task One");
taskManager.addTask("Task Two");
taskManager.addTask("Task Three");
taskManager.removeTask('Task');
>>>>>>> different-project-logic
