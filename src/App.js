import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Create from "./components/Create";
import BlogDetails from "./components/blogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route  exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
