import React from "react";
import Output from "./output";
const Studentdata = () => {
  const data = [
    {
      id: 1,
      Name: "Mohit",
    },
    {
      id: 2,
      Name: "Rohit",
    },
    {
      id: 3,
      Name: "chohit",
    },
    {
      id: 4,
      Name: "Kohit",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <Output
            id={item.id}
            Name={item.Name}
          />
        );
      })}
    </>
  );
};

export default Studentdata;
