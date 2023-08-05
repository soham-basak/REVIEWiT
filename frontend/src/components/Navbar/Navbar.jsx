import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profilePic from "../../img/profile.png";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <h2>REVIEWiT</h2>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          {userInfo ? (
            <>
              <li className="nav-item" onClick={handleLogOut}>
                LOGOUT
              </li>
              <li className="nav-img">
                <Link to="/profile">
                  <img src={profilePic} alt="" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
