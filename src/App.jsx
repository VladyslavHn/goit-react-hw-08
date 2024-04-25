import './App.css'
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage '));
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from './components/Layout/Layout';


function App() {

  return (
    <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
