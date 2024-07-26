import { Route, Routes, Link, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Topics from "./pages/Topics/Topics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
      <div><Outlet /></div>
    </div>
  );
}

export default App;
