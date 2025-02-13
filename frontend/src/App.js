import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/body";
import LoginRegister from "./components/LoginRegister";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/" element={<Body/>}/>
      </Routes>
    </Router>
  );
}

export default App;
