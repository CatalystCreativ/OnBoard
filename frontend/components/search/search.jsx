import React from 'react';
import ProductItemContainer from './product_item_container';

class Search extends React.Component {
   constructor(props) {
      super(props);
      this.products = this.props.products;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChange = this.onUpdate.bind(this);
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
   }

   onChange(e) {
       const searchTerm = e.target.value;
       this.setState({searchTerm})
   }

   render() {
      let products = "";
      
      if ( this.products.length ) {
        products = this.products.map(( product, idx ) => {
            return (
                <li key={`product-${idx}`}>
                    <ProductItemContainer product={ product } />
                </li>
            )
        })
      }


      return (
         <form>
             <input type="text" onChange={this.onChange} value={this.state.searchTerm}></input>
             <input></input>
             <input></input>
             <input type="radio"></input>
             <button type="submit" onClick={this.handleSubmit}></button>
         </form>
      )
   }
}

export default Search;