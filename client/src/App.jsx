import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Topics from "./pages/Topics/Topics";

function App() {
  return (
    <>
      <MainPage />
      <Topics />

      <Routes>
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
