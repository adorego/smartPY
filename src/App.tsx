import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "./Pages/Home";
import {LoginPage} from "./Pages/LoginPage";







function App() {

  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </Switch>



  )
}
export default App;
