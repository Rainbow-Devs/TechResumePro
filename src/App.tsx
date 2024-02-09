import "./App.css";
import LoginPage from "./features/LoginPage/components/LoginPage";
import { Route, Routes } from "react-router-dom";
import UserProfilePage from "./features/UserProfilePage/components/UserProfilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
