import React from 'react'
import Header from './Header'
import { Main } from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Home from './Home'
import Counter from "../Counter";
import "./Main.css"

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Employees from '../Employees'
import ParentEmployee from '../ParentEmployee'
import Todo from '../todo/Todo'


export default function MainLayout() {
    return (
        <BrowserRouter>
          <div id="container">
              <Header />
              <Sidebar />
              <Main>
                  <Switch>
                  <Route exact path="/home" component ={Home} />
                  <Route exact path="/employees" component ={Employees} />
                  <Route exact path="/counter" component ={Counter} />
                  <Route exact path="/parentEmployee" component ={ParentEmployee} />
                  <Route exact path="/todo" component ={Todo} />
                  </Switch>
              </Main>
              <Footer />
          </div>
        </BrowserRouter>
    );
};

