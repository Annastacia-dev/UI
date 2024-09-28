import  { useState, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

// Initial to-do list state (used only when localStorage is empty)
const initialToDoList = [
  { title: 'Write script for next YouTube video', completed: false },
  { title: 'Record Instagram reel for Denri', completed: true },
  { title: 'Answer Q&A on Instagram stories', completed: false },
];

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(() => {
    // Retrieve the to-do list from localStorage, or use the initial state if empty
    const savedList = localStorage.getItem('toDoList');
    return savedList ? JSON.parse(savedList) : initialToDoList;
  });
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  // Effect to save the to-do list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  // Add new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setToDoList([...toDoList, { title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Delete task
  const handleDeleteTask = (index) => {
    const updatedList = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedList);
  };

  // Toggle task completion
  const handleToggleCompletion = (index) => {
    const updatedList = toDoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setToDoList(updatedList);
  };

  // Start editing task
  const startEditingTask = (index) => {
    setEditingTask(index);
    setEditText(toDoList[index].title); // Set editText to the current task title
  };

  // Edit task text on Enter key press
  const handleEditTask = (index, e) => {
    if (e.key === 'Enter' && editText.trim()) {
      const updatedList = toDoList.map((todo, i) =>
        i === index ? { ...todo, title: editText } : todo
      );
      setToDoList(updatedList);
      setEditingTask(null); // Stop editing after updating the task
    }
  };

  // Handle adding task on Enter key press
  const handleNewTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="h-[18rem] bg-slate-100 rounded text-sm relative">
      <h5 className="text-center pt-2 font-semibold capitalize p-2">
        to do list
      </h5>
      <hr className="border-1 border-slate-300" />

      <div className="flex flex-col gap-4 mt-4 p-2 scrollbar-thin overflow-y-scroll scrollbar-thumb-slate-500 scrollbar-track-slate-100 h-40">
        {toDoList.map((todo, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-xs font-medium relative"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(index)}
              className="w-4 h-4 rounded accent-black"
            />

            {editingTask === index ? (
              <input
                className="px-2 py-1 border-b border-slate-800 bg-slate-100"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleEditTask(index, e)}
                autoFocus
              />
            ) : (
              <p
                className={`text-left capitalize ${todo.completed ? 'line-through' : ''} cursor-pointer`}
                onClick={() => startEditingTask(index)} // Click to edit
              >
                {todo.title}
              </p>
            )}

            {/* Delete task button */}
            <MdDelete
              className="text-lg text-red-500 absolute right-0 cursor-pointer"
              onClick={() => handleDeleteTask(index)}
            />
          </div>
        ))}

        <div className="absolute bottom-2 left-0 right-0 flex items-center gap-2 p-2">
          <input
            className="px-4 py-2 border border-slate-800 rounded bg-slate-100 w-full text-xs"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleNewTaskKeyPress} // Add task on Enter key press
            placeholder="Add a new task..."
          />
          <button
            className="text-xl px-4 py-2 bg-black rounded text-white flex justify-center"
            onClick={handleAddTask}
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
