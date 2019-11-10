import * as FavoriteAPIUtil from '../util/favorite_api_util';
import { receiveErrors } from './error_actions';
import { receiveProduct } from './product_actions';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';

const receiveFavorites = favorites => {
   return {
      type: RECEIVE_FAVORITES,
      favorites
   }
}

export const fetchFavorites = userId => dispatch => {
   return FavoriteAPIUtil.fetchFavorites(userId).then(favorites => dispatch(receiveFavorites(favorites)),
      err => dispatch(receiveErrors(err.responseJSON)));
}

export const addFavorite = productId => dispatch => {
   return FavoriteAPIUtil.addFavorite(productId).then(product => dispatch(receiveProduct(product)),
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