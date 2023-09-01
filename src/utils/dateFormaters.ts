export function prepeadProductDate(date: string) {
  const cutedDate = date.split(' ')[0];
  const prepeadedDate = cutedDate.replace(/-/g, "/");

  return prepeadedDate;
};

function getMonthName(month: string) {
  const months = [
    'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
    'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
  ];
  return months[parseInt(month) - 1];
};

export function prepeadOrderDate(date: string) {
  const datePart = date.split(' ')[0];

  const [year, month, day] = datePart.split('-');

  const fullDate = `${day} / ${getMonthName(month)} / ${year}`;
  const shortDate = `${month} / ${year.slice(-2)}`;

  return {fullDate, shortDate};
};
