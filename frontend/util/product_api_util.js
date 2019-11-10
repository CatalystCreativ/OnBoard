export const fetchProducts = filters => {
   return $.ajax({
      method: 'GET',
      url: '/api/products',
      data: {filters: filters}
   });
};

export const fetchProduct = id => {
   return $.ajax({
      method: 'GET',
      url: '/api/products/${id}'
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
      url: '/api/products/${data.id}',
      data: data.formData,
      contentType: false,
      processData: false
   });
};

export const deleteProduct = id => {
   return $.ajax({
      method: 'DELETE',
      url: '/api/products/${id}'
   });
};