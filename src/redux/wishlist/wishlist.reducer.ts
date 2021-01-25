import wishlistActionTypes from './wishlist.actionTypes';
import { removeWishListItem, toggleWishlistItem } from './hook.util';

const INITIAL_STATE = {
  wishlist: [],
};

const wishlistReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case wishlistActionTypes.TOGGLE_WISHLIST_ITEM:
      const { updatedWishListAfterWished } = toggleWishlistItem(
        state.wishlist,
        action.payload
      );
      return { ...state, wishlist: updatedWishListAfterWished };

    case wishlistActionTypes.REMOVE_WISHLIST_ITEM:
      const { updatedWishListAfterRemove } = removeWishListItem(
        state.wishlist,
        action.payload
      );
      return { ...state, wishlist: updatedWishListAfterRemove };

    default:
      return state;
  }
};

export default wishlistReducer;
