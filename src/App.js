import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/navbar"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Vanh from "./pages/vanh"
import Footer from './components/footer/footer';
function App() {

  return (
    <Router>
      <div>
      <Nav />
      <Wrapper>
        <Switch>
        <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />   
          <Route exact path="/Vanh" component={Vanh} />
          </Switch>
      </Wrapper>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;