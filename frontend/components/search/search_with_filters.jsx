import React from 'react';
import { receiveTags } from '../../actions/search_filter_actions';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.products = this.props.products;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
      this.state = {
          searchTerm: "",
          category: "surf",
          tags: []
      };
      if (this.props.searchFilters) {
         this.state = this.props.searchFilters;
      };
      this.resetFilters = this.resetFilters.bind(this);
   }

   handleFavorite() {
      const productId = this.product.id;
      this.addFavorite(productId)
   }

   handleSubmit(e) {
      e.preventDefault();
      receiveSearchFilters(this.state);
      console.log(this.state.searchTerm);
   }

   update(e) {
       const searchTerm = e.target.value;
       this.setState({searchTerm});
   }

   resetFilters() {
      this.props.resetSearchFilters();
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.update} value={this.state.searchTerm}></input>
            <button>Location</button>
            <button>Search</button>
            <br/>
            <button name="category" onClick={this.update} value={'surf'}>Surf</button>
            <button name="category" onClick={this.update} value={'skate'}>Skate</button>
            <button name="category" onClick={this.update} value={'snow'}>Snow</button>
            <br/>
            <button>Volume</button>
            <button>Skill Level</button>
            <button>Brand</button>
            <br/>
            <button>Save Filters</button>
            <button type="button" onClick={this.resetFilters}>Reset Filters</button>
         </form>
      )
   }
}

export default SearchBar;