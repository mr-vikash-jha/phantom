import React from "react";
import "./App.css";
import Card from "./components/Card";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Card>
          <Header />
          <Routes>
            <Route exact path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
          </Routes>
        </Card>
      </BrowserRouter>
    </div>
  );
};

export default App;
