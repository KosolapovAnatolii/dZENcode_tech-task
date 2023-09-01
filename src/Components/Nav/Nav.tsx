import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) => cn('nav__link', {'is-active': isActive});

  return (
    <nav className="side-bar__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/orders" className={getActiveClass}>
            Приходы
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/groups" className={getActiveClass}>
            Группы
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/products" className={getActiveClass}>
            Продукты
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/users" className={getActiveClass}>
            Пользователи
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/settings" className={getActiveClass}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}