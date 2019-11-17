export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const REMOVE_TAGS = 'REMOVE_TAGS';

export const receiveTags = (tags) => {
   return {
      type: RECEIVE_TAGS,
      tags,
   }
}

export const removeTags = () => {
   return {
      type: REMOVE_TAGS,
   }
}