import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Switch, Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Switch>
      <Route  exact path="/"> <News  key="general" country="us" category="general"/></Route>
      <Route path="/business"> <News  key="business"country="us" category="business"/></Route>
      <Route path="/entertainment"> <News  key="entertainment"country="us" category="entertainment"/></Route>
      <Route path="/general"> <News key="general" country="us" category="general" /></Route>
      <Route path="/healthscience"> <News key="healthscience" country="us" category="healthscience" /></Route>
      <Route path="/sports"> <News key="sports" country="us" category="sports" /></Route>
      <Route path="/technology"> <News  key="technology"country="us" category="technology" /></Route>
    </Switch>
    </div>
    )
  }
}

