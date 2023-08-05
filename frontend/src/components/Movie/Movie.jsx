import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  return (
    <>
      <div className="movie">
        <article className="card">
          <img
            className="card__background"
            src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">
              <Link className="link" to="/movie">
                Review
              </Link>
            </button>
          </div>
        </article>

        <article className="card">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>

        <article className="card">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>

        <article className="card">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>

        <article className="card">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>

        <article className="card">
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Movie;
