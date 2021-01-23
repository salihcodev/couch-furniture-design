import bagActionTypes from './bag.actionTypes';

export const addItemToBag = (product: any) => ({
  type: bagActionTypes.ADD_ITEM_TO_BAG,
  payload: product,
});
