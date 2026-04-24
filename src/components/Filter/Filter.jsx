import styles from './Filter.module.css';

export const FILTERS = {
  ALL: 'all',
  THIS_WEEK: 'thisWeek',
  OVERDUE: 'overdue'
};

const Filter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <button
        className={`${styles.filterButton} ${currentFilter === FILTERS.ALL ? styles.active : ''}`}
        onClick={() => onFilterChange(FILTERS.ALL)}
      >
        Все задания
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === FILTERS.THIS_WEEK ? styles.active : ''}`}
        onClick={() => onFilterChange(FILTERS.THIS_WEEK)}
      >
        Текущая неделя
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === FILTERS.OVERDUE ? styles.active : ''}`}
        onClick={() => onFilterChange(FILTERS.OVERDUE)}
      >
        Просроченные
      </button>
    </div>
  );
};

export default Filter;