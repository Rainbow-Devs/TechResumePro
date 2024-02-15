import LoginPage from "./features/LoginPage/components/LoginPage";
import { Route, Routes } from "react-router-dom";
import UserProfilePage from "./features/ProfilePage/components/UserProfilePage";
import LandingPage from "./features/LandingPage/components/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
