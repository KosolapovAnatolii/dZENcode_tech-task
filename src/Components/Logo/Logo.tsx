import logo from '../../images/logo.jpeg';
// import './logo.scss';

export const Logo = () => {
  return (
    <div className="logo d-flex align-items-center">
      <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
        <img
          className="logo__image"
          src={logo} 
          alt="logo" 
        />

        <span className="text-warning text-uppercase fw-bold">
          inventory
        </span>
      </a>
    </div>
  )
}