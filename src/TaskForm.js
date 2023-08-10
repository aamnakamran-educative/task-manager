import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TaskForm({ newTaskPriority, setNewTaskPriority, newTask, setNewTask, dueDate, setDueDate, addTask }) {
  return (
    <div className="task-input mb-3">
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
        className="ml-2"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <DatePicker
        selected={dueDate}
        onChange={date => setDueDate(date)}
        dateFormat="dd/MM/yyyy"
        className="ml-2"
        placeholderText="Select Due Date"
      />
      <button className="ml-2" onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;