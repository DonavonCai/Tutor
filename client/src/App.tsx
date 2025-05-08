import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoutes";

function Logout() {
    // localStorage.clear();
    return <Navigate to="/login" />;
}

function RegisterAndLogout() {
    // localStorage.clear();
    return <Register />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
