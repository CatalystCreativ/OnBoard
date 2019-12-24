import React from 'react';
import ProductItemContainer from './product_index_item_container';

class ProductIndex extends React.Component {
   constructor(props) {
      super(props);
      this.products = this.props.products;
      this.addFavorite = this.props.addFavorite;
      this.currentUserId = this.props.currentUserId;
      this.handleFavorite = this.handleFavorite.bind(this);
   }

   handleFavorite() {
      const productId = this.product.id;
      this.addFavorite(productId)
   }

   componentDidMount() {
      this.props.requestProducts(this.currentUserId);
   }

   render() {
      let products = "";
      
      if ( this.props.products.length ) {
         // console.log(this.props.products)
        products = this.props.products.map(( product, idx ) => {
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