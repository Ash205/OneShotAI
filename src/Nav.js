import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav(){
  const linkstyle = {
    color:'white',
    textTransform: 'uppercase',
    height: '30px'
  };

  return (
    <div className="nav-container">
        <div className="nav-logo">
            <Link to='/' > <img src="/logo192.png" alt=''/> </Link>
        </div>
        <div className="nav-links">
          <Link to='/' style={linkstyle}><div className="nav-item"> Home </div></Link>
          <Link to='/projects' style={linkstyle}><div className="nav-item">College Details</div></Link>
          <Link to='/dashboard' style={linkstyle}><div className="nav-item">Dashboard</div></Link>
{/*          <Link to='/contact' style={linkstyle}><div className="nav-item">Contact Me</div></Link>
  <Link to='/login' style={linkstyle}><div className="nav-item">{text}</div></Link>*/}
           {/* <LoginRoute auth={Auth.auth} comp={Login} className="nav-item" exact></LoginRoute>  */}
        </div>
    </div>
  );
}

export default Nav;