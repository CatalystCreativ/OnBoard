import React from 'react';
import Splash from './splash';
import NavBar from './navbar';
import { HashRouter } from 'react-router-dom';
import SessionForm from './session/session_form';
import SignUp from './session/sign_up';

export default function App({store}) {
    return (
        <>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={SessionForm} />
            <Route exact path="/signup" component={SignUp} />
            {/* <Route exact path="/users/:userId" component={} />
            <Route exact path="/users/:userId/:productId" component={} /> */}
            <Splash/>
        </>
    )    
}