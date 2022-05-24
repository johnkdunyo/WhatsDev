import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Login from "./pages/Login";
import Main from "./pages/Main";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route exact path="home" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
