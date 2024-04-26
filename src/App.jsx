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


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser)
  }, [dispatch]);

  return (
    <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
