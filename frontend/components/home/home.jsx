import React from 'react';
import ProductIndexContainer from '../products/product_index_container';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.products = this.props.products;
        this.state = {
            category: ""
        }
        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(e) {
        e.preventDefault();
        const category = e.target.value;
        this.setState({category});
    }

    render(){
        return (
            <>
                I'm home!
                <button onClick={this.changeCategory} value={'surf'}>Surf</button>
                <button onClick={this.changeCategory} value={'skate'}>Skate</button>
                <button onClick={this.changeCategory} value={'snow'}>Snow</button>
                <ProductIndexContainer products={ this.products } />
            </>
        )
    }
}

export default Home; 