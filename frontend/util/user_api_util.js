export const fetchUser = id => {
   console.log('fetching user ', id);
   return $.ajax({
      method: 'GET',
      url: '/api/users/${id}'
   });
};

export const updateUserPhoto = data => {
   return $.ajax({
      method: 'PATCH',
      url: '/api/users/${data.id}',
      data: data.formData,
      contentType: false,
      processData: false
   });
};

export const updateUser = data => {
   return $.ajax({
      method: 'PATCH',
      url: '/api/users/${data.id}',
      data: data,
      contentType: false,
      processData: false
   });
};

export const deleteUser = id => {
   return $.ajax({
      method: 'DELETE',
      url: '/api/projects/${id}'
   });
};