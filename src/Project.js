import React, {useState} from 'react';
import './Project.css';

function Project(props){
    const [hover,setHover] = useState(false);
    return (
        <div className={hover ? 'project shadow' : 'project'} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          {/*  <a href={props.link}>*/}
<span>
            <div className="p1">
                <img src={props.img} alt=""/>
            </div>
            <div className="p2" >
                <span className="project-title" >{props.name}</span>
                <span className="project-description" ></span>
            </div>
</span>
           {/* </a>*/}
        </div>
    );
}

export default Project;