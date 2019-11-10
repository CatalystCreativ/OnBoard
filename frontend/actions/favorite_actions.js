import * as FavoriteAPIUtil from '../util/favorite_api_util';
import { receiveErrors } from './error_actions';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';

const receiveFavorites = ({ favorites, products }) => {
   return {
      type: RECEIVE_FAVORITES,
      favorites,
      products
   }
}

const receiveFavorite = (productId) => {
   return {
      type: RECEIVE_FAVORITE,
      productId
   }
}

export const requestFavorites = userId => dispatch => {
   return FavoriteAPIUtil.fetchFavorites(userId).then(data => dispatch(receiveFavorites(data)),
      err => dispatch(receiveErrors(err.responseJSON)));
}

export const addFavorite = productId => dispatch => {
   return FavoriteAPIUtil.addFavorite(productId).then(() => dispatch(receiveFavorite(productId)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

const removeFavorite = id => {
   return {
      type: REMOVE_FAVORITE,
      favoriteId: id
   }
}

export const deleteFavorite = id => dispatch => {
   return FavoriteAPIUtil.deleteFavorite(id).then(() => dispatch(removeFavorite(id.favoriteId)),
      err => dispatch(receiveErrors(err.responseJSON)));
};