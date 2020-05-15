import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home/Home";
import Publications from "./pages/Publications/Publications";
import MyBook from "./pages/MyBook/MyBook";
import Partners from "./pages/Partners/Partners";
import Videos from "./pages/Videos/Videos";
//Components
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isEng, setIsEng] = useState(true);
  return (
    <Router className="App">
      <Navbar isEng={isEng} setIsEng={setIsEng} />
      <Switch>
        <Route path="/publications">
          <Publications isEng={isEng} />
        </Route>
        <Route path="/book">
          <MyBook isEng={isEng} />
        </Route>
        <Route path="/partners">
          <Partners isEng={isEng} />
        </Route>
        <Route path="/videos">
          <Videos isEng={isEng} />
        </Route>
        <Route exact path="/">
          <Home isEng={isEng} />
        </Route>
        <Route>
          <Home isEng={isEng} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
