export const logIn = user => {
   return $.ajax({
      method: 'POST',
      url: '/api/session',
      data: {user}
   });
};

export const signUp = user => {
   console.log('ajax hit with ', user);
   return $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user },
      contentType: false
   });
};

export const logOut = () => {
   return $.ajax({
      method: 'DELETE',
      url: '/api/session'
   })
}