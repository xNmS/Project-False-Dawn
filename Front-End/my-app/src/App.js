import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
import Header from "./Header.js";
import Progress from "./Progress.js";
import Name from "./Name.js";
import DateOfBirth from "./DateOfBirth.js";
import Smoker from "./Smoker.js";
import PolicyType from "./PolicyType.js";
import CoverType from "./CoverType.js";
import Duration from "./Duration.js";
import Address from "./Address.js";
import Amount from "./Amount.js";
import Summary from "./Summary.js";
import Buttons from "./Buttons.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Progress />
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/dateofbirth" element={<DateOfBirth />} />
          <Route path="/smoker" element={<Smoker />} />
          <Route path="/policytype" element={<PolicyType />} />
          <Route path="/covertype" element={<CoverType />} />
          <Route path="/duration" element={<Duration />} />
          <Route path="/address" element={<Address />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        <Buttons />
      </Router>
    </div>
  );
}

export default App;
