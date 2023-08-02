import React from "react";
import "./Login.css";
import loginImg from "../../img/login-img.jpg";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <div className="login-form-container">
        <div className="login-picture">
          <img src={loginImg} alt="login-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <i className="login__icon fa fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Email"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fa fa-chevron-right"></i>
                </button>
              </form>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a
                    href="#"
                    className="social-login__icon fab fa-instagram"
                  ></a>
                  <a
                    href="#"
                    className="social-login__icon fab fa-facebook"
                  ></a>
                  <a href="#" className="social-login__icon fab fa-twitter"></a>
                </div>
              </div>
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
