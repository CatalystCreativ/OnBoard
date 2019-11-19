import React from 'react';
import { receiveTags } from '../../actions/tag_actions';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.products = this.props.products;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
      this.state = {
          searchTerm: "",
          tags: []
      }
   }

   handleFavorite() {
      const productId = this.product.id;
      this.addFavorite(productId)
   }

   handleSubmit(e) {
      e.preventDefault();
      receiveTags(this.state)
      console.log(this.state.searchTerm);
   }

   update(e) {
       const searchTerm = e.target.value;
       this.setState({searchTerm})
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

         </form>
      )
   }
}

export default SearchBar;