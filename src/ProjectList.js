import React from 'react';
import Project from './Project';
import './App.css';
import {Link} from 'react-router-dom';

function ProjectList(){
  return (
    <div className="project-list-container">
      <div className="project-row">
      <Link to="/table"><Project name="College Details" link="/table" img="/logo192.png"/></Link>
{/*      <Project name="Speech Suite" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      <Project name="Smart Farmers' Assistant" link="http://fun-hub.herokuapp.com/games" img="/logo192.png"/>*/}
      </div>
      <div className="project-row">
      <Link to="/table"><Project name="Similar Colleges" link="/table" img="/logo192.png"/></Link>
{/*      <Project name="Todo List App" link="/projects/todo-list" img="/logo192.png"/>
      <Project name="Smart Farmers' Assistant" link="https://vithack.herokuapp.com/" img="/logo192.png"/>*/}
      </div>
    </div>
  );
}

export default ProjectList;