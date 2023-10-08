import React from "react";
import Spalink from "./SPAlink";
import PageRouter from "./router/router";
import Static from "./ststiclink";

const Controller = () => {
  return (
    <>
      <Spalink />
      <Static />
      <PageRouter />
    </>
  );
};

export default Controller;
