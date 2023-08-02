import React from "react";
import "./Profile.css";
import profileUpdaterImg from "../../img/update-profile.jpg";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  return (
    <>
      <div className="profile-form-container">
        <div className="profile-picture">
          <img src={profileUpdaterImg} alt="profile-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="profile">
                <div className="profile__field">
                  <i className="profile__icon fa fa-user"></i>
                  <input
                    type="text"
                    className="profile__input"
                    placeholder="Name"
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-envelope"></i>
                  <input
                    type="email"
                    className="profile__input"
                    placeholder="Email"
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="profile__input"
                    placeholder="Password"
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="profile__input"
                    placeholder="Confirm Password"
                  />
                </div>
                <button className="button profile__submit">
                  <span className="button__text">Update Profile</span>
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

export default Profile;
