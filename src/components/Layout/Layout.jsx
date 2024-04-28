

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { apiLogout } from '../../redux/auth/operations';


const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn)

  const logout = () => {
    if (isSignedIn) {
      dispatch(apiLogout());
    }
  };

  return (
    <div>
      <header>
        <nav className={css.container}>
      <NavLink className={css.link} to="/">Home</NavLink>
      {isSignedIn ? (
        <>
          <NavLink className={css.link} to="/contacts">Contacts</NavLink>
            <div>
                <button onClick={logout} type='button'>Logout</button>
            </div>
        </>
            
      ) : (
        <>
          <NavLink className={css.link} to="/register">Register</NavLink>
          <NavLink className={css.link} to="/login">Login</NavLink>
        </>
        )}
    </nav>
          </header>
          <main>{children}</main>
    </div>
  )
}

export default Layout
