import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user") && dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ textDecoration: "none", color: "white" }}>
          <span className='logo'>lamabooking</span>
        </Link>
        {user ? (
          <div className='userArea'>
            <div className='userName'>{user.username}</div>
            <FontAwesomeIcon
              className='logoutIcon'
              onClick={handleLogout}
              icon={faRightFromBracket}
              title='Logout'
            />
          </div>
        ) : (
          <div className='navItems'>
            <button onClick={handleClick} className='navButton'>
              Register
            </button>
            <button onClick={handleClick} className='navButton'>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
