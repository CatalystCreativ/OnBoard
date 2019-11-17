import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
   constructor(props) {
      super(props);
      this.product = this.props.product;
      this.addFavorite = this.props.addFavorite;
      this.handleFavorite = this.handleFavorite.bind(this);
   }

   handleFavorite() {
      const productId = this.product.id;
      this.addFavorite(productId)
   }

   render() {
      const product = this.product;

      return (
         <Link to={`/products/${product.id}`}>
            Product Item
            <button onClick={this.handleFavorite}>Favorite</button>
            <button>Message</button>
            <div className="project_image"></div>
            <label>{product.title}</label>
            <label>{product.condition}</label>
            <label>{product.location}</label>
         </Link>
      )
   }
}

export default ProductItem;