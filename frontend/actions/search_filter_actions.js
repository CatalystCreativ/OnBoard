export const RECEIVE_SEARCH_FILTERS = 'RECEIVE_SEARCH_FILTERS';
export const REMOVE_SEARCH_FILTERS = 'REMOVE_SEARCH_FILTERS';

export const receiveSearchFilters = (searchFilters) => {
   return {
      type: RECEIVE_SEARCH_FILTERS,
      searchFilters,
   }
}

export const removeSearchFilters = () => {
   return {
      type: REMOVE_SEARCH_FILTERS,
   }
}