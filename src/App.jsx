import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DashBoard from "./DashBoard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DashBoard />} path="/home" />
      </Routes>
    </div>
  );
};

export default App;
