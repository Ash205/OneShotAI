import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import ProjectList from './ProjectList';
import './App.css';
import Table from './Table'
import Chart from './Chart'

function App(){
  return (
    
    <Router >
    <div className="container">
      <Nav />
      <Routes />
    </div>
    </Router>
   
  );
}

const Routes = (props)=>{
    
    return (
      <Switch> 
        <Route path='/' exact><div className="assign">OneShotAI Assignment</div></Route>
        <Route path='/projects' exact>  <ProjectList /> </Route>
        <Route path='/table' exact>  <Table /> </Route>
        <Route path='/dashboard' exact>  <Chart /> </Route>
      </Switch>
    );
}

export default App;