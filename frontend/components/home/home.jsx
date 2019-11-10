import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Home extends React.Component {
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

export default Home; 