import styles from './TaskCard.module.css';
import { isOverdue, formatDate } from '../../utils/dateHelpers';

const TaskCard = ({ id, name, deadline, onDelete }) => {
  const overdue = isOverdue(deadline);
  
  return (
    <div className={`${styles.card} ${overdue ? styles.overdue : ''}`}>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.deadline}>
          📅 Дедлайн: {formatDate(deadline)}
          {overdue && <span className={styles.badge}>Просрочено!</span>}
        </p>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Удалить
      </button>
    </div>
  );
};

export default TaskCard;