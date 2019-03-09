<<<<<<< HEAD
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, Search, Question, Login, Menu} from 'components/pages';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    {/* <Route path="/search/:name" component={Search}/> */}
                    <Route path="/search" component={Search}/>
                    <Route path="/question" component={Question}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

=======
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home, Search, Question, Login, Menu} from 'components/pages';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    {/* <Route path="/search/:name" component={Search}/> */}
                    <Route path="/search" component={Search}/>
                    <Route path="/question" component={Question}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

>>>>>>> 560347a992719b63c0cc08357e99b422873be7b8
export default App;