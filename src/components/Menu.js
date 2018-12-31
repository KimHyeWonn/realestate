import React from 'react';
import { Button } from 'semantic-ui-react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return(
    <div className="Navigator">
    <div className="Navigator_position">
        <Button.Group widths='4'>
            <NavLink exact to="/"> 
                <Button>Home</Button>
            </NavLink>
            <NavLink exact to="/about">    
                <Button>About</Button>
            </NavLink>
            <NavLink exact to="/about/foo">
                <Button>Index</Button>
            </NavLink>
            <NavLink exact to="/ViewPost">    
                <Button>Posts</Button>
            </NavLink>
        </Button.Group>
        </div>
    </div>
  );
};

export default Navigator;