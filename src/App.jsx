import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Auth />} path="/auth" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<Navigate to="/" replace />} path="*" />
      </Routes>
    </div>
  );
};

export default App;
