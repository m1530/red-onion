import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../../context/AuthProvider';
import Menu from '../../Shared/Menu/Menu';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Homeroute = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Menu></Menu>
                    <Switch>
                        <Route path="/home">
                            <Breakfast></Breakfast>
                        </Route>
                        <Route path="/lunch">
                            <Lunch></Lunch>
                        </Route>
                        <Route path="/breakfast">
                            <Breakfast></Breakfast>
                        </Route>
                        <Route path="/dinner">
                            <Dinner></Dinner>
                        </Route>
                        <Route exact path="/">
                            <Breakfast></Breakfast>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default Homeroute;