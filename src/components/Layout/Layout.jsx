import { lazy } from 'react';

const Navigation = lazy(() => import('../Navigation/Navigation'));


const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navigation/>
          </header>
          <main>{children}</main>
    </div>
  )
}

export default Layout
