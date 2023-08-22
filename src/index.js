import generateHomePage from "./home";
import { taskManager, project } from './task.js';

generateHomePage();
taskManager.addTask();
taskManager.addTask();
project('First');
