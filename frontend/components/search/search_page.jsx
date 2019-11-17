import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import SearchBarContainer from '../search/search_bar_container';

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
                <SearchBarContainer />
                <button onClick={this.changeCategory} value={'surf'}>Surf</button>
                <button onClick={this.changeCategory} value={'skate'}>Skate</button>
                <button onClick={this.changeCategory} value={'snow'}>Snow</button>
                <br />
                <button>Advanced</button>
                <ProductIndexContainer products={ this.products } />
            </>
        )
    }
}

export default Home; 