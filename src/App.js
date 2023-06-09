import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage/index";
import TrendingPage from "./pages/TrendingPage/index";
import UserPage from "./pages/UserPage/index";
import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/timeline" element={<HomePage />} />
          <Route path="/hashtag/:hashtag" element={<TrendingPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
