export const logIn = user => {
   console.log('logging in user ', user);
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
   });
};

export const logOut = () => {
   return $.ajax({
      method: 'DELETE',
      url: '/api/session'
   })
}