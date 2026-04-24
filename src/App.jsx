import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import Filter, { FILTERS } from './components/Filter/Filter';
import TaskForm from './components/TaskForm/TaskForm';
import CurrentDate from './components/CurrentDate/CurrentDate';
import { initialTasks } from './data/initialTasks';
import { filterTasks } from './utils/filterTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [currentFilter, setCurrentFilter] = useState(FILTERS.ALL);

  const filteredTasks = filterTasks(tasks, currentFilter);

  const handleAddTask = (newTask) => {
    const newId = Date.now();
    setTasks(prev => [...prev, { ...newTask, id: newId }]);
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>📅 Календарь дедлайнов</h1>
      <CurrentDate />
      <TaskForm onAddTask={handleAddTask} />
      <Filter currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;