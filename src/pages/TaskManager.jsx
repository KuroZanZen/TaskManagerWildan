import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "New task is created and added to the list",
      completed: false,
    },
    {
      id: 2,
      text: "Clicking the checkbox toggles the completeness",
      completed: false,
    },
    {
      id: 3,
      text: "Delete button will delete the task from the list",
      completed: false,
    },
    {
      id: 4,
      text: "Complete tasks show at the end with strikethrough",
      completed: true,
    },
    {
      id: 5,
      text: "Marking in-complete will put it back in pending list",
      completed: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Sort tasks: pending first, then completed
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  const renderTasks = () => {
    return sortedTasks.map((task) => (
      <div
        key={task.id}
        className="group flex items-center justify-between border-b border-gray-100 pb-3"
      >
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => toggleTask(task.id)}
            className={`w-6 h-6 rounded-md border-2 border-gray-800 flex items-center justify-center transition-colors ${
              task.completed ? "bg-gray-500 border-gray-500" : "bg-white"
            }`}
          >
            {task.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <span
            className={`text-lg transition-all ${
              task.completed
                ? "text-gray-400 line-through decoration-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.text}
          </span>
        </div>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-black hover:text-red-500 transition-colors p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    ));
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center p-4 font-sans text-gray-800">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          task wildan-ganteng
        </h1>

        <div className="relative mb-8">
          <input
            type="text"
            className="w-full border-2 border-gray-800 rounded-xl py-3 px-4 pr-12 text-lg placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
            placeholder="Start writing and press enter to create task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addTask}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">{renderTasks()}</div>
      </div>
    </div>
  );
};

export default TaskManager;
