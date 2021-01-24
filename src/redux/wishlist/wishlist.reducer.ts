import wishlistActionTypes from './wishlist.actionTypes';

const INITIAL_STATE = {
  wishlist: [],
};

const wishlistReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case wishlistActionTypes.ADD_ITEM_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case wishlistActionTypes.REMOVE_WISHLIST_ITEM:
      const filteredWishListAfterRemove = () => {
        return state.wishlist?.filter(
          ({ slug }: any) => slug !== action.payload
        );
      };
      return { ...state, wishlist: filteredWishListAfterRemove() };

    default:
      return state;
  }
};

export default wishlistReducer;
