import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import loginImg from "../../img/login-img.jpg";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="login-form-container">
        <div className="login-picture">
          <img src={loginImg} alt="login-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit}>
                <div className="login__field">
                  <i className="login__icon fa fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="button login__submit" type="submit">
                  <span className="button__text">Log In Now</span>
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

export default Login;
