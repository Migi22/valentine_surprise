import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Surprise from "./pages/Surprise";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/surprise"
          element={
            <ProtectedRoute>
              <Surprise />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;