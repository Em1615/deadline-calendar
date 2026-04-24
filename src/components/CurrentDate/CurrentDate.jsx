import { useState, useEffect } from 'react';
import { formatDate, getCurrentDate } from '../../utils/dateHelpers';
import styles from './CurrentDate.module.css';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  
  useEffect(() => {
    // Обновляем дату каждый день при изменении
    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 86400000); // 24 часа
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={styles.date}>
      📅 Сегодня: <strong>{formatDate(currentDate)}</strong>
    </div>
  );
};

export default CurrentDate;