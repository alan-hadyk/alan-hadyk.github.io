import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "pages/Home/HomePage";
import NoMatchPage from "pages/NoMatch/NoMatchPage";

const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="*">
      <NoMatchPage />
    </Route>
  </Switch>
);

export default App;
