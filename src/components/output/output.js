import React from "react";

const Output = (props) => {
  return (
    <>
      <div>
        <span>Student Id: {props.id}</span><br/>
        <span>Student Name: {props.Name}</span>
      </div>
    </>
  );
};

export default Output;
