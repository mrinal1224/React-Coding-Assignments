import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.name}</span> - <span>{task.dueDate}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;