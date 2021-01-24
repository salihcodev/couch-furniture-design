import bagActionTypes from './bag.actionTypes';
import { itemToRemove, itemToAdd } from './hooks.util';

const INITIAL_STATE = {
  bagList: [],
  bagTotalPrice: 0,
};

const bagReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case bagActionTypes.ADD_ITEM_TO_BAG:
      const { updateBagListAfterAdd } = itemToAdd(
        state.bagList,
        action.payload
      );
      return { ...state, bagList: updateBagListAfterAdd };

    case bagActionTypes.REMOVE_BAG_ITEM:
      const { updateBagListAfterRemove } = itemToRemove(
        state.bagList,
        action.payload
      );
      return { ...state, bagList: updateBagListAfterRemove };

    default:
      return state;
  }
};

export default bagReducer;
