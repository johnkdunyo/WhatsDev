import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import socketClient from "socket.io-client";


// import pages
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";


function App() {
  const SERVER = "http://127.0.0.1:3005";
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/home" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
