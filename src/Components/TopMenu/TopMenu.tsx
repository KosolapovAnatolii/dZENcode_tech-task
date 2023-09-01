import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import clock from '../../images/icon-clock.svg';
import { CurrentDate } from '../../Types/Date';

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Мая.', 'Июн.', 'Июл.', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'];

export const TopMenu = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate]= useState<CurrentDate>({
    dayOfWeek: '',
    numberOfDay: 0,
    month: '',
    year: 0
  });
  const [activeSessions, setActiveSessions] = useState(0);

  // useEffect(() => {
  //   const socket = io('http://localhost:5500'); 

  //   socket.on('activeSessionsCount', (count: number) => {
  //     setActiveSessions(count);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');

      const currentDate = {
        dayOfWeek: daysOfWeek[currentTime.getDay()],
        numberOfDay: currentTime.getDate(),
        month: months[currentTime.getMonth()],
        year: currentTime.getFullYear()
      }

      setTime(`${hours}:${minutes}`);
      setDate(currentDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="top__menu d-flex gap-3 align-items-end">
      <div className="top__menu--sessions">
        <span>Пользователей онлайн: {activeSessions}</span>
      </div>

      <div className="top__menu--date">
        <span>{date.dayOfWeek}</span>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <span>{`${date.numberOfDay} ${date.month}, ${date.year}`}</span>
          <div className="d-flex justify-content-centr align-items-center">
            <img 
              src={clock} 
              alt="clock"
              className="clock"
            />
          </div>
          <span>{time}</span>
        </div>
      </div>      
    </div>
  )
}