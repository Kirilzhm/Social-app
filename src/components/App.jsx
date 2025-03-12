import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestcitedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ChatPage = lazy(() => import('../pages/ChatPage/ChatPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage/SettingsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<PrivateRoute component={<HomePage />} />} />
        {/* Логін */}
        <Route
          path="login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        {/* Регістрація */}
        <Route
          path="register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        {/* Чат з користувачем */}
        <Route
          path="chat"
          element={<PrivateRoute component={<ChatPage />} />}
        />
        {/* Налаштування */}
        <Route
          path="settings"
          element={<PrivateRoute component={<SettingsPage />} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute component={<ProfilePage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
