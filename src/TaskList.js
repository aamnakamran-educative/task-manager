import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleStatus, removeTask }) {
  return (
    <div className="task-list">
      <div className="task-group">
        <ul className="list-group">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleStatus={toggleStatus}
              removeTask={removeTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;