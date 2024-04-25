import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">Home</NavLink>
      <NavLink className={css.link} to="/register">Register</NavLink>
      <NavLink className={css.link} to="/login">Login</NavLink>
      <NavLink className={css.link} to="/contacts">Contacts</NavLink>
    </nav>
  )
}

export default Navigation
