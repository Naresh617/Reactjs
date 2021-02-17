import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListContact from './ListContact';
import UserComponent from './UserComponent';


class User extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Users Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListContact} />
                        <Route path="/users" exact component={ListContact} />
                        <Route path="/adduser/:id" exact component={UserComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default User