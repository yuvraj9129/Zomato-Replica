import { React } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Input from "./Component/Input";

import DetailedPage from "./Component/Detailedpage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Input} />
          <Route path="/DetailedPage" component={DetailedPage} />
        </Switch>
      </div>
    </Router>
  );
}
