import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home/Home";
import Publications from "./pages/Publications/Publications";
//Components
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [isEng, setIsEng] = useState(true);
  return (
    <div className="App">
      <Router>
        <Navbar isEng={isEng} setIsEng={setIsEng} />
        <Switch>
          <Route path="/publications">
            <Publications isEng={isEng} />
          </Route>
          <Route path="/">
            <Home isEng={isEng} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
