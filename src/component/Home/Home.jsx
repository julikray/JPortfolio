import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2>Building Digital Experience That Inspire</h2>
        <p>
          Passionate Frontend Developer | BCA Student
        </p>
      </div>

      <div className="home-img">
        <div>
          <div className="tech-icon">
            <img src="./image/git.png" alt="image" />
          </div>
          <img src="./image/about.jpg" alt="image" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./image/firebase.png" alt="image" />
          </div>
          <div className="tech-icon">
            <img src="./image/logo192.png" alt="image" />
          </div>
          <div className="tech-icon">
            <img src="./image/mongodb.png" alt="image" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;
