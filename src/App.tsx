import "./App.css";

import { Route, Routes } from 'react-router-dom';

import LoginPage from './features/LoginPage/components/LoginPage';
import RegistrationPage from './features/RegistrationPage';
import UserProfilePage from './features/ProfilePage/components/UserProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/create-account" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
