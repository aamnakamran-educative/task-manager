import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
        status: 'not done' // New status property
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

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === 'not done' ? -1 : 1; // Display 'not done' tasks first
    }
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <div className="task-input mb-3 d-flex align-items-center">
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          className="form-control ml-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <DatePicker
          selected={dueDate}
          onChange={date => setDueDate(date)}
          dateFormat="dd/MM/yyyy"
          className="form-control ml-2"
          placeholderText="Select Due Date"
        />
      </div>
      <div><button className="btn btn-primary btn-sm ml-2" onClick={addTask}>Add Task</button></div>
    
      
      <div className="task-list">
        <div className="task-group">
          <ul className="list-group">
            {sortedTasks.map(task => (
              <li key={task.id} className="list-group-item d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleStatus(task.id)}
                  className="mr-3"
                />
                <div>
                  <p className={`mb-1 ${task.completed ? 'text-muted' : ''}`}>{task.title}</p>
                  <p className="mb-0">Due Date: {task.dueDate.toLocaleDateString()}</p>
                  <p className="mb-0">Priority: {task.priority}</p>
                  <p className="mb-0">Completion: {task.completed ? 'Completed' : 'Not Completed'}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeTask(task.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
