import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { useUpdateUserMutation } from "../../slices/userApiSlice";
import "./Profile.css";
import profileUpdaterImg from "../../img/update-profile.jpg";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateUser({
          _id: userInfo._id,
          name: name,
          email: email,
          password: password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile updated");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <div className="profile-form-container">
        <div className="profile-picture">
          <img src={profileUpdaterImg} alt="profile-img" />
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="profile" onSubmit={handleSubmit}>
                <div className="profile__field">
                  <i className="profile__icon fa fa-user"></i>
                  <input
                    type="name"
                    className="profile__input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-envelope"></i>
                  <input
                    type="email"
                    className="profile__input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="profile__input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="profile__field">
                  <i className="profile__icon fa fa-lock"></i>
                  <input
                    type="password"
                    className="profile__input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="button profile__submit" type="submit">
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
