import React, { useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [course, setCourse] = useState("");

  const handlerCourse = (event) => {
    setCourse(event.target.value);
  };

  const Onsubmit = () => {
    if (fullname === "") {
      alert("please enter Name");
    }
    else{
    alert("Hello " + fullname + "  course: " + course);
    }
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={Onsubmit}>
        <label htmlFor="fullname">
          Name
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullname}
            onChange={(event) => {
              setFullname(event.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Course
          <select
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
        <br />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>

        <label>{fullname ? fullname : ""}</label>
        <label>{course ? course : ""}</label>
      </form>
    </>
  );
};

export default Form;
