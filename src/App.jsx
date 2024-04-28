import './App.css'
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from './components/Layout/Layout';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage ';
import LoginPage from './pages/LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from './redux/auth/operations';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser())
  }, [dispatch]);

  return (
    <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          } />
          <Route path="/login" element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          } />
          <Route path="/contacts" element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
            } />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
