import TaskCard from '../TaskCard/TaskCard';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDelete }) => {
  // Сортируем по дате (от ближайшей к самой отдалённой)
  const sortedTasks = [...tasks].sort((a, b) => a.deadline.localeCompare(b.deadline));
  
  if (!sortedTasks.length) {
    return <p className={styles.empty}>Нет заданий. Добавьте первое!</p>;
  }
  
  return (
    <div className={styles.list}>
      {sortedTasks.map(task => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          deadline={task.deadline}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;