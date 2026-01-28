import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/confirm" element={<ConfirmPage />} />
    </Routes>
  );
}

export default App;
