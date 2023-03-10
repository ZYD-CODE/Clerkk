import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
// import RecorderPage from "./Pages/RecorderPage";
import RecorderPage from "./pages/RecorderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/recorder" element={<RecorderPage />} /> */}
        <Route path="/recorder" element={<RecorderPage />} />
      </Routes>
    </div>
  );
}

export default App;
