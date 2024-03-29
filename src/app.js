import React,{useState} from 'react'
import './styles/app.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Header from './elements/header'
import Nav from './elements/nav'
import Home from './elements/homeRoute'






function App() {
    const [searchVal , setSearchVal] = useState("")

    return (
        <Router>
        <div className="base" >
            <Header searchVal={searchVal} setSearchVal={setSearchVal} />
            <div className="home-wrapper" >
            <Switch>
                <Route exact path="/">
                    <Home searchVal={searchVal} />
                </Route>
                <Route exact path="/explore"  >
                    <span>This is explore tab</span>
                </Route>
                <Route exact path="/cart">
                    <span>This is cart tab</span>
                </Route>
                <Route exact path="/chat">
                    <span>This is chat tab</span>
                </Route>
                <Route exact path="/profile">
                    <span>This is profile tab</span>
                </Route>
            </Switch>
            </div>
            <Nav />
        </div>
        </Router>
    )
}

export default App
