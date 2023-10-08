import React from "react";
import {  Route, Routes } from "react-router-dom";
import Form from "../form/form";
import Output from "../output/output";
import Welcome from "../welcome/welcome";


const PageRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/"  />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/form" element={<Form />} />
                <Route path="/output" element={<Output />} />
            </Routes>
        </>
    );
};

export default PageRouter;
