import bagActionTypes from './wishlist.actionTypes';

export const addItemToWishlist = (product: any) => ({
  type: bagActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: product,
});
