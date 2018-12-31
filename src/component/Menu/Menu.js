import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigator.css';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return(
    <div className="Navigator">
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
            <NavLink exact to="/posts">    
                <Button>Posts</Button>
            </NavLink>
        </Button.Group>
    </div>
  );
};

export default Navigator;