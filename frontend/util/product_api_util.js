export const fetchProducts = searchFilters => {
   return $.ajax({
      method: 'GET',
      url: '/api/products',
      data: { searchFilters }
   });
};

// export const fetchFavoriteProducts = userId => {
//    return $.ajax({
//       method: 'GET',
//       data: { filters: { favoritingUserId: userId }}
//    })
// }

export const fetchProduct = id => {
   return $.ajax({
      method: 'GET',
      url: `/api/products/${id}`
   });
};

export const createProduct = formData => {
   return $.ajax({
      method: 'POST',
      url: '/api/products',
      data: formData,
      contentType: false,
      processData: false
   })
}

export const updateProduct = data => {
   return $.ajax({
      method: 'PATCH',
      url: `/api/products/${data.id}`,
      data: data.formData,
      contentType: false,
      processData: false
   });
};

export const deleteProduct = id => {
   return $.ajax({
      method: 'DELETE',
      url: `/api/products/${id}`
   });
};