import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Google from "./Components/Google/Google";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Email from "./Components/Email/Email";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/google" element={<Google />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
