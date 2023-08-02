import React from "react";
import "./Register.css";
import registerImg from "../../img/register-img.jpg";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  return (
    <>
      <div className="register-form-container">
        <div className="register-picture">
          <img src={registerImg} alt="register-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="register">
                <div className="register__field">
                  <i className="register__icon fa fa-user"></i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Name"
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-envelope"></i>
                  <input
                    type="email"
                    className="register__input"
                    placeholder="Email"
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="register__input"
                    placeholder="Password"
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="register__input"
                    placeholder="Confirm Password"
                  />
                </div>
                <button className="button register__submit">
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
