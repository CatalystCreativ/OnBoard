import React from 'react';
import ProductIndexContainer from '../products/product_index_container';
import SearchWithFiltersContainer from './search_with_filters_container';

class SearchPage extends React.Component {
    constructor(props){
        super(props);
    }

    changeCategory(e) {
        e.preventDefault();
        const category = e.target.value;
        this.setState({category});
    }

    render(){
        return (
            <>
                <strong>SEARCH!?!?!?!?!!?!?!!!!!!</strong>
                <SearchWithFiltersContainer />
                <ProductIndexContainer />
            </>
        )
    }
}

export default SearchPage; 