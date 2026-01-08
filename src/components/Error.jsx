import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3 style = {{fontSize :"32px", color : "red", fontWeight : "bold"}}> !Oops</h3>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;

