import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, Search, Login} from 'components/pages'; //ViewPost
import Menu from 'components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={Search}/>
                    <Route path="/about" component={Search}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;