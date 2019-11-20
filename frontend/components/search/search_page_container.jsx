import { connect } from 'react-redux';
import { receiveProducts } from '../../actions/product_actions';
import Home from './home';

const msp = (state) => {
    const products = state.entities.products;
    const searchFilters = state.entities.searchFilters
    return {
        products,
        searchFilters
    }
}

const mdp = dispatch => {
    return {
        receiveProducts: searchFilters => dispatch(receiveProducts(searchFilters))
    }
}

export default connect(msp, mdp)(Home)