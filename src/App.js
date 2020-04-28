import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/layout";
import "./App.css";
import Posts from "./pages/Posts";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/addUs ">
              <AddUser />
            </Route>
            <Route path="/tweets">
              <Posts />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
