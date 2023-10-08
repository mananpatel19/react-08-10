import React from "react";
import { Link } from "react-router-dom";

const Spalink = () => {
  return (
    <>
      <h1>SPA Link</h1>
      <Link to="/welcome">Home</Link>
      <br />
      <Link to="/form">Student Form</Link>
      <br />
      <Link to="/output">output</Link>
    </>
  );
};

export default Spalink;
