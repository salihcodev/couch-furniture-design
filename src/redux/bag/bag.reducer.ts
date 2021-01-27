import bagActionTypes from './bag.actionTypes';
import { itemToRemove, itemToAdd, itemToDecrease } from './hooks.util';

const INITIAL_STATE = {
  bagList: [],
};

const bagReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case bagActionTypes.ADD_ITEM_TO_BAG:
      const { updateBagListAfterAdd } = itemToAdd(
        state.bagList,
        action.payload.product,
        action.payload.count
      );
      return { ...state, bagList: updateBagListAfterAdd };

    case bagActionTypes.REMOVE_BAG_ITEM:
      const { updateBagListAfterRemove } = itemToRemove(
        state.bagList,
        action.payload
      );
      return { ...state, bagList: updateBagListAfterRemove };

    case bagActionTypes.DECREASE_BAG_ITEM:
      const { updateBagListAfterDecrease } = itemToDecrease(
        state.bagList,
        action.payload
      );
      return { ...state, bagList: updateBagListAfterDecrease };

    default:
      return state;
  }
};

export default bagReducer;
