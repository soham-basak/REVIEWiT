import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import "./Register.css";
import registerImg from "../../img/register-img.jpg";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password is incorrect");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <div className="register-form-container">
        <div className="register-picture">
          <img src={registerImg} alt="register-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="register" onSubmit={handleSubmit}>
                <div className="register__field">
                  <i className="register__icon fa fa-user"></i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-envelope"></i>
                  <input
                    type="email"
                    className="register__input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="register__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="register__input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="button register__submit" type="submit">
                  <span className="button__text">Register</span>
                  <i className="button__icon fa fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
