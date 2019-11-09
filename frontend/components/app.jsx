import React from 'react';
import Splash from './splash';
import NavBar from './navbar';

export default function App({store}) {
    return (
        <>
            <NavBar/>

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={} />
            <Route exact path="/signup" component={} />
            <Route exact path="/users/:userId" component={} />
            <Route exact path="/users/:userId/:productId" component={} />
            <Splash/>
        </>
    )    
}