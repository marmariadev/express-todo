const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body)
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const updatedTask = await taskService.updateTask(taskId, req.body);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const deletedTask = await taskService.deleteTask(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};