import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import SearchBarContainer from '../search/search_bar_container';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.products = this.props.products;
        this.state = {
            category: "",
            searchTerm: ""
        }
        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(e) {
        e.preventDefault();
        const category = e.target.value;
        this.setState({category});
    }

    update(e) {
        const field = e.target.name;
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                I'm home!
                <input type="text" onChange={this.update} value={this.state.searchTerm}></input>
                <button>Location</button>
                <button>Search</button>
                <br />
                <button type="button" name="category" onClick={this.update} value={'surf'}>Surf</button>
                <button type="button" name="category" onClick={this.update} value={'skate'}>Skate</button>
                <button type="button" name="category" onClick={this.update} value={'snow'}>Snow</button>
                <br />
                <button>Advanced</button>
                <ProductIndexContainer products={ this.products } />
            </form>
        )
    }
}

export default Home; 