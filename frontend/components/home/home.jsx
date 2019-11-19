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

    handleSubmit() {

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                I'm home!
                <SearchBarContainer />
                <button type="button" onClick={this.changeCategory} value={'surf'}>Surf</button>
                <button type="button" onClick={this.changeCategory} value={'skate'}>Skate</button>
                <button type="button" onClick={this.changeCategory} value={'snow'}>Snow</button>
                <br />
                <button>Advanced</button>
                <ProductIndexContainer products={ this.products } />
            </form>

            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.update} value={this.state.searchTerm}></input>
                <button>Location</button>
                <button type="submit" onClick={this.handleSubmit}>Search</button>
                <br />
                <button onClick={this.changeCategory} value={'surf'}>Surf</button>
                <button onClick={this.changeCategory} value={'skate'}>Skate</button>
                <button onClick={this.changeCategory} value={'snow'}>Snow</button>
                <br />
                <button>Volume</button>
                <button>Skill Level</button>
                <button>Brand</button>

            </form>
        )
    }
}

export default Home; 