import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import SearchPage from "./components/SearchPage/SearchPage";
import Profile from "./components/Profile/Profile";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* the final code will not pass the products to every page, but each page will call the server API */}
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/app/search" element={<SearchPage />} />
        <Route path="/app/login" element={<LoginPage />} />
        <Route path="/app/product/:productId" element={<DetailsPage />} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="/app/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
