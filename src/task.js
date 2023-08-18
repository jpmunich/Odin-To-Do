let allTasks = [];

const task = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
}

export default function addTask() {
    const newTask = task('Task', 'This is a task', '19 August 2023', 'First', 'Some Notes', 'Everything Checked');
    allTasks.push(newTask);
    console.log(allTasks)
}

const project = () => {
    let projectTasks = [];
}

