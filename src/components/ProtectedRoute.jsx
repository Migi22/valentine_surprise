import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const unlocked = sessionStorage.getItem("valentine_unlocked") === "true";

  if (!unlocked) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;