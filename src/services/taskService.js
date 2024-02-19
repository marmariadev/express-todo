let tasks = [];
let nextId = 1;

const createTask = async (taskData) => {
    const newTask = { id: nextId++, ...taskData, createdAt: new Date(), updatedAt: new Date() };
    tasks.push(newTask);
    return newTask;
};

const getTasks = async () => {
    return tasks;
};

const updateTask = async (taskId, taskData) => {
    const index = tasks.findIndex(task => task.id === parseInt(taskId));
    if (index === -1) return null;

    tasks[index] = { ...tasks[index], ...taskData, updatedAt: new Date() };
    return tasks[index];
};

const deleteTask = async (taskId) => {
    const index = tasks.findIndex(task => task.id === parseInt(taskId));
    if (index === -1) return null;

    const [deletedTask] = tasks.splice(index, 1);
    return deletedTask;
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};