import { useState } from 'react';
import { getCurrentDate } from '../../utils/dateHelpers';
import styles from './TaskForm.module.css';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState(getCurrentDate());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Введите название задания');
      return;
    }
    onAddTask({ name: name.trim(), deadline });
    setName('');
    setDeadline(getCurrentDate());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Новое задание</h3>
      <input
        type="text"
        placeholder="Название задания"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Добавить</button>
    </form>
  );
};

export default TaskForm;