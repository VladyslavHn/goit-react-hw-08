

import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'


const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn)
  return (
    <div>
      <header>
        <nav className={css.container}>
      <NavLink className={css.link} to="/">Home</NavLink>
      {isSignedIn ? (
        <>
          <NavLink className={css.link} to="/contacts">Contacts</NavLink>
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
