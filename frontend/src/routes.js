import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Products from './pages/products/Products';
import NotImplemented from "./shared/NotImplemented/fuefuefue";
import Pants from './plan-b/pants';
import Shoes from './plan-b/shoes';
import Shirts from './plan-b/t-shirts';
import Contact from './plan-b/contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/produtos" component={Home} exact />
        <Route path="/contato" component={Contact} exact />
        {/* <Route path="/produtos/:id" exact render={(props) => <Products {...props} />}/> */}
        <Route path="/produtos/camisetas" component={Shirts} exact />
        <Route path="/produtos/calcas" component={Pants} exact />
        <Route path="/produtos/calcados" component={Shoes} exact />
        <Route component={NotImplemented} />
      </Switch>
    </BrowserRouter>
  );
}
