import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from './Login';
import Signin from './Signin';
import Main from './Main';
import App from './App';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/Registro" component={Signin}/>
            <Route path="/Main" component={Main}/>
            <Route path="/" component={Login}/>
            </Switch>
    </App>;

export default AppRoutes;