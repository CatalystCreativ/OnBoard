import React from 'react';
import ProductItemContainer from './product_item_container';

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
      
      if ( this.products ) {
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
             { products }
         </ul>
      )
   }
}

export default ProductIndex;