export const fetchFavorites = (userId) => {
   return $.ajax({
      method: 'GET',
      url: `/api/users/${ userId }/favorites`
   });
};

export const addFavorite = (productId) => {
   return $.ajax({
      method: 'POST',
      url: `/api/products/${ productId }/favorites`
   })
}

export const deleteFavorite = ({ productId, favoriteId }) => {
   return $.ajax({
      method: 'DELETE',
      url: `/api/products/${ productId }/favorites/${ favoriteId }`
   });
};