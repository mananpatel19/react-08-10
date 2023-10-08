import React, { useState } from "react";

// const Form = () =>{

//     return(
//        <>
// <h1>Student Form submit</h1>
//        </>
//     )
// };

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [course, setCourse] = useState("MCA");
  const handlerCourse = (event) => {
    setCourse(event.target.value);
  };
  return (
    <>
      <h2>Form</h2>
      <form
        onSubmit={(event) => {
          if (fullname !== "")
            alert(`Welcome, ${fullname}. You have choosen ${course}!`);
          else alert("Please enter your name!");
          event.preventDefault();
        }}
      >
        <label htmlFor="fullname">
          Name
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="fullname"
            value={fullname}
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
        </label>
        <label>
          Course
          <select
            className="form-select"
            id="course"
            name="course"
            value={course}
            onChange={handlerCourse}
          >
            <option>BCA</option>
            <option>BScIT</option>
            <option>MCA</option>
            <option>MScIT</option>
          </select>
        </label>

        {fullname ? (
          <label>
            <strong>{fullname}</strong> has selected <strong>{course}</strong>
          </label>
        ) : (
          ""
        )}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
