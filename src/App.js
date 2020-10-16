import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="midHeight">
        <Nav />
        <Switch>
          <Route exact path={["/ReactPortfolio/", "/ReactPortfolio/home"]}>
            <Home />
          </Route>
          <Route exact path="/ReactPortfolio/about">
            <About />
          </Route>
          <Route exact path="/ReactPortfolio/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/ReactPortfolio/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
