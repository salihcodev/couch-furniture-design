import prodsActionTypes from './products.actionTypes';

export const redirectToSingleProd = (id: number) => ({
  type: prodsActionTypes.REDIRECT_TO_SINGLE_PROD,
  payload: id,
});

export const searchTermSearch = (term: string | null) => ({
  type: prodsActionTypes.FILTER_WITH_SEARCH_TERM,
  payload: term,
});
