import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <div className="homepage">
        <h1>Welcome to the Online Quiz Platform</h1>
        <Link to="/quiz">
          <button>Take a Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
