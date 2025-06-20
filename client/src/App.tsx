import { BrowserRouter, Routes, Route } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LessonHubPage } from "./pages/LessonHubPage";

function RegisterAndLogout() {
    // localStorage.clear();
    return <RegisterPage />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hub" element={<LessonHubPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
