import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import gear from '../../images/icon-gear.svg';
import { Nav } from '../Nav';

export const SideBar = () => {
  return (
    <div className="side-bar bg-light d-flex flex-column align-items-center gap-5">
      <div className="side-bar__photo">
        <FaUser size={90} />
        <div className="side-bar__settings d-flex justify-content-center align-items-center">
          <Link to="/settings">
            <img 
              src={gear} 
              alt="settings" 
              className="side-bar__gear"
            />
          </Link>
        </div>
      </div>
      <Nav />
    </div>
  );
}