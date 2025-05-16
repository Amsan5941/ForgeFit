import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginButton from './Components/Logins/LoginButton';
import LoginPage from './Components/Logins/LoginPage';
import About from "./Components/About/About";
import Tracker from "./Components/Tracker/Tracker";
import ChatBot from "./Components/ChatBot/Chat";
import Contact from "./Components/Contact/Contact";
import RegisterPage from './Components/Logins/RegisterPage';
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/tracker" element={<Tracker />}/>
        <Route path="/chat" element={<ChatBot />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
