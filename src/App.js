import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstScreen from "./pages/FirstScreen";
import SecondScreen from "./pages/SecondScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen/>} />
        <Route path="/fixture/:id" element={<SecondScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
