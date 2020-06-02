import React from "react";
import { BrowserRouter, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";

import Home from "./pages/home/Home";
import Products from './pages/products/Products';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/produtos" component={Home} exact />
        <Route path="/produtos/:id" exact render={(props) => <Products {...props} />}/>
      </Switch>
    </BrowserRouter>
  );
}
