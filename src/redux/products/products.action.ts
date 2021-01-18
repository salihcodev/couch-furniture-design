import prodsActionTypes from './products.actionTypes';

export const redirectToSingleProd = (id: number) => ({
  type: prodsActionTypes.REDIRECT_TO_SINGLE_PROD,
  payload: id,
});
