import React from 'react';
import NavBar from './navbar';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <NavBar/>
            </>
        )
    }
}

export default Main; 