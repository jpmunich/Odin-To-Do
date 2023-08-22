import generateHomePage from "./home";
import { taskManager, projectManager } from './task.js';

generateHomePage();

taskManager.addTask();
projectManager.addProject('First');
projectManager.addProject('First');
projectManager.removeProject(0);
projectManager.addProject('First');
projectManager.removeProject(1);
projectManager.addProject('First');
