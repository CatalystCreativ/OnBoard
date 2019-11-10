import React from 'react';
import Splash from './splash';
import NavBar from './navbar/navbar_container';
import { Route, HashRouter } from 'react-router-dom';
import SessionForm from './session/session_form';
import SignUp from './session/sign_up';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

export default function App({store}) {
    return (
        <>
            <NavBar/>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={SessionForm} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <ProtectedRoute exact path="/users/:userId" component={SessionForm} />
            <ProtectedRoute exact path="/users/:userId/:productId" component={SignUp} />
        </>
    )    
}