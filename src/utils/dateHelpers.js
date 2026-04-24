export const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const isOverdue = (deadline) => {
  const today = getCurrentDate();
  return deadline < today;
};

export const isThisWeek = (deadline) => {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);
  return deadlineDate >= startOfWeek && deadlineDate <= endOfWeek;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU');
};