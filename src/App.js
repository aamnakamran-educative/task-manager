import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('low');
  const [dueDate, setDueDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        title: newTask,
        dueDate: dueDate,
        priority: newTaskPriority,
        completed: false,
        status: 'not done'
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setDueDate(null);
    }
  };

  const toggleStatus = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: task.status === 'not done' ? 'done' : 'not done'
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <TaskForm
        newTaskPriority={newTaskPriority}
        setNewTaskPriority={setNewTaskPriority}
        newTask={newTask}
        setNewTask={setNewTask}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTask={addTask}
      />
      <TaskList tasks={tasks} toggleStatus={toggleStatus} removeTask={removeTask} />
    </div>
  );
}

export default App;