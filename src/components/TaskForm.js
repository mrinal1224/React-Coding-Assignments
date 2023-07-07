import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() === '' || dueDate.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      dueDate: dueDate,
      completed: false,
    };
    addTask(newTask);
    setTaskName('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Due Date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;