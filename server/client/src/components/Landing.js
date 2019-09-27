import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
        <h1>I am the landing page</h1>
      <div className="col s6">
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Landing;
