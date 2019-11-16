import React from 'react';
import Homepage from './homepage';
import SettingsContainer from './settings_container';
import { Router, Route, HashRouter } from 'react-router-dom';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <Route exact path="/settings" component={SettingsContainer}/>
            </>
        )
    }
}

export default Main; 