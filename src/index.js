import generateHomePage from "./home";
import { taskManager } from "./task.js";

generateHomePage();
taskManager.addTask("Task One");
taskManager.addTask("Task Two");
taskManager.addTask("Task Three");
taskManager.removeTask('Task');
