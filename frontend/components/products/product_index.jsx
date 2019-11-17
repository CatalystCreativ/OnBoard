import React from 'react';
import ProductItemContainer from './product_index_item_container';

class ProductIndex extends React.Component {
   constructor(props) {
      super(props);
      this.products = this.props.products;
      this.addFavorite = this.props.addFavorite;
      this.handleFavorite = this.handleFavorite.bind(this);
   }

   handleFavorite() {
      const productId = this.product.id;
      this.addFavorite(productId)
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
         <ul>
             Product Index
             { products }
         </ul>
      )
   }
}

export default ProductIndex;