import { NavLink } from 'react-router-dom';


const AuthNav = () => {
  return (
    <div >
      <NavLink to="/register" >
        Registration
      </NavLink>
      <NavLink to="/login" >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;