import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import {Home,About,ViewPost} from '../components/pages';
import Menu from 'components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                    <Route path="/ViewPost" component={ViewPost}/>
                </Switch>
            </div>
        );
    }
}

export default App;