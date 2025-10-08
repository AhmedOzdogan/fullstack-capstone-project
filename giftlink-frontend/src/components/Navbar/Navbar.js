import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlConfig } from "../../config";
import { useAppContext } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useAppContext();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const authTokenFromSession = sessionStorage.getItem("auth-token");
    const nameFromSession = sessionStorage.getItem("name");
    if (authTokenFromSession) {
      if (isLoggedIn && nameFromSession) {
        setUserName(nameFromSession);
      } else {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        setIsLoggedIn(false);
      }
    }
  }, [isLoggedIn, setIsLoggedIn, setUserName]);
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate(`/app`);
  };
  const profileSecton = () => {
    navigate(`/app/profile`);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <nav className="navbar " id="navbar_container">
        <a className="navbar-brand" href={`/app`}>
          GiftLink
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home.html" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app" onClick={closeNavbar}>
                Gifts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/search" onClick={closeNavbar}>
                Search
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "black", cursor: "pointer" }}
                    onClick={profileSecton}
                  >
                    {userName}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/app/login"
                    onClick={closeNavbar}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/app/register"
                    onClick={closeNavbar}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
