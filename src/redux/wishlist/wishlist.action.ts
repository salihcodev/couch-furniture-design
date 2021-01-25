import bagActionTypes from './wishlist.actionTypes';

export const toggleWishlistItem = (product: any) => ({
  type: bagActionTypes.TOGGLE_WISHLIST_ITEM,
  payload: product,
});

export const removeWishListItem = (slug: any) => ({
  type: bagActionTypes.REMOVE_WISHLIST_ITEM,
  payload: slug,
});
