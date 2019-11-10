import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <NavBarContainer/>
            </>
        )
    }
}

export default Main; 