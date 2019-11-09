export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const removeErrors = () => {
   return {
      type: REMOVE_ERRORS,
      errors: {}
   };
};

export const receiveErrors = errors => {
   return {
      type: RECEIVE_ERRORS,
      errors
   };
};