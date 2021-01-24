import bagActionTypes from './wishlist.actionTypes';

export const addItemToWishlist = (product: any) => ({
  type: bagActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: product,
});

export const removeWishListItem = (product: any) => ({
  type: bagActionTypes.REMOVE_WISHLIST_ITEM,
  payload: product,
});
