import React from 'react';
import { withRouter } from 'react-router';

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
      console.log(this.state.searchTerm);
      this.props.history.push('/search');
   }

   update(e) {
       const searchTerm = e.target.value;
       this.setState({searchTerm})
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
             <input type="text" onChange={this.update} value={this.state.searchTerm}></input>
             <button type="submit" onClick={this.handleSubmit}>Search</button>
         </form>
      )
   }
}

export default withRouter(SearchBar);