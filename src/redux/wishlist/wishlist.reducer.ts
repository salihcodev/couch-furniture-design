import wishlistActionTypes from './wishlist.actionTypes';

const INITIAL_STATE = {
  wishlist: [],
};

const wishlistReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case wishlistActionTypes.ADD_ITEM_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    default:
      return state;
  }
};

export default wishlistReducer;