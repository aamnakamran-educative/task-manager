import React from 'react';

function TaskItem({ task, toggleStatus, removeTask }) {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleStatus(task.id)}
      />
      <div>
        <p className={`mb-1 ${task.completed ? 'text-muted' : ''}`}>{task.title}</p>
        <p className="mb-0">Due Date: {task.dueDate.toLocaleDateString()}</p>
        <p className="mb-0">Priority: {task.priority}</p>
        <p className="mb-0">Completion: {task.completed ? 'Completed' : 'Not Completed'}</p>
      </div>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default TaskItem;
