import prodsActionTypes from './products.actionTypes';

export const redirectToSingleProd = (slug: string) => ({
  type: prodsActionTypes.REDIRECT_TO_SINGLE_PROD,
  payload: slug,
});

export const searchTermSearch = (term: string | null) => ({
  type: prodsActionTypes.FILTER_WITH_SEARCH_TERM,
  payload: term,
});
