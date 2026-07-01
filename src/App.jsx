import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./DashBoard";
import ForgotPassword from "./ForgotPassword";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<Navigate to="/" replace />} path="*" />
      </Routes>
    </div>
  );
};

export default App;
