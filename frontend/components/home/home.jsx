import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.products = this.props.products;
        this.state = {
            category: ""
        }
    }

    changeCategory() {

    }

    render(){
        // const surfProducts = this.products["surf"];
        // const skateProducts = this.products["skate"];
        // const snowProducts = this.products["snow"];



        return (
            <>

            </>
        )
    }
}

export default Home; 