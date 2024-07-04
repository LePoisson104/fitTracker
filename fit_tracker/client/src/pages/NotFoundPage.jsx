import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page Not Found</p>
      <Link to="/" className="not-found-home-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
