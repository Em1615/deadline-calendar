import { isOverdue, isThisWeek } from './dateHelpers';

export const filterTasks = (tasks, filterType) => {
  switch (filterType) {
    case 'thisWeek':
      return tasks.filter(task => isThisWeek(task.deadline));
    case 'overdue':
      return tasks.filter(task => isOverdue(task.deadline));
    default:
      return tasks;
  }
};