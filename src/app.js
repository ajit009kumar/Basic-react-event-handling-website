import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookList from "./components/pages/bookList";
import Login from './components/pages/login';
const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path = '/login' component = {Login} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
