import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


// import pages
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";






function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route index exact  path="/" element={<ProtectedRoute Component={Main} />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
